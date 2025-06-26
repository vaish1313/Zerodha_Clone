require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");
const { UserModel } = require("./model/UserModel");
const { createSecretToken } = require("./SecretToken.js");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Change this to your frontend URL
    credentials: true,
  })
);

//Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
    }

    const user = await UserModel.create({
      email,
      password,
      username,
      createdAt,
    });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });
  } catch (e) {
    console.error("Signup error:", e);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
});

//Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(201).json({
      message: "User logged in successfully",
      success: true,
    });
  } catch (e) {
    console.error("Login error:", e);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
});

//Auth Status Route
app.post("/", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ status: false });

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return res.json({ status: false });

    const user = await UserModel.findById(data._id);
    if (user) return res.json({ status: true, user: user.username });
    else return res.json({ status: false });
  });
});

// All Holdings Route
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

//All Positions Route
app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionModel.find({});
  res.json(allPositions);
});

//Save New Order
app.post("/newOrder", async (req, res) => {
  const newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order Saved!");
});

app.get("/logout", (req, res) => {
  res.clearCookie("token", {
    sameSite: "None",
    secure: true,
  });
  return res
    .status(200)
    .json({ message: "Logged out successfully", success: true });
});

// Start Server and Connect to DB
mongoose
  .connect(url)
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

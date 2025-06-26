import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        {
          withCredentials: true,
        }
      );

      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <div
      className="container"
      style={{ marginTop: "150px", marginLeft: "110px" }}
    >
      <div className="row text-center mb-5" style={{ lineHeight: "4rem" }}>
        <h1>Welcome Back</h1>
        <p className="fs-4 text-muted">
          Login to access your trading dashboard and portfolio
        </p>
      </div>
      <div className="row" style={{ marginTop: "90px", marginBottom: "120px" }}>
        <div className="col-6">
          <img src="/images/signup.png" alt="Login" />
        </div>
        <div className="col-1"></div>
        <div className="col-4" style={{ marginTop: "50px" }}>
          <h1 className="mb-4">Login</h1>
          <form action="/login" method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                onChange={handleOnChange}
              />
            </div>
            <div className="d-flex align-items-center mt-4">
              <button type="submit" className="btn btn-success me-3">
                Login
              </button>
              <span>
                Don't have an account ? <Link to={"/signup"}>Signup</Link>
              </span>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;

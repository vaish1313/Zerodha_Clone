import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      return handleError("Please fill all the fields");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          toast.dismiss();
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div
      className="container"
      style={{ marginTop: "150px", marginLeft: "110px" }}
    >
      <div className="row text-center mb-5" style={{ lineHeight: "4rem" }}>
        <h1>Open a free demat and trading account online</h1>
        <p className="fs-4 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row" style={{ marginTop: "90px", marginBottom: "120px" }}>
        <div className="col-6">
          <img src="/images/signup.png" alt="Sign up illustration" />
        </div>

        <div className="col-1"></div>

        <div className="col-4">
          <h1 className="mb-4">Sign Up Now</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleOnChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                id="exampleInputUsername1"
                aria-describedby="usernameHelp"
                onChange={handleOnChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleOnChange}
              />
            </div>

            <div className="d-flex align-items-center mt-4">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <span style={{ marginLeft: "10px" }}>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

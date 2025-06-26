import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  const handleSignupCLick = () => {
    navigate("/signup");
  };
  return (
    <div className="container p-5 mb-5 mt-5" style={{ marginLeft: "100px" }}>
      <div className="row justify-content-center text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="mt-3" style={{ fontSize: "20px" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-3"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignupCLick}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;

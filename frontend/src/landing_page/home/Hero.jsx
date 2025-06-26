import React from "react";

function Hero() {
  return (
    <div
      className="container p-5 mb-5"
      style={{ marginLeft: "100px", marginTop: "100px" }}
    >
      <div className="row justify-content-center text-center">
        <div className="col-md-10">
          <img
            src="/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-5"
          />
          <h1 className="mt-5">Invest in everything</h1>
          <p className="mt-3" style={{ fontSize: "20px" }}>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary fs-5 px-4 mt-4 mb-5">
            Sign Up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

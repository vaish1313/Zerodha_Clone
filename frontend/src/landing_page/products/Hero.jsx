import React from "react";

function Hero() {
  return (
    <div
      className="container border-bottom mb-5"
      style={{ marginLeft: "110px", marginTop: "100px" }}
    >
      <div className="text-center mt-5 p-5" style={{ lineHeight: "2rem" }}>
        <h1 className="text-muted fs-1">Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

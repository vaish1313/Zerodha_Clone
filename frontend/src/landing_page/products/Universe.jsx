import React from "react";

function Universe() {
  return (
    <div className="container mt-5" style={{ marginLeft: "100px" }}>
      <div className="row text-center">
        <h1 className="fs-2 text-muted">The Zerodha Universe</h1>
        <p className="p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/images/zerodhaFundhouse.png" style={{ height: "55px" }} />
          <p className="text-small text-muted p-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/sensibullLogo.svg" style={{ height: "55px" }} />
          <p className="text-small text-muted p-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/tijori.svg" style={{ height: "55px" }} />
          <p className="text-small text-muted p-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/streakLogo.png" style={{ height: "55px" }} />
          <p className="text-small text-muted p-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/smallcaseLogo.png" style={{ height: "55px" }} />
          <p className="text-small text-muted p-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/dittoLogo.png" style={{ height: "55px" }} />
          <p className="text-small text-muted p-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;

import React from "react";

function Awards() {
  return (
    <div className="container mt-5" style={{ marginLeft: "70px" }}>
      <div className="row">
        <div className="col-4 p-5" style={{ marginRight: "110px" }}>
          <img src="/images/largestBroker.svg" />
        </div>
        <div className="col-7 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5 mt-2">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="/images/pressLogos.png"
            alt="press Logos"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;

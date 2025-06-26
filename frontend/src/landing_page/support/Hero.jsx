import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{
        marginTop: "70px",
        width: "105.5%",
        lineHeight: "2rem",
      }}
    >
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5" style={{ marginLeft: "130px" }}>
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O , why is my order getting rejected..."
            style={{ backgroundColor: "white", fontSize: "17px" }}
          />
          <br />
          <a
            href=""
            style={{
              fontSize: "18px",
              textDecoration: "underline",
            }}
          >
            Track account opening
          </a>
          <a
            href=""
            style={{
              marginLeft: "20px",
              fontSize: "18px",
              textDecoration: "underline",
            }}
          >
            Track segment activation
          </a>
          <a
            href=""
            style={{
              marginLeft: "20px",
              fontSize: "18px",
              textDecoration: "underline",
            }}
          >
            Intraday margins <br />
          </a>
          <a
            href=""
            style={{
              fontSize: "18px",
              textDecoration: "underline",
            }}
          >
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-3" style={{ lineHeight: "3.5rem" }}>
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{ textDecoration: "underline" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="" style={{ textDecoration: "underline" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

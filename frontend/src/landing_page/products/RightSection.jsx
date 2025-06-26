import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div
      className="container text-muted"
      style={{ marginTop: "60px", marginLeft: "100px" }}
    >
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-2">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

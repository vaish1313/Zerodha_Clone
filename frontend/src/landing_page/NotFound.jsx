import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mb-5 mt-5" style={{ marginLeft: "100px" }}>
      <div className="row justify-content-center text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <p className="mt-3" style={{ fontSize: "20px" }}>
          Sorry , the page you are looking does not exist .
        </p>
      </div>
    </div>
  );
}

export default NotFound;

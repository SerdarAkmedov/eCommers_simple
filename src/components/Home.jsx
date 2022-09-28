import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="../assets/bg.png"
          className="card-img"
          alt="Logo"
          height="695px"
        />
        <div className="card-img-overlay d-flex justify-content-center align-items-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bold">Lorem Ipsum</h5>
            <p className="card-text fs-3 fw-bolder">
              Lorem ipsum dolor sit, amet consectetur adipisici
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;

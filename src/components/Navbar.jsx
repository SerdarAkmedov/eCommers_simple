import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const state = useSelector((state) => state.handleCart)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold " to="/">
            Türkmen Haryt
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Harytlar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Biz hakda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Baglanmak
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark me-2">
                <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Içeri
                gir
              </Link>
              <Link to="/register" className="btn btn-outline-dark me-2">
                <i className="fa fa-user-plus me-1" aria-hidden="true"></i>
                Agza bol!
              </Link>
              <Link to="/cart" className="btn btn-outline-dark me-2">
                <i className="fa fa-cart-plus me-1" aria-hidden="true"></i>
                Sebet ({state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

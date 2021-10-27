import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Railway Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/trainlist">
              Train List
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Log In
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

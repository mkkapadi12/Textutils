import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/">
        {props.logoName}
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.about}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Text
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="/">
                Action 1
              </a>
              <a className="dropdown-item" href="/">
                Action 2
              </a>
            </div>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }
            htmlFor="flexSwitchCheckDefault`}
            >
              Enable Dark Mode
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logoName: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  logoName: "Mayur2",
  about: "About",
};

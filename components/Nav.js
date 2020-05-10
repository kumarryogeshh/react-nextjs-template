import React from "react";

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          {props.active === "home" ? (
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          ) : (
            <li className="nav-item ">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          )}

          {props.active === "feature" ? (
            <li className="nav-item active">
              <a className="nav-link" href="/features">
                Features <span className="sr-only">(current)</span>
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/features">
                Features
              </a>
            </li>
          )}

          {props.active === "pricing" ? (
            <li className="nav-item active">
              <a className="nav-link" href="/pricing">
                Pricing <span className="sr-only">(current)</span>
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
          )}

          {props.active === "about" ? (
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About <span className="sr-only">(current)</span>
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

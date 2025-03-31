import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img className="logo-img" src="/img.png" alt="Logo" />
            </Link>
          </div>
          <nav className="nav-menu">
            <Link to="/universities">Universities</Link>
            <Link to="/careers">Career Path</Link>
            <Link to="/resources">Resources</Link>
            <div className="separator"></div>
            <div className="dropdown">
              <button className="cta-button dropdown-toggle">For students</button>
              <div className="dropdown-menu">
                <Link to="/signup">Sign up</Link>
                <Link to="/signin">Sign in</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="cta-button dropdown-toggle">For entreprises</button>
              <div className="dropdown-menu">
                <Link to="/university-signup">Sign up</Link>
                <Link to="/university-signin">Sign in</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
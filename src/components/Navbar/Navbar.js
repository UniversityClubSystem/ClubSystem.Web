import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="w-100">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Club System</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav w-100 d-flex justify-content-between">
          <div className="d-flex">
            <Link className="nav-item nav-link" to="/home">Home</Link>
            <Link className="nav-item nav-link" to="/clubs">Clubs</Link>
            <Link className="nav-item nav-link" to="/users">Users</Link>
          </div>
          <div className="d-flex">
            <Link className="nav-item nav-link my-2 my-lg-0" to="/signUp">Sign Up</Link>
            <Link className="nav-item nav-link my-2 my-lg-0" to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;

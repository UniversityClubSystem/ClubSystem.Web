import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Club System</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/home">Home</Link>
            <Link className="nav-item nav-link" to="/clubs">Clubs</Link>
            <Link className="nav-item nav-link" to="/users">Users</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

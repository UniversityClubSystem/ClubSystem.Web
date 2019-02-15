import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useGlobal } from 'reactn';

const NavigationItems = () => {
  const [isSignedIn, setIsSignedIn] = useGlobal('isSignedIn');

  function handleSignOut() {
    localStorage.removeItem('token');
    setIsSignedIn(false);
  }

  return (
    <nav className="w-100 navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Club System
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="navbar-nav w-100 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link className="nav-item nav-link" to="/">
            Dashboard
          </Link>
          <Link className="nav-item nav-link" to="/clubs">
            Clubs
          </Link>
          <Link className="nav-item nav-link" to="/users">
            Users
          </Link>
          <Link className="nav-item nav-link" to="/club/new">
            <Button variant="contained" color="primary">
              New Club
            </Button>
          </Link>
          <Link className="nav-item nav-link" to="/post/new">
            <Button variant="contained" color="primary">
              New Post
            </Button>
          </Link>
        </div>
        <div className="d-flex">
          {!isSignedIn ? (
            <Link className="nav-item nav-link my-2 my-lg-0" to="/signUp">
              Sign Up
            </Link>
          ) : null}
          {!isSignedIn ? (
            <Link className="nav-item nav-link my-2 my-lg-0" to="/signIn">
              Sign In
            </Link>
          ) : null}
          {isSignedIn ? (
            <Button className="nav-item nav-link my-2 my-lg-0 text-white" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavigationItems;

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useGlobal } from 'reactn';

import styles from './navigation-items.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  const [isSignedIn, setIsSignedIn] = useGlobal('isSignedIn');

  function handleSignOut() {
    localStorage.removeItem('token');
    setIsSignedIn(false);
  }

  // if (!isSignedIn) return (<Redirect to="/" />);

  return (
    <nav className="w-100 navbar navbar-expand-lg navbar-light bg-light">
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
      <div className="navbar-nav w-100 d-flex justify-content-between">
        <div className="d-flex">
          <Link className="nav-item nav-link" to="/">
            Dashboard
          </Link>
          <Link className="nav-item nav-link" to="/clubs">
            Clubs
          </Link>
          <Link className="nav-item nav-link" to="/users">
            Users
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
            <Button
              className="nav-item nav-link my-2 my-lg-0"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavigationItems;

/*
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
              <Link className="nav-item nav-link" to="/">Home</Link>
              <Link className="nav-item nav-link" to="/clubs">Clubs</Link>
              <Link className="nav-item nav-link" to="/users">Users</Link>
            </div>
            <div className="d-flex">
              {
                !isLoggedIn
                  ? <Link className="nav-item nav-link my-2 my-lg-0" to="/signUp">Sign Up</Link>
                  : null
              }
              {
                !isLoggedIn
                  ? <Link className="nav-item nav-link my-2 my-lg-0" to="/login">Sign In</Link>
                  : null
              }
              {
                isLoggedIn
                  ? <Button className="nav-item nav-link my-2 my-lg-0"
                  onClick={handleSignOut}>Sign Out</Button>
                  : null
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
*/

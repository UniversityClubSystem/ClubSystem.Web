import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useGlobal } from 'reactn';

import Loader from 'react-loaders';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 17.5,
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 380,
    height: 370,
    border: '1px solid #BBBBBB',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  title: {
    fontSize: 20,
    textTransform: 'italic',
  },
  name: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 1.5,
    width: 300,
    height: 45,
  },
  password: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 300,
    height: 45,
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3,
    width: 170,
    height: 40,
  },
  resetPassword: {
    marginTop: theme.spacing.unit * 2,
  },
  loader: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'white',
    zIndex: 9999,
  },
  invalidPassword: {
    color: 'red',
  },
});

const SignIn = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginResponse, setLoginResponse] = useState({ ok: true });
  const [loaded, setLoaded] = useState(true);
  const [formDisabled, setFormDisabled] = useState(false);
  const { classes, location } = props;

  const { from } = location ? location.state || { from: { pathname: '/dashboard', test: '1234' } } : undefined;
  const [isSignedIn, setIsSignedIn] = useGlobal('isSignedIn');

  function saveTokenToLocalStorage(token) {
    window.localStorage.setItem('token', token);
  }

  function handleLogin() {
    const user = { username, passwordHash: password };
    setLoaded(false);
    setFormDisabled(true);
    axios
      .post('/api/user/login', user)
      .then(response => {
        setLoaded(true);
        setFormDisabled(false);
        setLoginResponse(response);
        saveTokenToLocalStorage(response.data);
        if (response.status === 200) {
          setIsSignedIn(true);
        }
      })
      .catch(error => {
        setLoginResponse(error);
        setLoaded(true);
        setFormDisabled(false);
      });
  }

  function onKeyPress(event) {
    if (event.key === 'Enter') {
      handleLogin();
      event.preventDefault();
    }
  }

  if (isSignedIn) {
    return <Redirect to={from} />;
  }

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <Loader type="ball-pulse" active={!loaded} />
        <p className={classes.title}>Login</p>
        <TextField
          id="name"
          label="Name"
          className={classes.name}
          value={username}
          disabled={formDisabled}
          onChange={e => setUsername(e.target.value)}
          onKeyPress={ev => onKeyPress(ev)}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          className={classes.password}
          value={password}
          disabled={formDisabled}
          onChange={e => setPassword(e.target.value)}
          onKeyPress={ev => onKeyPress(ev)}
          margin="normal"
        />
        {!loginResponse.ok ? <p className={classes.invalidPassword}>Invalid email or password</p> : null}
        <Button className={classes.button} variant="contained" color="primary" disabled={formDisabled} onClick={handleLogin}>
          Login
        </Button>
        <Link to="resetPassword" className={classes.resetPassword}>
          Reset password
        </Link>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default withStyles(styles)(SignIn);

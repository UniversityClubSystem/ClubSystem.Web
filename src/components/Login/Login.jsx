import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from 'react-loader';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 10
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 380,
    height: 370,
    // background: '#D3D3D3',
    border: '1px solid #DFE0E2',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textTransform: 'italic'
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
    borderRadius: 10,
    width: 170,
    height: 40,
  },
  forgotPassword: {
    marginTop: theme.spacing.unit * 2
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
    color: 'red'
  }
});

const Login = (props) => {
  const { classes } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginResponse, setLoginResponse] = useState({});
  const [loaded, setLoaded] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setLoaded(false);
    const user = {
      username,
      password
    };
    axios.post('/api/user/login', user).then((response) => {
      console.log('response:', response);
      setLoaded(true);
      setLoginResponse(response);
      if (response.status === 200) setIsLoggedIn(true);
    }).catch(() => {
      setLoaded(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.container}>
      {/* <form onSubmit={handleSubmit} className={classes.form}> */}
      <form className={classes.form}>
        <Loader className={classes.loader} loaded={loaded} />
        <p className={classes.title}>
          Login
        </p>
        <TextField
          id="name"
          label="Name"
          className={classes.name}
          value={username}
          onChange={e => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          className={classes.password}
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
        />
        {
          loginResponse.ok === false
            ? <p className={classes.invalidPassword}>Invalid email or password</p>
            : null
        }
        <Button variant="contained" color="primary" className={classes.button} onClick={handleLogin}>
          Login
        </Button>
        <Link to="forgotPassword" className={classes.forgotPassword}>
          Forgot password?
        </Link>
      </form>
    </div>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

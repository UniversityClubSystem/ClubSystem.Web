import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    background: '#D3D3D3',
    borderRadius: 20,
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
  }
});

const Login = (props) => {
  const { classes } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    const user = {
      username,
      password
    };
    fetch('/api/user/login', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(user),
    }).then(response => console.log(response));
  }

  return (
    <div className={classes.container}>
      <form className={classes.form}>
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

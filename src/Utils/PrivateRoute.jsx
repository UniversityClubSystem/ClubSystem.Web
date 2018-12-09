import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { useGlobal } from "reactn";

const checkIsSignedIn = (isSignedIn, props) => {
  if (isSignedIn) return <Component {...props} />;

  return (
    <Redirect
      to={{
        pathname: "/signIn",
        state: { from: props.location }
      }}
    />
  );
};

const PrivateRoute = ({ component, ...rest }) => {
  const [isSignedIn] = useGlobal("isSignedIn");

  return (
    <Route {...rest} render={props => checkIsSignedIn(isSignedIn, props)} />
  );
};

export default PrivateRoute;

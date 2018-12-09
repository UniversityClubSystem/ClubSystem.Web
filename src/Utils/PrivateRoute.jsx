import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useGlobal } from 'reactn';

const checkIsSignedIn = (isSignedIn, ChildComponent, props) => {
  if (isSignedIn) return <ChildComponent {...props} />;

  return (
    <Redirect
      to={{
        pathname: '/signIn',
        state: { from: props.location }
      }}
    />
  );
};

const PrivateRoute = ({ component, ...rest }) => {
  const [isSignedIn] = useGlobal('isSignedIn');

  return (
    <Route
      {...rest}
      render={props => checkIsSignedIn(isSignedIn, component, props)}
    />
  );
};

export default PrivateRoute;

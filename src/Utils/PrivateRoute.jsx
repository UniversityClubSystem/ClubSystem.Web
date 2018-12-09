import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useGlobal } from 'reactn';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isSignedIn] = useGlobal('isSignedIn');

  return (
    <Route
      {...rest}
      render={props =>
        isSignedIn
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/signIn',
            state: { from: props.location }
          }} />
      }
    />
  );
};

export default PrivateRoute;

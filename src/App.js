import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { setGlobal } from 'reactn';

import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './Layout/Layout';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './Utils/PrivateRoute';
import ResetPassword from './components/ResetPassword/ResetPassword';
import User from './components/User/User';
import Club from './components/Club/Club';
import FullPost from './components/Posts/FullPost/FullPost';

const private1 = () => (
  <p>private1</p>
);

const private2 = () => (
  <p>private2</p>
);

const App = () => {
  const token = localStorage.getItem('token');
  setGlobal({
    isSignedIn: !!token,
    token
  });
  return (
    <>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/resetPassword" component={ResetPassword} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/users" component={User} />
            <PrivateRoute path="/clubs" component={Club} />
            <PrivateRoute path="/post/:id" component={FullPost} />
            <PrivateRoute path="/private1" component={private1} />
            <PrivateRoute path="/private2" component={private2} />
            <Route path="*" render={() => <p>Not Found :(</p>} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;

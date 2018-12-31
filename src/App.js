import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { setGlobal } from 'reactn';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  SignIn,
  Dashboard,
  SignUp,
  ResetPassword,
  User,
  Club,
  NewPost,
  NewClub
} from './components/index';
import Layout from './Layout/Layout';
import FullPost from './components/Posts/FullPost/FullPost';
import PrivateRoute from './Utils/PrivateRoute';

const private1 = () => <p>private1</p>;

const private2 = () => <p>private2</p>;

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
            <Redirect exact from="/" to="/dashboard" />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/users" component={User} />
            <PrivateRoute exact path="/clubs" component={Club} />
            <PrivateRoute path="/post/:id" component={FullPost} />
            <PrivateRoute path="/posts/new" component={NewPost} />
            <PrivateRoute path="/clubs/new" component={NewClub} />
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

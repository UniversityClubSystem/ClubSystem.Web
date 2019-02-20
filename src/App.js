import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { setGlobal } from 'reactn';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Clubs, Dashboard, FullClub, JoinClub, NewClub, NewPost, ResetPassword, SignIn, SignUp, User } from './components/index';
import Layout from './Layout/Layout';
import FullPost from './components/Posts/FullPost/FullPost';
import PrivateRoute from './utils/PrivateRoute';

const private1 = () => <p>private1</p>;

const private2 = () => <p>private2</p>;

const App = () => {
  const token = localStorage.getItem('token');
  setGlobal({
    isSignedIn: !!token,
    token,
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
            <PrivateRoute exact path="/clubs" component={Clubs} />
            <PrivateRoute path="/post/new" component={NewPost} />
            <PrivateRoute path="/post/:id" component={FullPost} />
            <PrivateRoute path="/club/new" component={NewClub} />
            <PrivateRoute path="/club/:id/join" component={JoinClub} />
            <PrivateRoute exact path="/club/:id" component={FullClub} />
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

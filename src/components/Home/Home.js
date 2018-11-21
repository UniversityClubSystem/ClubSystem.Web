import React from 'react';

import { Route } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import User from 'components/User/User';
import Club from 'components/Club/Club';
import SignUp from 'components/SignUp/SignUp';
import Login from 'components/Login/Login';

const Home = () => (
  <div className="container">
    <div className="row">
      <Navbar />
    </div>
    <div className="row">
      <Route path="/users" component={User} />
    </div>
    <div className="row">
      <Route path="/clubs" component={Club} />
    </div>
    <div className="row">
      <Route path="/signUp" component={SignUp} />
    </div>
    <div className="row">
      <Route path="/login" component={Login} />
    </div>
  </div>
);

export default Home;

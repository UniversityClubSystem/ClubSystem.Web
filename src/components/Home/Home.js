import React from 'react';

import { Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import User from '../User/User';
import Club from '../Club/Club';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

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

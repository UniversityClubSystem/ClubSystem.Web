import React from 'react';

import {Route} from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import User from "../User/User";
import Club from "../Club/Club";
import SignUp from "../SignUp/SignUp";

import './Home.scss';

const Home = () => (
  <div className="container">
    <div className="row">
      <Navbar/>
    </div>
    <div className="row justify-content-center">
      <h1>Home</h1>
    </div>

    <div className="row">
      <Route path="/users" component={User}/>
    </div>
    <div className="row">
      <Route path="/clubs" component={Club}/>
    </div>
    <div className="row">
      <Route path="/signUp" component={SignUp}/>
    </div>
  </div>
);

export default Home;

import React from 'react';

import User from '../User/User';
import Club from '../Club/Club';
import Navbar from '../Navbar/Navbar';

import './Home.scss';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <Navbar />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <h1>Home</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <User />
      </div>
      <div className="col-sm-6">
        <Club />
      </div>
    </div>
  </div>
);

export default Home;

import React from 'react';

import styles from './dashboard.module.css';

import Posts from '../Posts/Posts';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => (
  <div className={styles.container}>
    <Sidebar />
    <Posts />
  </div>
);

export default Dashboard;

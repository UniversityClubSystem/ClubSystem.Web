import React from 'react';

import styles from './dashboard.module.css';

import Posts from '../Posts/Posts';

const Dashboard = () => (
  <div className={styles.container}>
    <Posts />
  </div>
);

export default Dashboard;

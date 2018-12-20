import React from 'react';
import styles from './dashboard.module.css';

import Posts from '../Posts/Posts';
import NewPost from '../Posts/NewPost/NewPost';

const Dashboard = () => (
  <div className={styles.container}>
    <NewPost />
    <Posts />
  </div>
);

export default Dashboard;

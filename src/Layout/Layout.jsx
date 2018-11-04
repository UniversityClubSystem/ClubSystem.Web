import React from 'react';
import Navbar from '../components/Navigation/Navbar/Navbar';

import styles from './layout.module.css';

const Layout = props => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;

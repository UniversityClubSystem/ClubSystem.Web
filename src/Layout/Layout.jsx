import React from 'react';
import Navbar from '../components/Navigation/Navbar/Navbar';

import styles from './layout.module.css';

const Layout = props => (
  <>
    <Navbar />
    <main className={styles.main}>
      {props.children}
    </main>
  </>
);

export default Layout;

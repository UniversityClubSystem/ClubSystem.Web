import React from 'react';

import styles from './navbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';

const Navbar = () => (
  <header className="d-flex align-items-center">
    <p className={styles.logo}>Logo</p>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Navbar;

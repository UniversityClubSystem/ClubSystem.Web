import React from 'react';

import styles from './navbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';

const Navbar = () => (
  <header className="d-flex">
    <p className={styles.logo}>Logo</p>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Navbar;

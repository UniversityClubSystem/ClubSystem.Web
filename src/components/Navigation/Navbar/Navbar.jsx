import React from 'react';

import classNames from 'classnames';

import styles from './navbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const navbarStyle = styles.navbar;
const navbar = classNames('d-flex align-items-center', navbarStyle);

const Navbar = () => (
  <header className={navbar}>
    <p className={styles.logo}>Logo</p>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Navbar;

import React from 'react';
import Navbar from '../components/Navigation/Navbar/Navbar';

const Layout = props => (
  <>
    <Navbar />
    <main>
      {props.children}
    </main>
  </>
);

export default Layout;
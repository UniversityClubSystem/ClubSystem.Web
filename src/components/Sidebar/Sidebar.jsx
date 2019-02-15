import React, { useState, useEffect } from 'react';

import Loader from 'react-loaders';
import axios from 'axios';

import styles from './sidebar.module.css';

const Sidebar = () => {
  const token = window.localStorage.getItem('token');
  const [clubs, setClubs] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(true);

  useEffect(() => {
    setLoaderStatus(false);
    axios
      .get('/api/club/byUser/current', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        setClubs(response.data);
        setLoaderStatus(true);
      })
      .catch(() => {
        setLoaderStatus(true);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <Loader type="ball-pulse" active={!loaderStatus} />
      </div>

      <p className={styles.title}>
        <strong>Your Clubs</strong>
      </p>

      {clubs.map(club => (
        <p key={club.id}>{club.name}</p>
      ))}
    </div>
  );
};

export default Sidebar;

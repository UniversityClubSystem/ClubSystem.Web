import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

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
      <div>
        <Loader type="ball-pulse" active={!loaderStatus} />
      </div>

      <p>
        <strong>Your Clubs</strong>
      </p>

      {clubs.map(club => (
        <Link className={styles.club} to={`/club/${club.id}`} key={club.id}>
          {club.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Loader from 'react-loaders';

import Club from './Club/Club';

import styles from './clubs.module.css';

const Clubs = () => {
  const token = window.localStorage.getItem('token');
  const [clubs, setClubs] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);
    axios
      .get('/api/club', { headers: { Authorization: `Bearer ${token}` } })
      .then(clubsResponse => {
        setClubs(clubsResponse.data);
        setLoaded(true);
      })
      .catch(() => {
        setLoaded(true);
      });
  }, []);
  return (
    <div className="d-flex text-center align-items-center flex-column">
      <h3 className={styles.title}>Clubs</h3>

      <div>
        <Loader type="ball-pulse" active={!loaded} />
      </div>

      {clubs.map(club => (
        <Club key={club.id} club={club} />
      ))}
    </div>
  );
};

export default Clubs;

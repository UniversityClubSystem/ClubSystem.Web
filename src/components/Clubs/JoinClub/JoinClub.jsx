import React from 'react';

import Button from '@material-ui/core/Button';

import axios from 'axios';

import styles from './join-club.module.css';

const JoinClub = (props) => {
  console.log(props);
  const { location } = props;
  if (location.state === undefined) return null;
  const { club } = location.state;
  const token = window.localStorage.getItem('token');

  function joinClub() {
    axios
      .post('/api/club/join', { ClubId: club.id }, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        alert('Error');
      });
  }

  return (
    <div className="d-flex flex-column w-25 mx-auto">
      JoinClub works!
      <br />
      clubId:
      {club.id}
      <Button variant="contained" color="primary" className={styles.joinButton} onClick={() => joinClub()}>
        Join Club
      </Button>
    </div>
  );
};

export default JoinClub;

import React from 'react';

import styles from './join-club.module.css';

const JoinClub = (props) => {
  const { location } = props;
  if (location.state === undefined) return null;
  const { club } = location.state;
  return (
    <div>
      JoinClub works!
      <br />
      clubId:
      {club.id}
    </div>
  );
};

export default JoinClub;

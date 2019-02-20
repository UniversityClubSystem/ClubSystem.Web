import React from 'react';

import useReactRouter from 'use-react-router';

import Button from '@material-ui/core/Button';

import classNames from 'classnames';

import styles from './club.module.css';

const Club = props => {
  const { club } = props;
  const { history } = useReactRouter();

  const clubStyle = styles.club;
  const gridBox = classNames('col-xs-12 card bg-light m-3', clubStyle);

  function clubClickHandler(id, event) {
    if (event) {
      if (event.key === 'Enter') {
        history.push({
          pathname: `/club/${id}/join`,
          state: { club },
        });
      }
    } else {
      history.push({
        pathname: `/club/${id}/join`,
        state: { club },
      });
    }
  }

  club.createdDate = new Date(Date.parse(club.createdDate));
  const date = `${club.createdDate.getFullYear()}/${club.createdDate.getMonth() + 1}/${club.createdDate.getUTCDate()}`;

  return (
    <div className={gridBox}>
      <div className="card-body">
        <h5 className="card-title">{club.name}</h5>
        <h6 className="card-subtitle mb-2 mt-2 text-muted">
          Founded:
          {date}
        </h6>
        <p className="card-text">{club.universityName}</p>
      </div>
      <Button variant="contained" color="primary" className={styles.joinButton} onClick={() => clubClickHandler(club.id)}>
        Join Club
      </Button>
    </div>
  );
};

export default Club;

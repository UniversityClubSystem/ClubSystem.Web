import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: 250,
    height: 350,
  },
});

const User = props => {
  const { classes } = props;
  const tileData = [
    {
      id: 1,
      img:
        'data:image/jpeg;base64,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',
      title: 'Image1',
      author: 'author1',
    },
    {
      id: 2,
      img:
        'data:image/jpeg;base64,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',
      title: 'Image2',
      author: 'author2',
    },
  ];
  const [users, setUsers] = useState([]);
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    axios.get('/api/user', { headers: { Authorization: token } }).then(response => {
      response.map(user => (user.img = tileData[0].img)); /* eslint no-param-reassign: ["error", { "props": false }] */
      setUsers(response);
    });
  }, []);

  return (
    <div className="text-center border border-primary">
      <GridList cellHeight={100} className={classes.gridList}>
        {users.map(user => (
          <GridListTile key={user.id}>
            <img src={user.img} alt={user.userName} width={60} />
            <GridListTileBar title={user.userName} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);

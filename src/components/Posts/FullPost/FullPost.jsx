import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { Button } from '@material-ui/core';

import styles from './fullPost.module.css';

const FullPost = (props) => {
  const { location } = props;
  const { post } = location.state;
  const token = localStorage.getItem('token');

  // TODO: make util function for date convert
  post.createdDate = new Date(Date.parse(post.createdDate));
  const date = `${post.createdDate.getFullYear()}/${(post.createdDate.getMonth() + 1)}/${(post.createdDate.getUTCDate())}`;

  function onDelete(id) {
    if (id) {
      axios
        .delete(`/api/post/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(() => {
          alert('Deleted.');
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  return (
    <div className={styles.container}>
      <div className="card text-center mt-5">
        <div className="card-header">
          {post.clubName}
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <Button className={styles.deleteButtton} variant="contained" color="secondary" onClick={() => onDelete(post.id)}>
            Delete
          </Button>
        </div>
        <div className="card-footer text-muted">
          {date}
        </div>
      </div>
    </div>
  );
};

FullPost.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        clubId: PropTypes.string.isRequired,
        clubName: PropTypes.string.isRequired,
        createdDate: PropTypes.instanceOf(Date).isRequired,
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
};

export default FullPost;

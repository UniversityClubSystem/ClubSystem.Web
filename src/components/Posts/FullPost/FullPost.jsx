import React, { useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import styles from './fullPost.module.css';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const FullPost = (props) => {
  const { location } = props;
  const { post } = location.state;
  const token = localStorage.getItem('token');

  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDelete(id) {
    if (id) {
      axios
        .delete(`/api/post/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(() => {
          setOpen(false);
          props.history.push('/dashboard');
        })
        .catch(() => {
          setOpen(false);
        });
    }
  }

  console.log('props:', props);

  // TODO: make util function for date convert
  post.createdDate = new Date(Date.parse(post.createdDate));
  const date = `${post.createdDate.getFullYear()}/${(post.createdDate.getMonth() + 1)}/${(post.createdDate.getUTCDate())}`;

  return (
    <div className={styles.container}>
      <div className="card text-center mt-5 t-2">
        <div className="card-header">
          {post.clubName}
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>

          <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
            Delete
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className="text-center" id="alert-dialog-slide-title">Delete Post</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <span className="text-danger">Are you sure want to delete the post?</span>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={() => handleDelete(post.id)} color="primary">
                Agree
              </Button>
            </DialogActions>
          </Dialog>
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
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default FullPost;

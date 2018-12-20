import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import axios from 'axios';

import classNames from 'classnames';

import styles from './new-post.module.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [postVisibility, setPostVisibility] = useState(true);
  const token = window.localStorage.getItem('token');

  function handleSave() {
    const newPost = { title, text };

    axios.post('/api/post', newPost, {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
      console.log(response);
    });
  }

  const containerClass = classNames(styles.container, { container: 'container' });

  return (
    <div className={containerClass}>
      <form className={styles.form}>
        <p className={styles.title}>New Post</p>
        <TextField
          className={styles.postTitle}
          id="title"
          label="Post Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          className={styles.text}
          id="text"
          label="Post Content"
          type="text"
          multiline
          variant="outlined"
          rows="12"
          placeholder="Please enter post content"
          value={text}
          onChange={e => setText(e.target.value)}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Switch
              checked={postVisibility}
              onChange={e => setPostVisibility(e.target.checked)}
              color="primary"
            />
          }
          label="Public"
        />
        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          Save Post
        </Button>
      </form>
    </div>
  );
};

export default NewPost;

import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

// import { useGlobal } from 'reactn';

import styles from './new-post.module.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const token = window.localStorage.getItem('token');

  function handleSave() {
    const newPost = { title, text };

    axios.post('/api/post', newPost, {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <form className={styles.form}>
      <p className={styles.title}>New Post</p>
      <TextField
        id="title"
        label="Title"
        className={styles.title}
        value={title}
        onChange={e => setTitle(e.target.value)}
        margin="normal"
      />
      <TextField
        id="text"
        label="Text"
        type="text"
        className={styles.text}
        value={text}
        onChange={e => setText(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        className={styles.button}
        onClick={handleSave}
      >
        Save Post
      </Button>
    </form>
  );
};

export default NewPost;

import React, {useEffect, useState} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import axios from 'axios';

import classNames from 'classnames';

import styles from './new-post.module.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postVisibility, setPostVisibility] = useState(true);
  const [clubId, setClubId] = useState('');
  const [clubs, setClubs] = useState([]);
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('/api/club/byUser/current', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        setClubs(response.data);
      });
  }, []);

  function handleSave() {
    const newPost = { title, content, clubId };

    axios
      .post('/api/post', newPost, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
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
          className={styles.content}
          id="content"
          label="Post Content"
          type="text"
          multiline
          variant="outlined"
          rows="12"
          placeholder="Please enter post content"
          value={content}
          onChange={e => setContent(e.target.value)}
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
        <FormControl className={styles.clubFormControl}>
          <InputLabel htmlFor="club">Which club do you want to send from?</InputLabel>
          <Select
            className={styles.club}
            value={clubId}
            onChange={event => setClubId(event.target.value)}
            inputProps={{
              name: 'club',
              id: 'club',
            }}
          >
            {clubs.map(_club => (
              <MenuItem
                key={_club.id}
                value={_club.id}>
                {_club.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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

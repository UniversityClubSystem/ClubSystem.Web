import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Loader from 'react-loaders';

import SimplePost from './SimplePost/SimplePost';

import styles from './posts.module.css';

const Posts = () => {
  const token = window.localStorage.getItem('token');
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);
    axios
      .get('/api/post', { headers: { Authorization: `Bearer ${token}` } })
      .then((postsResponse) => {
        setPosts(postsResponse.data);
        setLoaded(true);
      })
      .catch(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <>
      <div className={styles.loader}>
        <Loader type="ball-pulse" active={!loaded} />
      </div>
      <div className={styles['posts-container']}>
        {posts.map(post => (
          <SimplePost key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;

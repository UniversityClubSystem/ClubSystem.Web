import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styles from './posts.module.css';

import SimplePost from './SimplePost/SimplePost';

const Posts = () => {
  const token = window.localStorage.getItem('token');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/post', {
      headers: { Authorization: `Bearer ${token}` }
    }).then((postsResponse) => {
      setPosts(postsResponse.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      {posts.map(post => (
        <SimplePost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

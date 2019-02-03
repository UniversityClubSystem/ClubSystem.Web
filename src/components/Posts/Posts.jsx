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
      .then(postsResponse => {
        setPosts(postsResponse.data);
        setLoaded(true);
      })
      .catch(() => {
        setLoaded(true);
      });
  }, []);

  const NoPostFound = <div className="mt-2">No Post Found!</div>;
  const RenderPosts = posts.map(post => <SimplePost key={post.id} post={post} />);

  return (
    <>
      <div className={styles['posts-container']}>{posts.length === 0 ? NoPostFound : RenderPosts}</div>
      <div className={styles.loader}>
        <Loader type="ball-pulse" active={!loaded} />
      </div>
    </>
  );
};

export default Posts;

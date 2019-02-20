import React, { useEffect, useState } from 'react';

import Loader from 'react-loaders';

import SimplePost from './SimplePost/SimplePost';

import postService from '../../services/post';

import styles from './posts.module.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const getPost = async () => {
    setLoaded(false);
    const response = await postService.list();
    if (response.data) {
      setPosts(response.data);
      setLoaded(true);
    }
  };

  useEffect(() => {
    getPost();
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

import React from 'react';
import styles from './posts.module.css';

import SimplePost from './SimplePost/SimplePost';

const Posts = () => {
  const posts = [
    {
      text: 'lorem ipsum',
      createdDate: '2018/12/4',
      createdBy: '1',
      identifier: '21312-2412'
    },
    {
      text: 'apsum lorem',
      createdDate: '2018/12/5',
      createdBy: '4',
      identifier: '2gs4G-13fFD'
    },
    {
      text: 'asdasd dsag',
      createdDate: '2018/9/5',
      createdBy: '4',
      identifier: 'ass4G-13fFD'
    },
    {
      text: 'apsum lorem',
      createdDate: '2017/12/5',
      createdBy: '9',
      identifier: '2gs4G-a2r2'
    }
  ];
  return (
    <div className={styles.container}>
      {posts.map(post => (
        <SimplePost key={post.identifier} post={post} />
      ))}
    </div>
  );
};

export default Posts;

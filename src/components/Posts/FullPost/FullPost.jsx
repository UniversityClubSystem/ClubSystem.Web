import React from 'react';
import PropTypes from 'prop-types';

import styles from './fullPost.module.css';

const FullPost = (props) => {
  const { location } = props;
  console.log(location.pathname);
  return (
    <div className={styles.container}>
      <div className="card text-center">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
    </div>
  );
};

FullPost.propTypes = {
  location: PropTypes.object.isRequired
};

export default FullPost;

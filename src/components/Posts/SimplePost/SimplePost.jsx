import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './simplePost.module.css';

const SimplePost = props => {
  const { post } = props;

  function postClickHandler(id, event) {
    if (event) {
      if (event.key === 'Enter') {
        props.history.push({
          pathname: `/post/${id}`,
          state: { post },
        });
      }
    } else {
      props.history.push({
        pathname: `/post/${id}`,
        state: { post },
      });
    }
  }

  post.createdDate = new Date(Date.parse(post.createdDate));
  const date = `${post.createdDate.getFullYear()}/${post.createdDate.getMonth() + 1}/${post.createdDate.getUTCDate()}`;
  return (
    <div className={styles.post}>
      <div className={styles['custom-card-body']}>
        <Link className="card-title" to={`/club/${post.clubId}`}>
          {post.clubName} <span className="card-subtitle mb-2 text-muted">{`· ${date}`}</span>
        </Link>
        <div
          className={styles['card-container']}
          role="button"
          tabIndex={0}
          onKeyPress={event => postClickHandler(post.id, event)}
          onClick={() => postClickHandler(post.id)}
        >
          <h5 className="card-title ">{post.title}</h5>
          <p className="card-text">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

SimplePost.propTypes = {
  post: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(SimplePost);

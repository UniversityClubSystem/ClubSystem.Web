import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './simplePost.module.css';

const SimplePost = (props) => {
  function postClickHandler(id, event) {
    if (event) {
      if (event.key === 'Enter') {
        props.history.push(`/post/${id}`);
      }
    } else {
      props.history.push(`/post/${id}`);
    }
  }

  const postStyle = styles.post;
  const gridBox = classNames('col-xs-12 card bg-light m-3', postStyle);

  const { post } = props;
  post.createdDate = new Date(Date.parse(post.createdDate));
  const date = `${post.createdDate.getFullYear()}/${(post.createdDate.getMonth() + 1)}/${(post.createdDate.getUTCDate())}`;
  return (
    <div role="button" tabIndex={0} onKeyPress={event => postClickHandler(post.id, event)} onClick={() => postClickHandler(post.id)} className={gridBox}>
      <div className="card-body">
        <h5 className="card-title">
          Created By:
          {post.createdBy}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Created Date:
          {date}
        </h6>
        <p className="card-text">
          Text:
          {post.text}
        </p>
      </div>
    </div>
  );
};

SimplePost.propTypes = {
  post: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(SimplePost);

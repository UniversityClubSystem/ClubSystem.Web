import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './simplePost.module.css';

const SimplePost = (props) => {
  const { post } = props;
  const postStyle = styles.post;
  const gridBox = classNames('col-xs-12 card bg-light m-3', postStyle);

  function postClickHandler(id, event) {
    if (event) {
      if (event.key === 'Enter') {
        props.history.push({
          pathname: `/post/${id}`,
          state: { post }
        });
      }
    } else {
      props.history.push({
        pathname: `/post/${id}`,
        state: { post }
      });
    }
  }

  post.createdDate = new Date(Date.parse(post.createdDate));
  const date = `${post.createdDate.getFullYear()}/${(post.createdDate.getMonth() + 1)}/${(post.createdDate.getUTCDate())}`;
  return (
    <div role="button" tabIndex={0} onKeyPress={event => postClickHandler(post.id, event)} onClick={() => postClickHandler(post.id)} className={gridBox}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
        </h5>
        <h5 className="card-title">
          {post.clubName}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {date}
        </h6>
        <p className="card-text">
          {post.content}
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

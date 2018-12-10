import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './simplePost.module.css';

const SimplePost = (props) => {
  function postClickHandler(identifier) {
    console.log('postClick post:', identifier);
    console.log(props);
    props.history.push(`/post/${identifier}`);
  }

  const postStyle = styles.post;
  const gridBox = classNames('col-xs-12 card bg-light m-3', postStyle);

  const { post } = props;
  return (
    <div onClick={() => postClickHandler(post.identifier)} className={gridBox}>
      <div className="card-body">
        <h5 className="card-title">
          Created By:
          {post.createdBy}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Created Date:
          {post.createdDate}
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
  post: PropTypes.object.isRequired
};

export default withRouter(SimplePost);

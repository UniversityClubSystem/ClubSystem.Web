import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  const { link } = props;
  return (
    <p>
      {link}
    </p>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired
};

export default NavigationItem;

import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    margin: theme.spacing.unit * 10
  }
});

const Dashboard = (props) => {
  const { classes } = props;

  return (
    <div className={classes}>
      Dashboard works
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);

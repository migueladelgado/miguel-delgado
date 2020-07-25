import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';

const CustomDrawer = (props) => (
  <Drawer open={props.open}>
        {/* <Navigation close={setDrawerState} /> */}
    <Grid container spacing={0}>
      <Grid item lg={6} md={6} sm={6} xs={6} className="nav-heading md-font">
        <Typography color="textPrimary" variant="h4">
          <div className="md-font">
            { props.title }
          </div>
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={6} className="grid-col">
        <div className="close-button">
          <Button onClick={() => props.close(false) }>
            <Typography color="textPrimary" variant="h4">
              <span className="md-font cool-spin">X</span>
            </Typography>
          </Button>
        </div>
      </Grid>
    </Grid>
    { props.children }
  </Drawer>
);

CustomDrawer.propTypes = {
  // bla: PropTypes.string,
};

CustomDrawer.defaultProps = {
  // bla: 'test',
};

export default CustomDrawer;

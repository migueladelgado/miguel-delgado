import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
//import { Test } from './Navigation.styles';

class Navigation extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }


  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="md-navigation-wrapper">
        <div className="close-button">
          <Button onClick={() => this.props.close(false) }>
            <CloseIcon color="primary" className="cool-spin"/>
          </Button>
        </div>
        
      </div>
    );
  }
}

export default Navigation;

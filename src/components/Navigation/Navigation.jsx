import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Navigation.styles';

class Navigation extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Navigation will mount');
  }

  componentDidMount = () => {
    console.log('Navigation mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Navigation will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Navigation will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Navigation did update');
  }

  componentWillUnmount = () => {
    console.log('Navigation will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NavigationWrapper">
        Test content
      </div>
    );
  }
}

Navigation.propTypes = {
  // bla: PropTypes.string,
};

Navigation.defaultProps = {
  // bla: 'test',
};

export default Navigation;

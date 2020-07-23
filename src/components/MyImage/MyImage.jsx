import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cartoonized_miguel from '../../imgs/cartoonized_miguel.png';

class MyImage extends PureComponent { 
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
      <div className="img-wrapper">
        <img src={cartoonized_miguel} alt="Miguel Delgado - Software Engineer" className="personal-img shadow"/>
      </div>
    );
  }
}

MyImage.propTypes = {
  imgSrc: PropTypes.string
};

MyImage.defaultProps = {
  // bla: 'test',
};

export default MyImage;

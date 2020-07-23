import React, { PureComponent } from 'react';
import MyImage from '../MyImage';

class Main extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="center">
        <MyImage />
        <div className="name md-font">Miguel Delgado</div>
        <div className="profession md-font">Software Engineer</div>
      </div>
    );
  }
}

export default Main;

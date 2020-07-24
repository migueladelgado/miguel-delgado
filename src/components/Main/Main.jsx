import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
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
        <Typography color="textPrimary">
          <div className="name md-font">Miguel Delgado</div>
          <div className="profession md-font">Software Engineer</div>
        </Typography>  
      </div>
    );
  }
}

export default Main;

import React, { Children } from 'react';
import Custom from '../../themes/Custom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

const ContentContainer = (props) => (
  <ThemeProvider theme={Custom({ isDark: false})}>
    <CssBaseline />
    <div className="md-container">
      { props.children }
    </div>
  </ThemeProvider>
);


export default ContentContainer;

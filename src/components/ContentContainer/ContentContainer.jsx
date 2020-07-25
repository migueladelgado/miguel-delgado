import React, { useEffect, useState } from 'react';
import Custom from '../../themes/Custom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { getThemePreference } from '../../Caching/LocalStorage';
import { light } from '@material-ui/core/styles/createPalette';
import { THEME } from '../../Enums/Enums';

const smSize = 768; //size of a common ipad

const getWindowSize = () => {
  return window.innerWidth;
}

const getOptions = () => {
  let theme = getThemePreference();
  let isDark = theme ? theme === THEME.DARK : false; 
  return (
    {
      isDark,
      isMobile: getWindowSize() < smSize
    }
  );
}

const ContentContainer = (props) => {
  const [options, setOptions] = useState({ isDark: false, isMobile: false });
  useEffect(() => {
    //do on app start
    setOptions(getOptions())
    window.addEventListener('resize', () => {
      //also do on resize
      setOptions(getOptions())
    })
  }, []);
    return(
    <ThemeProvider theme={Custom(options)}>
      <CssBaseline />
      <div className="md-container">
        { props.children }
      </div>
    </ThemeProvider>
  );
}


export default ContentContainer;

import React from 'react';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import { getThemePreference, setThemePreference } from '../../Caching/LocalStorage';
import { THEME } from '../../Enums/Enums';

//Dynamically create buttons
const OptionButtons = buttons => {
  let ops = buttons.map( (button, index) => {
    return (
      <Tooltip key={0 + index} title={button.title}>
        <Button 
          key={index}
          onClick={button.action}>
          { button.button }
        </Button>
      </Tooltip>
    );
  });
  return ops;
}

const goToGitHub = () =>  window.open('https://github.com/migueladelgado', '_blank');
const setThemeAndRefresh = () => {
  let theme = getThemePreference();
  let selection = theme && theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
  setThemePreference(selection);
  window.location.reload();
}

//render buttons
const Options = (props) => {
  //Create object to store the buttons and actions
  const buttons = [
    { button: <FavoriteIcon color="primary" />, title: 'Coding For a Cause', action : () => console.log('hello') },
    { button: <LinkedInIcon color="primary"/>, title: 'My LinkedIn', action : () => console.log('hello') },
    { button: <EmailIcon  color="primary"/>, title: 'Email Me', action : () => console.log('hello') },
    { button: <Brightness4Icon color="primary"/>, title: 'Change Page Theme', action : () => setThemeAndRefresh() },
    { button: <GitHubIcon color="primary"/>, title: 'Go To My Github', action : () => goToGitHub() },
    { button: <CodeIcon color="primary"/>, title: 'Check Out My Code', action : () => props.setDrawerState(true) },
  ]; 

  return (
    <div className="options-wrapper">
      { OptionButtons(buttons) }
    </div>
  );
}
export default Options;

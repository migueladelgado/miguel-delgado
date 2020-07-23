import React from 'react';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

//Dynamically create buttons
const OptionButtons = buttons => {
  let ops = buttons.map( (button, index) => {
    return (
      <Button 
        key={index}
        onClick={button.action}>
        { button.button }
      </Button>
    );
  });
  return ops;
}

//render buttons
const Options = (props) => {

  //Create object to store the buttons and actions
  const buttons = [
    { button: <PersonPinCircleIcon />, action : () => console.log('hello') },
    { button: <LinkedInIcon />, action : () => console.log('hello') },
    { button: <EmailIcon />, action : () => console.log('hello') },
    { button:  <Brightness4Icon />, action : () => console.log('hello') },
    { button: <CodeIcon />, action : () => props.setDrawerState(true) },
  ]; 

  return (
    <div className="options-wrapper">
      { OptionButtons(buttons) }
    </div>
  );
}
export default Options;

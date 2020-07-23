import React from 'react';
import './App.css';
import Main from './components/Main';
import Options from './components/Options';
import Drawer from '@material-ui/core/Drawer';

function App() {
  const [state, setState] = React.useState({
    drawerOpen: false
  });

  const setDrawerState = _state => {
    setState({ drawerOpen : _state });
  }

  return (
    <div className="md-container">
      <>
        <Drawer open={state.drawerOpen }>
          <div>
            Content
          </div>
        </Drawer>
        <Options setDrawerState={setDrawerState} />
        <Main />
      </> 
    </div>
  );
}

export default App;

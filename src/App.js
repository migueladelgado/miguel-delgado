import React from 'react';
import './App.css';
import Main from './components/Main';
import Options from './components/Options';
import Drawer from '@material-ui/core/Drawer';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import Light from './themes/Light';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={Light}>
          <CssBaseline />
          <Route path="/">
            <Index />
          </Route>
        </ThemeProvider>
      </Switch>
    </Router>
  )
}

function Index(){
  const [state, setState] = React.useState({
    drawerOpen: false
  });

  const setDrawerState = _state => {
    setState({ drawerOpen : _state });
  }

  return (
    <div className="md-container">
      <>
        <Drawer open={state.drawerOpen}>
          <Navigation close={setDrawerState} />
        </Drawer>
        <Options setDrawerState={setDrawerState} />
        <Main />
      </> 
    </div>
  );
}

export default App;

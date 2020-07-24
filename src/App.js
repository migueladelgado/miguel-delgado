import React from 'react';
import './App.css';
import Main from './components/Main';
import Options from './components/Options';
import Drawer from '@material-ui/core/Drawer';
import Navigation from './components/Navigation';
import ContentContainer from './components/ContentContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Index />
          </Route>
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
    <ContentContainer>
      <Drawer open={state.drawerOpen}>
        <Navigation close={setDrawerState} />
      </Drawer>
      <Options setDrawerState={setDrawerState} />
      <Main />
    </ContentContainer> 
  );
}

export default App;

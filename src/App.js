import React from 'react';
import './App.css';
import Main from './components/Main';
import Options from './components/Options';
import ContentContainer from './components/ContentContainer';
import CustomDrawer from './components/CustomDrawer';
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
      <CustomDrawer 
        open={state.drawerOpen} 
        close={setDrawerState}
        title={"Projects && Coding Samples"}>
        
      </CustomDrawer>
      <Options setDrawerState={setDrawerState} />
      <Main />
    </ContentContainer> 
  );
}

export default App;

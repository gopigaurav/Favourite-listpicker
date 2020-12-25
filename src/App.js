import React from 'react'
import './App.css';
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {DataProvider} from './DataProvider'
import List from './List';


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <List/>
          </Route>
        </Switch>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import './styles.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </Router>
);

export default App;

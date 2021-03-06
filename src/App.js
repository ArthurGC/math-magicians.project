import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import './styles.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import Footer from './components/Footer';

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
    <Footer />
  </Router>
);

export default App;

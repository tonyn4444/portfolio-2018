import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App';
import About from './components/About';
import PagesNav from './components/PagesNav';
import Work from './components/Work';
import Contact from './components/Contact';
import './app.css';

const AppRoutes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/pages" component={PagesNav}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Work}/>
      <Route path="/contact" component={Contact}/> 
    </div>
  </Router>
)
export default AppRoutes;

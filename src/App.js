import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './app.css';

class App extends Component {
  render() {
    return (
      <div id="home-container">
        <div className="home-content">
        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}>
            <h1>Hi, I'm <span className="cyan">Tony</span></h1>
            <h2></h2>
            <Link className="inline-block-link" to="/pages"><h3>Learn More</h3></Link>
        </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;

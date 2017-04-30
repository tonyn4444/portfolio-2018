import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './app.css';
import './index.css';
import AppModal from './components/modal';
import { Divider } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <div className="stars">
        <div className="twinkling">
            <div id="home-container">
              <div className="home-content">
              <ReactCSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionAppear={true}
                transitionAppearTimeout={500}>
                <div id="home-name-explore">
                  <h1 id="name">Hi, I'm <span className="cyan">Tony</span></h1>
                  <h2>Software Developer - React.js - JavaScript - Ruby on Rails</h2>
                  <Divider className="divider" />
                  <Link className="inline-block-link" to="/pages"><h3 id="explore-link">Explore</h3></Link>
                </div>
                  <div className="app-modal" >
                    <AppModal />
                  </div>
              </ReactCSSTransitionGroup>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

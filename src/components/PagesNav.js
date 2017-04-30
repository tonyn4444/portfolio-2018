import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PagesNav = () => (
  <div className="stars">
    <div className="twinkling">
    	<div id="nav-container">
        <div id="nav-page-content">
    		<ReactCSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionAppear={true}
              transitionAppearTimeout={500}>
                <Link to="/"><span className="modal-links">Home</span></Link>
                <Link to="/projects"><span className="modal-links">Projects</span></Link>
                <Link to="/about"><span className="modal-links">About</span></Link>
                <Link to="/contact"><span className="modal-links">Contact</span></Link>
                <div id="nav-page-social-links">
                <Link to="#"><span className="social-links">LinkedIn</span></Link>
                <Link to="#"><span className="social-links">GitHub</span></Link>
                <Link to="#"><span className="social-links">CodePen</span></Link>
                <Link to="#"><span className="social-links">Twitter</span></Link>
                </div>
    		</ReactCSSTransitionGroup>
  	   </div>
     </div>
   </div>
  </div>
)

export default PagesNav;
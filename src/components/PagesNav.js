import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Icon } from 'semantic-ui-react';

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
              <div id="top-half-nav">
                <Link to="/"><span className="modal-links"><Icon name="empty star" size="big" color="cyan" /></span></Link>
                <Link to="/projects"><span className="modal-links">Projects</span></Link>
                <Link to="/about"><span className="modal-links">About</span></Link>
                <Link to="/contact"><span className="modal-links">Contact</span></Link>
              </div>
              <div id="nav-page-social-links">
                <Link to="#"><span className="social-links"><Icon color="white" name="linkedin square" />LinkedIn</span></Link>
                <Link to="#"><span className="social-links"><Icon color="white" name="github" />GitHub</span></Link>
                <Link to="#"><span className="social-links"><Icon color="white" name="codepen" />CodePen</span></Link>
                <Link to="#"><span className="social-links"><Icon color="white" name="twitter" />Twitter</span></Link>
              </div>
    		</ReactCSSTransitionGroup>
  	   </div>
     </div>
   </div>
  </div>
)

export default PagesNav;
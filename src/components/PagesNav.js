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
                <Link to="/"><span className="navpage-links"><Icon name="empty star" size="big" color="cyan" /></span></Link>
                <Link to="/projects"><span className="navpage-links">Projects</span></Link>
                <Link to="/about"><span className="navpage-links">About</span></Link>
                <Link to="/contact"><span className="navpage-links">Contact</span></Link>
              </div>
              <div id="nav-page-social-links">
                <a href="https://linkedin.com/in/tony-t-nguyen"><span className="social-links"><Icon color="cyan" name="linkedin square" />LinkedIn</span></a>
                <a href="https://github.com/tonyn4444"><span className="social-links"><Icon color="cyan" name="github" />GitHub</span></a>
                <a href="http://codepen.io/tonyn4444"><span className="social-links"><Icon color="cyan" name="codepen" />CodePen</span></a>
                <a href="https://www.instagram.com/tonyspamony/?hl=en"><span className="social-links"><Icon color="cyan" name="instagram" />Twitter</span></a>
              </div>
    		</ReactCSSTransitionGroup>
  	   </div>
     </div>
   </div>
  </div>
)

export default PagesNav;
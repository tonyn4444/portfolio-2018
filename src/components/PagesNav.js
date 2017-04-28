import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const PagesNav = () => (
	<div id="nav-container">
		<ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}>
		<Link to="/"><h1 id="exit-pages">Home</h1></Link>
		<Link to="/work"><h3 className="nav-links">Work</h3></Link>
		<Link to="/about"><h1 className="nav-links">About</h1></Link>
		<Link to="/contact"><h1 className="nav-links">Contact</h1></Link>
		</ReactCSSTransitionGroup>
	</div>
)

export default PagesNav;
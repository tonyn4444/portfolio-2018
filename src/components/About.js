import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../index.css';

const About = () => (
	<div className="stars">
		<div className="twinkling">
			<div id="content-container">
				<div className="work-intro-content">
					<ReactCSSTransitionGroup
		          transitionName="slide"
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={500}
		          transitionAppear={true}
		          transitionAppearTimeout={500}>
						<Link to="/"><h1 id="exit-pages">Pages</h1></Link>
						<h1>Hi, my name is Tony <br/>I'm a web developer from the Bay Area</h1>
						<Link to="/pages">back</Link>
					</ReactCSSTransitionGroup>
				</div>
			</div>
		</div>
	</div>
)

export default About;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Work extends Component {
	render() {
		return (
			<div id="work-container">
				<div className="work-intro-content">
					<Link to="/pages"><h1 id="exit-pages">Pages</h1></Link>
					<h1 className="work-headers">My Work</h1>
					<h2 className="work-headers h2">Here are some of my projects</h2>
					<button className="view-more-btn">Click to view more</button>
				</div>
			</div>
		)
	}
}

export default Work;
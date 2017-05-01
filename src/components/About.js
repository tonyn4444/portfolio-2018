import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../index.css';
import '../about.css';
import AppModal from './modal';
import ace from '../images/ace.jpg';
import { connect } from 'react-redux';


class About extends Component {
	render() {
		console.log(this.props)
		return(
			<div className="stars" id="main-about">
				<div className="twinkling">
					<div className="clouds">
						<div id="content-container">
							<div className="work-intro-content container">
								<ReactCSSTransitionGroup
	                transitionName="slide"
	                transitionEnterTimeout={500}
	                transitionLeaveTimeout={500}
	                transitionAppear={true}
	                transitionAppearTimeout={500}>
								<div className="container" id="title">
									<div className="row">
										<div className="col-md-12">
											<h1 id='heading'> About Me</h1>
											<p id="about-desc">
												My name is <span className="cyan">Tony</span> and I'm a software developer with a <span className="cyan">passion</span> for programming. I love <span className="cyan">building</span> things for fun, but what I really enjoy is working on projects that are <span className="cyan">meaningful</span> and have a <span className="cyan">positive impact</span> on others. Outside of code, I love hanging out with my dog, lifting, reading, and playing music!
											</p>
										</div> 
									</div>
								</div>
							</ReactCSSTransitionGroup>
						</div>
						<div className="container">
						<div className="row">
							<div className="col-md-12" id="empl-edu">
								<h1 id="empl-title">What I've Accomplished </h1>
								<em><h2 id="years">Over The Years</h2></em>
							</div>
						</div>

						<div className="row" id="empl-section1">
							<div className="col-md-6 about-pic">
								<div className="thumbnail about-thumbnails">
									<img className="about-img-tag" src={this.props.about[0].image} />
								</div>
							</div>
							<div className="col-md-6 about-descr">
								<h1 id="job-title">{this.props.about[0].title}</h1>
							</div>
						</div>

						<div className="row" id="empl-section1">
							<div className="col-md-6 about-pic">
								<div className="thumbnail about-thumbnails">
									<img className="about-img-tag" src={this.props.about[1].image} />
								</div>
							</div>
							<div className="col-md-6 about-descr">
								<h1 id="job-title">{this.props.about[1].title}</h1>
							</div>
						</div>

						<div className="row" id="empl-section1">
							<div className="col-md-6 about-pic">
								<div className="thumbnail about-thumbnails">
									<img className="about-img-tag" src={this.props.about[2].image} />
								</div>
							</div>
							<div className="col-md-6 about-descr">
								<h1 id="job-title">{this.props.about[2].title}</h1>
							</div>
						</div>

						<div className="row" id="empl-section1">
							<div className="col-md-6 about-pic">
								<div className="thumbnail about-thumbnails" >
									<img className="about-img-tag" src={this.props.about[3].image} />
								</div>
							</div>
							<div className="col-md-6 about-descr" id="dbc">
								<h1 id="job-title">{this.props.about[3].title}</h1>
							</div>
						</div>
					</div>

						<div className="app-modal" >
		          <AppModal />
		        </div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}
	


function mapStateToProps(state) {
	return { about: state.about }
}

export default connect(mapStateToProps)(About);

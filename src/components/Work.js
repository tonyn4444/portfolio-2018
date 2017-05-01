import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "../index.css"
import '../projects.css'
import AppModal from './modal';
import { Icon } from 'semantic-ui-react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Work extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="stars" id="full">
				<div className="twinkling">
					<div className="clouds">
						<div id="projects-container">
							<div className="container" id="section1">
								<div className="row" id="intro-container">
								<ReactCSSTransitionGroup
	                transitionName="slide"
	                transitionEnterTimeout={500}
	                transitionLeaveTimeout={500}
	                transitionAppear={true}
	                transitionAppearTimeout={500}>
									<div className="col-md-12 project-page-intro">
										<em><h1 id="project-page-header">Projects</h1></em>
										<h2 id="h2-project-header">Check out some of my recent work!</h2>
										<a href="#section2"><em><h2 id="learn-more">Learn More</h2></em>
										<div><Icon name="angle double down" color="cyan" size="huge" /></div></a>
									</div>
									</ReactCSSTransitionGroup>
									 <div className="app-modal" >
	                    <AppModal />
	                  </div>
								</div>
							</div>

							<div id="section2" className="row">
								<div id="left-section" className="col-md-6 col-xs-12 main">
									<h1 className="white-text">{this.props.projects[0].name}</h1>
									<div className="thumbnail">
									<img src={this.props.projects[0].image} />
								</div>
								<h1 className="white-text">{this.props.projects[1].name}</h1>
								<div className="thumbnail">
									<img src={this.props.projects[1].image} />
								</div>
							</div>
							<div className="col-md-6 col-xs-12 main" id="right-side">
								<div id="top-half">
									<h1 id="project-title">{this.props.projects[0].name}</h1>
									<p className="description">{this.props.projects[0].description}</p>
									<h2 id="project-links"><a id="project-links-atag" href={this.props.projects[0].url} target="_blank">Demo <Icon name="long arrow right"/></a></h2>
								</div>
								<div id="bottom-half">
									<h1 id="project-title">{this.props.projects[1].name}</h1>
									<p className="description">{this.props.projects[1].description}</p>
									<h2 id="project-links"><a id="project-links-atag" href={this.props.projects[1].url} target="_blank">Demo <Icon name="long arrow right"/></a></h2>
								</div>
							</div>								
						</div>

							<div id="mid-section-header" className="row">
								<div className="col-md-12" id="mid-section-header">
									<em><h1 id="mid-section-header">For more, visit my</h1></em>
								</div>
						</div>

						<div id="mid-section" className="row">
							<div className="col-md-6 col-xs-12">
								<em><a id="animate-social" href="https://github.com/tonyn4444"><span className="social-links-project-page"><Icon color="white" name="github" /><span className='text-white'>GitHub</span></span></a></em>
							</div>
							<div className="col-md-6 col-xs-12">
								<em><a id="animate-social" href="http://codepen.io/tonyn4444"><span className="social-links-project-page"><Icon color="white" name="codepen" /><span className='text-white'>CodePen</span></span></a></em>
							</div>
						</div>

						<div id="section3" className="row greyborder">
							<div id="section3-left-side" className="col-md-6 col-xs-12 main">
								<div id="top-half-section3">
									<h1 id="project-title">{this.props.projects[2].name}</h1>
									<p className="description">{this.props.projects[2].description}</p>
									<h2 id="project-links-section3"><a id="project-links-atag" href={this.props.projects[2].url} target="_blank"><Icon name="long arrow left"/> Demo</a></h2>
								</div>
								
								<div id="bottom-half-section3">
									<h1 id="project-title">{this.props.projects[3].name}</h1>
									<p className="description">{this.props.projects[3].description}</p>
									<h2 id="project-links-section3"><a id="project-links-atag" href={this.props.projects[3].url} target="_blank"><Icon name="long arrow left"/> Demo</a></h2>
								</div>
							</div>
							<div className="col-md-6 main col-xs-12" id="">
							<h1 className="white-text">{this.props.projects[2].name}</h1>
								<div className="thumbnail">
									<img src={this.props.projects[2].image} />
								</div>
								<h1 className="white-text">{this.props.projects[3].name}</h1>
								<div className="thumbnail">
									<img src={this.props.projects[3].image} />
								</div>
							</div>
						</div>

						<div className="row" id="divide-section">
							<div className="col-md-12">
							</div>
						</div>

						<div id="section2" className="row">
							<div id="left-section" className="col-md-6 col-xs-12 main">
								<h1 className="white-text">{this.props.projects[4].name}</h1>
								<div className="thumbnail">
									<img src={this.props.projects[4].image} />
								</div>
								<h1 className="white-text">{this.props.projects[5].name}</h1>
									<div className="thumbnail">
										<img src={this.props.projects[5].image} />
									</div>
								</div>
								<div className="col-md-6 main col-xs-12" id="right-side">
									<div id="top-half">
										<h1 id="project-title">{this.props.projects[4].name}</h1>
										<p className="description">{this.props.projects[4].description}</p>
										<h2 id="project-links"><a id="project-links-atag" href={this.props.projects[4].url} target="_blank">Demo <Icon name="long arrow right"/></a></h2>
									</div>
									<div id="bottom-half">
										<h1 id="project-title">{this.props.projects[5].name}</h1>
										<p className="description">{this.props.projects[5].description}</p>
										<h2 id="project-links"><a id="project-links-atag" href={this.props.projects[5].url} target="_blank">Demo <Icon name="long arrow right"/></a></h2>
									</div>
								</div>								
							</div>

							<div className="row">
								<div className="col-md-12" id="bottom-contact">
									<Link to="/contact"><em><h1 id="get-in-touch">Lets get in touch</h1></em></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { projects: state.projects }
}

export default connect(mapStateToProps)(Work);
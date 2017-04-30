import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "../index.css"
import '../projects.css'
import AppModal from './modal';
import { Icon } from 'semantic-ui-react'

class Work extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="stars" id="full">
				<div className="twinkling">
					<div id="projects-container">
						<div className="container" id="section1">
							<div className="row" id="intro-container">
								<div className="col-md-12 project-page-intro">
									<h1 id="project-page-header">Projects</h1>
									<h2 id="h2-project-header">Check out some of my recent work!</h2>
									<em><h2 id="learn-more">Learn More</h2></em>
									<div><Icon name="angle double down" color="cyan" size="huge" /></div>
								</div>
								 <div className="app-modal" >
                    <AppModal />
                  </div>
							</div>
						</div>

						<div id="section2" className="row">
							<div id="left-section" className="col-md-6 main">
								<div className="thumbnail">
									<img src={this.props.projects[0].image} />
								</div>
								<div className="thumbnail">
									<img src={this.props.projects[1].image} />
								</div>
							</div>
							<div className="col-md-6 main" id="right-side">
								<div id="top-half">
									<h1>ReviewShare</h1>
								</div>
								<div id="bottom-half">
								</div>
							</div>								
						</div>

							<div id="mid-section-header" className="row">
								<div className="col-md-12" id="mid-section-header">
									<em><h1 id="mid-section-header">For more, visit my</h1></em>
								</div>
						</div>

						<div id="mid-section" className="row">
							<div className="col-md-6">
								<em><Link to="#"><span className="social-links-project-page"><Icon color="white" name="github" /><span className='text-white'>GitHub</span></span></Link></em>
							</div>
							<div className="col-md-6">
								<em><Link to="#"><span className="social-links-project-page"><Icon color="white" name="codepen" /><span className='text-white'>CodePen</span></span></Link></em>
							</div>
						</div>

						<div id="section3" className="row">
							<div id="section3-left-side" className="col-md-6 main">
								
								
							</div>
							<div className="col-md-6 main" id="">
								<div className="thumbnail">
									<img src={this.props.projects[2].image} />
								</div>

								<div className="thumbnail">
									<img src={this.props.projects[3].image} />
								</div>
							</div>
						</div>

						<div id="section2" className="row">
							<div id="left-section" className="col-md-6 main">
								<div className="thumbnail">
									<img src={this.props.projects[0].image} />
								</div>
								<div className="thumbnail">
									<img src={this.props.projects[1].image} />
								</div>
							</div>
							<div className="col-md-6 main" id="right-side">
								<div id="top-half">
									<h1 id="review-share-header">ReviewShare</h1>
									<h2 id="description">Testing</h2>
								</div>
								<div id="bottom-half">
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
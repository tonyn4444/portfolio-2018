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
			<div id="content-container">
				<div className="work-intro-content">
					<ReactCSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionAppear={true}
                transitionAppearTimeout={500}>
						<div className="about-header container" id="title">
							<div className="row">
								<div className="col-md-12">
							<em><h1 className="about-header" id="titlecontent"><span className="myname">About Me</span><br/><br/> I love to build <span className="cyan">meaningful</span> things<br /><br />
							Outside of code, some of my <span className="cyan">hobbies</span> are -<br/><br/>
							- Lifting<br></br> - Reading<br/>- Playing Music<br/><br/>

							I love spending time with my dog, <span className="cyan">Ace</span><br/><br/>
							Here's a picture of him. Isn't he cute?<br/>
							<br /><div id="what" className="thumbnail"><img id="ace-pic" src={ace} /></div><br/><br/></h1></em>
								</div> 
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>

				<div className="row">
					<div className="col-md-12" id="empl-edu">
						<h1 id="empl-title">What I've Accomplished </h1>
						<em><h2 id="years">Over The Years</h2></em>
					</div>
				</div>

				<div className="row" id="empl-section1">
					<div className="col-md-6 about-pic">
						<div className="thumbnail">
							<img className="about-img-tag" src={this.props.about[0].image} />
						</div>
					</div>

					<div className="col-md-6 about-descr">
						<h1 id="job-title">{this.props.about[0].title}</h1>
							<p>{this.props.about[0].desc}</p>
					</div>

					<div className="col-md-6 about-pic">
						<div className="thumbnail">
							<img className="about-img-tag" src={this.props.about[1].image} />
						</div>
					</div>

					<div className="col-md-6 about-descr">
						<h1 id="job-title">{this.props.about[1].title}</h1>
							<p>{this.props.about[1].desc}</p>
					</div>

					<div className="col-md-6 about-pic">
						<div className="thumbnail">
							<img className="about-img-tag" src={this.props.about[2].image} />
						</div>
					</div>

					<div className="col-md-6 about-descr">
						<h1 id="job-title">{this.props.about[2].title}</h1>
							<p>{this.props.about[2].desc}</p>
					</div>

					<div className="col-md-6 about-pic">
						<div className="thumbnail" >
							<img className="about-img-tag" src={this.props.about[3].image} />
						</div>
					</div>

					<div className="col-md-6 about-descr" id="dbc">
						<h1 id="job-title">{this.props.about[3].title}</h1>
							<p>{this.props.about[3].desc}</p>
					</div>

				</div>

				<div className="row">
					<div className="col-md-12">
						<Link to="/contact"><em><h1 id="get-in-touch">Lets get in touch </h1></em></Link>
					</div>
				</div>



				<div className="app-modal" >
          <AppModal />
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

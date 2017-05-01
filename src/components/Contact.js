import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import AppModal from './modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../contact.css';
import '../index.css';

class Contact extends Component {
	render() {
		return (
			<div className="stars" id="contact-main">
				<div className="twinkling">
					<div className="clouds">
						<div className="container">
							<div className="row" id="contact-container">
								<div className="col-md-12 col-xs-12" id="header-contact-container">
								<ReactCSSTransitionGroup
	                transitionName="slide"
	                transitionEnterTimeout={500}
	                transitionLeaveTimeout={500}
	                transitionAppear={true}
	                transitionAppearTimeout={500}>
									<em><h1 id="header-contact">Contact</h1></em>
									<h3 id="contact-desc">Whether you're interesting in starting your next project, or an employer looking to hire, just shoot me a call or an email and I will get back to you as soon as possible!</h3>
									<h2 id="phone"><span className="cyan"><Icon name="phone square" size="large" /></span> (707) 360-7031</h2>
									<a href="mailto:tonytnguyen94@gmail.com" target="blank" id="mail-link"><h2 id="phone"><span className="cyan"><Icon name="mail" size="large" /></span> Tonytnguyen94@gmail.com</h2></a>

									<div id="social-links-contact">
				        	<Link to="https://linkedin.com/in/tony-t-nguyen" target="_blank"><span className="social-links"><Icon color="cyan" name="linkedin square" />LinkedIn</span></Link>
				        	<Link to="https://github.com/tonyn4444" target="_blank"><span className="social-links"><Icon color="cyan" name="github" />GitHub</span></Link>
				        	<Link to="http://codepen.io/tonyn4444" target="_blank"><span className="social-links"><Icon color="cyan" name="codepen" />CodePen</span></Link>
				        	<Link to="https://www.instagram.com/tonyspamony/?hl=en" target="_blank"><span className="social-links"><Icon color="cyan" name="instagram" />Instagram</span></Link>
	        				
	        			</div>
	        			</ReactCSSTransitionGroup>
								</div>

								
								</div>
								<div className="app-modal">
									<AppModal />
								</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;

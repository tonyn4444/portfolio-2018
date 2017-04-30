import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppModal from './modal';

class Contact extends Component {
	render() {
		return (
			<div>
				Contact
				<Link to="/pages" id="exit-pages"><h1>Pages</h1></Link>
				<div className="app-modal">
					<AppModal />
				</div>
			</div>
		)
	}
}

export default Contact;

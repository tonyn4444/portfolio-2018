import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
	render() {
		return (
			<div>
				Contact
				<Link to="/pages" id="exit-pages"><h1>Pages</h1></Link>
			</div>
		)
	}
}

export default Contact;

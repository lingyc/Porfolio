import React, { Component } from 'react';
import { Link } from 'react-router';


class Nav extends Component {
	render() {
		return (
			<nav className="nav">
				<Link to="top"> Go to top </Link>
				<Link to="a"> Go to a </Link>
				<Link to="b"> Go to b </Link>
				<Link to="c"> Go to c </Link>
			</nav>
		);
	}
}

export default Nav;

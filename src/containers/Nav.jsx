import React, { Component } from 'react';
import { Link } from 'react-router';
import { VelocityComponent } from 'velocity-react';
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}

	render() {
		const menu = (
			<ul className="menuItems">
				<li><Link to="/top"> HOME </Link></li>
				<li><Link to="/projects"> PROJECTS </Link></li>
				<li><Link to="/about"> ABOUT </Link></li>
			</ul>
		);

		return (
			<VelocityComponent animation={(this.props.navPanelOpen) ? {height: '11%'} : {height: '0%'}} duration={500}>
				<div className="nav" style={{height: '0%'}}>
					{(this.props.navPanelOpen) ? menu : ''}
				</div>
			</VelocityComponent>
		);
	}
}

export default Nav;

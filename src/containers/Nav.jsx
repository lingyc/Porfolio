import React, { Component } from 'react';
import { Link } from 'react-router';
import { VelocityComponent } from 'velocity-react';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}

	renderMenuBtn() {
		return (
			<svg className="menuBtn" x="0px" y="0px" width="100%" viewBox="0 0 14 9" stroke="black"
				onClick={() => this.props.toggleNavPanel()}>
				<g>
					<line x1="1" y1="8" x2="13" y2="8"/>
					<line x1="1" y1="5" x2="13" y2="5"/>
					<line x1="1" y1="2" x2="13" y2="2"/>
				</g>
			</svg>
			)
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
			<VelocityComponent animation={(this.props.navPanelOpen) ? {width: '20%'} : {width: '5%'}} duration={500}>
				<nav className="nav" style={{width: '5%'}}>
					<div className="invisiblePanel">
						{this.renderMenuBtn()}
					</div>
					{(this.props.navPanelOpen) ? menu : ''}
				</nav>
			</VelocityComponent>
		);
	}
}

export default Nav;

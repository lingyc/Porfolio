import React, { Component } from 'react';
import { Link } from 'react-router';
import { VelocityComponent } from 'velocity-react';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
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
		console.log(this.props.navPanelOpen);
		return (
			<VelocityComponent animation={(this.props.navPanelOpen) ? {width: '15%'} : {width: '5%'}} duration={400}>
				<nav className="nav" style={{width: '5%'}}>
					<div className="invisiblePanel">
						{this.renderMenuBtn()}
					</div>
					{/*<Link to="top"> Go to top </Link>
					<Link to="a"> Go to a </Link>
					<Link to="b"> Go to b </Link>
					<Link to="c"> Go to c </Link>*/}
				</nav>
			</VelocityComponent>
		);
	}
}

export default Nav;

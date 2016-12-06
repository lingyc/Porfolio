import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';
import Menu from '../components/Menu';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}

	render() {
		return (
			<VelocityComponent animation={(this.props.navPanelOpen) ? {height: '11%'} : {height: '0%'}} duration={500}>
				<div className="nav" style={{height: '0%'}}>
					{(this.props.navPanelOpen) ? <Menu /> : ''}
				</div>
			</VelocityComponent>
		);
	}
}

export default Nav;

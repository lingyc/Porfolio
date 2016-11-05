require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';

import Logo from '../components/Logo';
import Nav from '../containers/Nav';

class AppComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navPanelOpen: false,
			openingEnd: false,
			focal: null,
		}	
	}

	toggleNavPanel() {
		this.setState({
			navPanelOpen: !this.state.navPanelOpen
		});
	}

	openingEnd() {
		this.setState({
			openingEnd: true
		});
	}

  render() {

		let bodyAnimation;
		if (this.state.openingEnd) {
			bodyAnimation = { 
				animation: {
			    opacity: 1
				},
				duration: 250
			}
		} else {
			bodyAnimation = { 
				animation: {
			    opacity: 0
				},
				duration: 250
			}
		}

    return (
      <div className="index">
				<Logo openingEnd={() => this.openingEnd() } navPanelOpen={this.state.navPanelOpen}/>
				<VelocityComponent {...bodyAnimation}>
					<div>
						<Nav navPanelOpen={this.state.navPanelOpen} toggleNavPanel={() => this.toggleNavPanel()}/>
						{this.props.children}
        	</div>
				</VelocityComponent>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

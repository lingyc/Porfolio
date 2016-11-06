require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';

import Logo from '../components/Logo';
import Nav from '../containers/Nav';
import projectData from '../temp/data';

class AppComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navPanelOpen: false,
			openingEnd: false,
			focalProject: null,
			projectData: projectData
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

	trackFocalProject(id) {
		this.setState({
			focal: id
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
						{React.cloneElement(this.props.children, {
              projects: this.state.projectData,
              trackFocalProject: this.trackFocalProject.bind(this),
              focalProject: this.state.focalProject
            })}
        	</div>
				</VelocityComponent>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

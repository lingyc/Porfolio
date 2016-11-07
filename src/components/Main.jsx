require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';

import Logo from '../components/Logo';
import Nav from '../containers/Nav';
import projectData from '../temp/data';
import helpers from '../utilities/helpers';

class AppComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navPanelOpen: false,
			openingEnd: false,
			focalProject: null,
			projectClicked: false,
			projectData: projectData.projectInfo,
			techData: helpers.poolData(projectData.projectTechDetails),
			focalTech: null
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
			focalProject: id
		});
	}

	trackFocalTech(tech) {
		console.log(tech);
		this.setState({
			focalTech: tech
		});
	}

	handleProjectClicked(bool) {
		this.setState({
			projectClicked: bool
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
    
    let techLinks
    if (parseInt(this.state.focalProject) >= 0) {
    	techLinks = projectData.projectTechDetails[parseInt(this.state.focalProject)].techs;
    } else {
    	techLinks = [];
    }

    return (

      <div className="index">
				<Logo openingEnd={() => this.openingEnd() } navPanelOpen={this.state.navPanelOpen}/>
				<VelocityComponent {...bodyAnimation}>
					<div>
						{/*<Nav navPanelOpen={this.state.navPanelOpen} toggleNavPanel={() => this.toggleNavPanel()}/>*/}
						{React.cloneElement(this.props.children, {
              projects: this.state.projectData,
              trackFocalProject: this.trackFocalProject.bind(this),
              focalProject: this.state.focalProject,
              projectClicked: this.state.projectClicked,
              handleProjectClicked: this.handleProjectClicked.bind(this),
              techData: this.state.techData,
              techLinks: techLinks,
              trackFocalTech: this.trackFocalTech.bind(this)
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

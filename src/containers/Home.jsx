import React, { Component } from 'react';
import Hero from '../containers/Hero';
import ProjectsHome from '../containers/ProjectsHome';
import Techs from '../containers/Techs';

class Home extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.notifyViewChange('Home');
	}

	render() {
	 	return (
		 	<div className='home'>
		 		<Hero/>
		    <ProjectsHome
		    	projectInfo={this.props.projectInfo}
		    	trackFocalProject={this.props.trackFocalProject}
		    	focalProject={this.props.focalProject}
		    	projectClicked={this.props.projectClicked}
		    	handleProjectClicked={this.props.handleProjectClicked}
		    />
		    <Techs
		    	techData={this.props.techData}
		    	techLinks={this.props.techLinks}
		    	trackFocalTech={this.props.trackFocalTech}
		    />
		  </div>
		)
	}
}

export default Home;
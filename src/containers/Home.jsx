import React, { Component } from 'react';

import Hero from '../containers/Hero';
import Projects from '../containers/Projects';
import Techs from '../containers/Techs';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	 	return (
		 	<div className='home'>
		 		<Hero/>
		    <Projects 
		    	projects={this.props.projects} 
		    	trackFocalProject={this.props.trackFocalProject} 
		    	focalProject={this.props.focalProject}
		    	projectClicked={this.props.projectClicked}
		    	handleProjectClicked={this.props.handleProjectClicked}
		    />
		    <Techs techData={this.props.techData}/>
		  </div>
		)
	}
}

export default Home;
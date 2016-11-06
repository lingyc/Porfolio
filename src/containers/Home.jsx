import React, { Component } from 'react';

import Hero from '../containers/Hero';
import Projects from '../containers/Projects';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	 	return (
		 	<div>
		 		<Hero/>
		    <Projects 
		    	projects={this.props.projects} 
		    	trackFocalProject={this.props.trackFocalProject} 
		    	focalProject={this.props.focalProject}
		    	projectClicked={this.props.projectClicked}
		    	handleProjectClicked={this.props.handleProjectClicked}
		    />
		  </div>
		)
	}
}

export default Home;
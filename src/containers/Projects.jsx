import React, { Component } from 'react';
import ProjectTile from '../components/ProjectTile';

const Projects = (props) => {
	return (
		<div className="projects">
			{props.projects.map((project) => <ProjectTile project={project} trackFocalProject={this.props.trackFocalProject} focalProject={this.props.focalProject} key={project.id}/>)}
		</div>
	);
}

export default Projects;

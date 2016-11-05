import React, { Component } from 'react';
import ProjectTile from '../ProjectTile';

const Projects = (props) => {
	return (
		<div className="projects">
			{props.projects.map((project) => <ProjectTile/>)}
		</div>
	);
}

export default Projects;

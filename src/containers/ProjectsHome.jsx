import React, { Component } from 'react';
import ProjectTile from '../components/ProjectTile';

const Projects = (props) => {
	return (
		<div className="projects">
			{props.projectInfo.map((project) => <ProjectTile project={project} trackFocalProject={props.trackFocalProject} focalProject={props.focalProject} projectClicked={props.projectClicked} handleProjectClicked={props.handleProjectClicked} key={project.id}/>)}
		</div>
	);
}

export default Projects;

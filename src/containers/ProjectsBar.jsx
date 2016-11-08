import React, { Component } from 'react';
import ProjectTile from '../components/ProjectTile';

const ProjectsBar = (props) => {
	return (
		<div className="projectsBar">
			{props.projectInfo.map((project) => <ProjectTile project={project} trackFocalProject={props.trackFocalProject} focalProject={props.focalProject} projectClicked={props.projectClicked} handleProjectClicked={props.handleProjectClicked} key={project.id}/>)}
		</div>
	);
}

export default ProjectsBar;

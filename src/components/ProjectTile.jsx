import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';

class ProjectTile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
		}
	}

  render() {
  	const project = this.props.project;
    let eventHandlers;
    let animationProps;

    if (this.props.projectClicked && this.props.focalProject === project.id) {
      eventHandlers = {
        onClick: () => { this.props.trackFocalProject(null); this.props.handleProjectClicked(false); }
      }
    } else if (this.props.projectClicked && this.props.focalProject !== project.id) {
      eventHandlers = {
        onClick: () => { this.props.trackFocalProject(project.id); this.props.handleProjectClicked(true); }
      }
    } else {
      eventHandlers = {
        onMouseEnter: () => { this.props.trackFocalProject(project.id); this.setState({hover: true}) },
        onMouseLeave: () => { this.props.trackFocalProject(null); this.setState({hover: false}) },
        onClick: () => { this.props.trackFocalProject(project.id); this.props.handleProjectClicked(true); }
      }
    }

    if (this.state.hover) {
      animationProps = {
        animation: {
          opacity: 1
        },
        duration: 300
      }
    } else {
      animationProps = {
        animation: {
          opacity: 0
        },
        duration: 300
      }
    }

  	return(
  		<div className="projectTile" style={{backgroundImage: `url(${project.thumbnail})`}} {...eventHandlers}>
        <VelocityComponent {...animationProps}>
    			<div className="textGroupOuter" style={{opacity: 0}}>
            <div className="textGroupInner">
              <h3 className="projectName">{project.name}</h3>
        			<h3 className="projectDescription">{project.description}</h3>
              <button>read more</button>
            </div>
    		  </div>
        </VelocityComponent>
      </div>
  	)
  }
}

export default ProjectTile;
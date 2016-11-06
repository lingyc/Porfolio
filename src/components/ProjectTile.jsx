import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';

class ProjectTile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
      clicked: false
		}
	}

  render() {
  	const project = this.props.project;
  	return(
  		<div className="projectTile" style={{backgroundImage: `url(${project.thumbnail})`}}
        onMouseEnter={ () => this.props.trackFocalProject(project.id) }
        onMouseLeave={ () => this.props.trackFocalProject(null) }>

        <VelocityComponent>
    			<div className="textGroup">
            <h3 className="projectName">{project.name}</h3>
      			<h3 className="projectDescription">{project.description}</h3>
            <button>read more</button>
    		  </div>
        </VelocityComponent>
      </div>
  	)
  }
}


export default ProjectTile;
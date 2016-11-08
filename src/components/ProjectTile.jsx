import React, { Component } from 'react';
import { Link } from 'react-router';
import { VelocityComponent } from 'velocity-react';
import { Button, Icon } from 'semantic-ui-react';

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
        onClick: () => { this.props.trackFocalProject(null); this.props.handleProjectClicked(false); this.setState({hover: false})}
      }
    } else if (this.props.projectClicked && this.props.focalProject !== project.id) {
      eventHandlers = {
        onClick: () => { this.props.trackFocalProject(project.id); this.props.handleProjectClicked(true); this.setState({hover: false})}
      }
    } else {
      eventHandlers = {
        onMouseEnter: () => { this.props.trackFocalProject(project.id); this.setState({hover: true}) },
        onMouseLeave: () => { this.props.trackFocalProject(null); this.setState({hover: false}) },
        onClick: () => { this.props.trackFocalProject(project.id); this.props.handleProjectClicked(true); this.setState({hover: false}) }
      }
    }

    if (this.state.hover || this.props.projectClicked && this.props.focalProject === project.id) {
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
                <Link to={`/project/${project.id}`}>
                  <Button animated>
                    <Button.Content visible>Read More</Button.Content>
                    <Button.Content hidden>
                      <Icon name='right arrow' />
                    </Button.Content>
                  </Button>
                </Link>
            </div>
    		  </div>
        </VelocityComponent>
      </div>
  	)
  }
}

export default ProjectTile;
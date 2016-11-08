import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';
import { Grid, Image, Container, Divider } from 'semantic-ui-react'

import ArcDiagram from '../components/ArcDiagram';
import ProjectsBar from '../containers/ProjectsBar';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImg: 0,
			projectId: 0
		}
	}

	componentDidMount() {
		this.props.notifyViewChange('Project');
	}

	render() {
		//for future, do ajax request to grab detail project data
		// const projectId = this.props.params.projectId;
		const projectId = 0;
		const projectInfo = this.props.projectInfo[projectId];
		const projectTechDetails = this.props.projectTechDetails[projectId];

		return (
			<div className="projectPage">
				<Grid  className="projectPage-container">
			    
			    <Grid.Row>
						<h3 className="ui header">{projectInfo.name}</h3>
			    </Grid.Row>

			    <Grid.Row className='projectPage-container-center'>

						<Grid centered={true}>
					    <Grid.Column className="projectPage-hero-container" width={10}>
								<Image className="projectPage-hero" bordered={true} src={projectInfo.thumbnail}/>
					    </Grid.Column>

					    <Grid.Column width={6} textAlign="left">
								<Image.Group className='projectPage-thumbnails' size='tiny' shape='rounded' bordered={true}>
									{projectInfo.thumbnails.map((thumbnail, index) => {
										return (
											<Image src={thumbnail} key={index} onClick={ () => this.setState({currentImg: index})}/>
										)
									})}
								</Image.Group>
								{projectInfo.detailDescription.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
							</Grid.Column>
						</Grid>

					</Grid.Row>

				</Grid>
				<ProjectsBar
		    	projectInfo={this.props.projectInfo} 
		    	trackFocalProject={this.props.trackFocalProject} 
		    	focalProject={this.props.focalProject}
		    	projectClicked={this.props.projectClicked}
		    	handleProjectClicked={this.props.handleProjectClicked}
		    	/>
				<div className='stacks'>
			 		<ArcDiagram 
			 			techData={this.props.techData}
			 			techLinks={this.props.projectTechDetails[this.state.projectId].techs}
			 			width={window.innerWidth * .75}
			 			margin={250}
			 			radius={5}
			 			trackFocalTech={this.props.trackFocalTech}
			 			color='black'
		 			/>
			 	</div>
			</div>
		);
	}
}

export default Project;
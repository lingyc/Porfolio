import React, { Component } from 'react';
import { Grid, Image, Divider, Icon } from 'semantic-ui-react'
import ArcDiagram from '../components/ArcDiagram';
import ProjectsBar from './ProjectsBar';
import Menu from '../components/Menu';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImg: 0,
			projectId: 0,
			showOtherProjects: false
		}
	}

	componentDidMount() {
		this.props.notifyViewChange('Project');
	}

	renderMoreProjects() {
		if (this.state.showOtherProjects) {
			return (
				<ProjectsBar
		    	projectInfo={this.props.projectInfo}
		    	trackFocalProject={this.props.trackFocalProject}
		    	focalProject={this.props.focalProject}
		    	projectClicked={this.props.projectClicked}
		    	handleProjectClicked={this.props.handleProjectClicked}
			  />
			)
		}
	}

	render() {
		//for future, do ajax request to grab detail project data
		// const projectId = this.props.params.projectId;
		const projectId = parseInt(this.props.params.projectId);
		const projectInfo = this.props.projectInfo[projectId];
		const projectTechDetails = this.props.projectTechDetails[projectId];

		return (
			<div className="projectWrapper">
				<Menu/>
				<div className="projectPage">
					<Grid  className="projectPage-container">
				    
				    <Grid.Row>
							<h3 className="ui header">{projectInfo.name}</h3>
				    </Grid.Row>

				    <Grid.Row className='projectPage-container-center'>

							<Grid centered={true}>
						    <Grid.Column className="projectPage-hero-container" width={10}>
									<Image className="projectPage-hero" bordered={true} src={projectInfo.img[this.state.currentImg]} shape='rounded'/>
						    </Grid.Column>

						    <Grid.Column width={6} textAlign="left">
									<Image.Group className='projectPage-thumbnails' size='tiny' shape='rounded' bordered={true}>
										{projectInfo.thumbnails.map((thumbnail, index) => {
											return (
												<Image src={thumbnail} key={index} onClick={ () => this.setState({currentImg: index})}/>
											)
										})}
									</Image.Group>
									<a className='divider-link' href={projectInfo.link}>{projectInfo.link}</a>
									{projectInfo.detailDescription.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
								</Grid.Column>
							</Grid>

						</Grid.Row>

					</Grid>
						<Divider horizontal>
							<Icon className="showMore" size="huge" name={(this.state.showOtherProjects) ? 'caret up' : 'caret down'} onClick={ () => this.setState({showOtherProjects: !this.state.showOtherProjects}) }/>
						</Divider>
						{this.renderMoreProjects()}
						<h4>THE TECH STACK</h4>
					<div className='stacks'>
				 		<ArcDiagram
				 			techData={this.props.techData}
				 			techLinks={(this.props.techLinks.length !== 0) ? this.props.techLinks : projectTechDetails.techs}
				 			width={window.innerWidth * .75}
				 			margin={250}
				 			radius={5}
				 			trackFocalTech={this.props.trackFocalTech}
				 			color='black'
			 			/>
				 	</div>
				</div>
			</div>
		);
	}
}

export default Project;
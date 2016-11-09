import React, { Component } from 'react';
import ArcDiagram from '../components/ArcDiagram';

class Techs extends Component {
	constructor(props) {
		super(props);
	}

	render() {


	 	return (
		 	<div className="techs">
				<h2>SKILLS</h2>
		 		<ArcDiagram
		 			techData={this.props.techData}
		 			techLinks={this.props.techLinks}
		 			width={window.innerWidth * .8}
		 			margin={250}
		 			radius={5}
		 			trackFocalTech={this.props.trackFocalTech}
	 			/>
		  </div>
		)
	}
}

export default Techs;
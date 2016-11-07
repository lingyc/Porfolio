import React, { Component } from 'react';
import helpers from '../utilities/helpers';
import ArcDiagram from '../components/ArcDiagram';

class Techs extends Component {
	constructor(props) {
		super(props);
	}

	render() {


	 	return (
		 	<div className="techs">
		 		<ArcDiagram 
		 			techData={this.props.techData}
		 			width={window.innerWidth * .75}
		 			height={400}
		 			margin={250}
		 			radius={5}
	 			/>
		  </div>
		)
	}
}

export default Techs;
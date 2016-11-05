import { VelocityComponent } from 'velocity-react';
import React, { Component } from 'react';

class LogoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			openSequenceDone: false
		}
	}

	hoverAnimationProps() {
		if (this.state.hover && this.state.openSequenceDone) {
			return	{
				animation: {
			    strokeRed: 0,
			    strokeGreen: 200,
			    strokeBlue: 200,
			    'stroke-width':4
				},
				duration: 250
			}
		} else {
			return {
				animation: {
			    strokeRed: 0,
			    strokeGreen: 0,
			    strokeBlue: 0,
			    'stroke-width':1
				},
				duration: 250
			}
		}
	}

	hoverTextProps() {
		if (this.state.hover && this.state.openSequenceDone) {
			return	{
				animation: {
			    opacity: 1
				},
				duration: 250
			}
		} else {
			return {
				animation: {
			    opacity: 0
				},
				duration: 250
			}
		}
	}

	renderSVGLogo() {
		let minorLineDuration = 1100;
		let minorLineDelay = 1800;

		return (
			<svg className="SVGLogo" x="0px" y="0px" width="700px" height="700px" viewBox="0 0 100 100"
				onMouseEnter={ () => this.setState({hover: true}) }
				onMouseLeave={ () => this.setState({hover: false}) }>
				
				<g className="logoLayer_3">
	      	<VelocityComponent animation={{'x1': 60.415}} duration={minorLineDuration} delay={minorLineDelay} runOnMount={true}>
						<line className="minorLine shortLine" x1="82.175" y1="48.77" x2="82.175" y2="48.77"/>
	      	</VelocityComponent>
	      	<VelocityComponent animation={{'x1': 15.634}} duration={minorLineDuration} delay={minorLineDelay} runOnMount={true}>
						<line className="minorLine shortLine" x1="37.393" y1="48.77" x2="37.393" y2="48.77"/>
	      	</VelocityComponent>
	      	<VelocityComponent animation={{'x1': 38.024}} duration={minorLineDuration} delay={minorLineDelay} runOnMount={true}>
						<line className="minorLine shortLine" x1="59.784" y1="13.835" x2="59.784" y2="13.835"/>
	      	</VelocityComponent>
	      	<VelocityComponent animation={{'x1': 38.024}} duration={minorLineDuration} delay={minorLineDelay} runOnMount={true}>
						<line className="minorLine shortLine" x1="59.784" y1="83.704" x2="59.784" y2="83.704"/>
	      	</VelocityComponent>
				</g>


	      	<VelocityComponent animation={{'translateX': 0}} duration={1000} delay={1400} runOnMount={true}>
	      		<VelocityComponent animation={{'translateX': 21.7}} runOnMount={true}>
							<g className="logoLayer_2">
								<polyline className="minorLine" points="38.024,13.835 60.415,48.77 38.024,83.704 	"/>
								<VelocityComponent {...(this.hoverAnimationProps.bind(this)())}>
									<polyline className="majorLine" points="38.024,83.704 15.634,48.77 38.024,13.835 	"/>
								</VelocityComponent>
							</g>
		      	</VelocityComponent>
	      	</VelocityComponent>

					<g className="logoLayer_1">
						<line className="minorLine" x1="59.784" y1="13.835" x2="82.175" y2="48.77"/>
						<VelocityComponent {...(this.hoverAnimationProps())}>
							<polyline className="majorLine" points="82.175,48.77 59.784,83.704 37.393,48.77 59.784,13.835 	"/>
						</VelocityComponent>
					</g>

			</svg>
		);
	}

  render() {
    return (
    		<div style={{position: 'relative'}}>
		    	<VelocityComponent animation={{left: '20%'}} justifyContent={'flex-start'} duration={1000} delay={1000} runOnMount={true}>
			      <div className="container" style={{display: 'flex', 'flexDirection': 'row', 'justifyContent': 'center', position: 'absolute', margin: '0 auto', width: '700px', 'margin-left':-350, left: '50%'}}>
			      	<VelocityComponent animation={{width: 100, height: 100, 'align-self': 'flex-start'}} duration={1000} delay={100} runOnMount={true} complete={() => { this.setState({openSequenceDone: true}); this.props.openingEnd(); } }>
				      	<VelocityComponent animation={{width: 700, height: 700}} duration={0} delay={0} runOnMount={true}>
					      	<VelocityComponent animation={{'stroke-dashoffset': 0}} duration={2000} delay={1000} runOnMount={true}>
					      			{this.renderSVGLogo()}
					      	</VelocityComponent>
				      	</VelocityComponent>
				    	</VelocityComponent>
			      </div>
			    </VelocityComponent>
		    </div>
    );
  }
}

export default LogoComponent;
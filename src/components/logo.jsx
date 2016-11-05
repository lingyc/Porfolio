import { VelocityComponent } from 'velocity-react';
import React, { Component } from 'react';

import { Link } from 'react-router';

const black = {
  strokeRed: 0,
  strokeGreen: 0,
  strokeBlue: 0
};

const white = {
  strokeRed: 255,
  strokeGreen: 255,
  strokeBlue: 255
};

const accent = {
  strokeRed: 0,
  strokeGreen: 200,
  strokeBlue: 200
};

class LogoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			openSequenceDone: false
		}
	}

	animatePropsMajor() {
		if (this.state.hover && this.state.openSequenceDone) {
			return	{
				animation: {
					...accent,
			    'stroke-width':3
				},
				duration: 200
			}
		} else if (this.state.openSequenceDone && !this.props.navPanelOpen) {
				return {
					animation: {
				    ...white,
				    'stroke-width':2
					},
					duration: 200
				}
		} else if (this.props.navPanelOpen) {
				return {
					animation: {
				    ...black,
				    'stroke-width':2
					},
					duration: 200
			}
		} else {
				return {
					animation: {
				    ...accent,
				    'stroke-width':2
					},
					duration: 200
				}
		}
	}

	animatePropsMinor() {
		if (this.props.navPanelOpen) {
			return {
				animation: {
			    ...black,
			    'stroke-dasharray': 1
				},
				duration: 200
			}
		} else if (this.state.openSequenceDone) {
			return {
				animation: {
			    ...white,
			    'stroke-dasharray': 1
				},
				duration: 200
			}			
		} else {
			return {
				animation: {
			    ...black,
				}
			}	
		}
	}

	renderSVGLogo() {
		let minorLineDuration = 550;
		let minorLineDelay = 800;

		return (
			<svg className="SVGLogo" x="0px" y="0px" width="100%" viewBox="0 0 100 100"
				onMouseEnter={ () => this.setState({hover: true}) }
				onMouseLeave={ () => this.setState({hover: false}) }
				onClick={ () => this.props.toggleNavPanel() }>
				
				<VelocityComponent {...(this.animatePropsMinor())}>
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
				</VelocityComponent>


	      	<VelocityComponent animation={{'translateX': 0}} duration={600} delay={300} runOnMount={true}>
	      		<VelocityComponent animation={{'translateX': 21.7}} runOnMount={true}>
							<g className="logoLayer_2">
								<VelocityComponent {...(this.animatePropsMinor())}>
									<polyline className="minorLine" points="38.024,13.835 60.415,48.77 38.024,83.704 	"/>
								</VelocityComponent>
								<VelocityComponent {...(this.animatePropsMajor())}>
									<polyline className="majorLine" points="38.024,83.704 15.634,48.77 38.024,13.835 	"/>
								</VelocityComponent>
							</g>
		      	</VelocityComponent>
	      	</VelocityComponent>

					<g className="logoLayer_1">
						<VelocityComponent {...(this.animatePropsMinor())}>
							<line className="minorLine" x1="59.784" y1="13.835" x2="82.175" y2="48.77"/>
						</VelocityComponent>
						<VelocityComponent {...(this.animatePropsMajor())}>
							<polyline className="majorLine" points="82.175,48.77 59.784,83.704 37.393,48.77 59.784,13.835 	"/>
						</VelocityComponent>
					</g>

			</svg>
		);
	}

  render() {
    return (
    	<Link to="top">
				<div style={{position: 'relative', 'zIndex':1}}>
					<VelocityComponent animation={{left: '10%', width: '11%', height: 'auto'}} duration={400} delay={1400} runOnMount={true} complete={() => { this.setState({openSequenceDone: true}); this.props.openingEnd(); }}>
		      	<div style={{transform: 'translate(-50%, 0)', position: 'fixed', left: '50%', width: '30%', height: 'auto'}}>
			      	<VelocityComponent animation={{'stroke-dashoffset': 0}} duration={1000} delay={500} runOnMount={true}>
			      			{this.renderSVGLogo()}
			      	</VelocityComponent>
		      	</div>
			    </VelocityComponent>
		    </div>
	    </Link>
    );
  }
}

export default LogoComponent;
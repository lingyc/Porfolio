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
				duration: 500
			}
		} else if (this.state.openSequenceDone && !this.props.navPanelOpen && this.props.currentView !== 'Project') {
				return {
					animation: {
				    ...white,
				    'stroke-width':2
					},
					duration: 500
				}
		} else if (this.state.openSequenceDone && (this.props.navPanelOpen || this.props.currentView === 'Project')) {
				return {
					animation: {
				    ...black,
				    'stroke-width':2
					},
					duration: 500
			}
		} else {
				return {
					animation: {
				    ...accent,
				    'stroke-width':2
					},
					duration: 500
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
				duration: 500
			}
		} else if (this.state.openSequenceDone && this.props.currentView !== 'Project') {
			return {
				animation: {
			    ...white,
			    'stroke-dasharray': 1
				},
				duration: 500
			}
		} else if (this.state.openSequenceDone && this.props.currentView === 'Project') {
			return {
				animation: {
			    ...black,
			    'stroke-dasharray': 1
				},
				duration: 500
			}
		} else {
			return {
				animation: {
			    ...black
				}
			}
		}
	}

	animatePropsHover() {
		if (this.state.hover && this.state.openSequenceDone) {
			return {
				animation: {left: '6%', width: '8%', top: '1%', height: 'auto'},
				duration: 300
			}
		} else if (!this.state.openSequenceDone) {
			return {
				animation: {left: '4%', width: '5%', top: '1%', height: 'auto'},
				duration: 500,
				delay: 3000
			}
		} else {
			return {	
				animation: {left: '4%', width: '5%', top: '1%', height: 'auto'},
				duration: 300
			}
		}
	}

	renderSVGLogo() {
		let minorLineDuration = 1000;
		let minorLineDelay = 1400;

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


	      	<VelocityComponent animation={{'translateX': 0}} duration={1000} delay={1000} runOnMount={true}>
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
				<div style={{position: 'relative', 'zIndex':3}}>
					<VelocityComponent {...this.animatePropsHover()} runOnMount={true} complete={() => { this.setState({openSequenceDone: true}); this.props.openingEnd(); }}>
		      	<div style={{transform: 'translate(-50%, -50%)', top: '50%', position: 'fixed', left: '50%', width: '30%', height: 'auto'}}>
			      	<VelocityComponent animation={{'stroke-dashoffset': 0}} duration={2800} delay={500} runOnMount={true}>
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
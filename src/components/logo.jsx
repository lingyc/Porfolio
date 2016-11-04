import { VelocityComponent } from 'velocity-react';
import React, { Component } from 'react';

class LogoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}

	hoverAnimationProps() {
		console.log(this.state.hover);
		if (this.state.hover) {
			return {
				animation: {
					stroke: 'red'
				},
				duration: 1000
			}
		} else {
			return {
				animation: {
					stroke: 'black'
				},
				duration: 1000
			};
		}
	}

	renderSVGLogo() {
		let animationProps;
		if (this.state.hover) {
			animationProps = {
				animation: {
			    strokeRed: 255,
			    strokeGreen: 0,
			    strokeBlue: 0,
			    'stroke-width':2
				},
				duration: 500
			}
		} else {
			animationProps = {
				animation: {
			    strokeRed: 200,
			    strokeGreen: 0,
			    strokeBlue: 0,
			    'stroke-width':1
				},
				duration: 500
			};
		}
		return (
			<svg className="SVGLogo" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 100 100"
				onMouseEnter={ () => this.setState({hover: true}) }
				onMouseLeave={ () => this.setState({hover: false}) }>
				<g className="logoLayer_3">
	      	<VelocityComponent animation={{'x1': 60.415}} duration={1500} delay={1500} runOnMount={true}>
						<line className="minorLine shortLine" x1="82.175" y1="48.77" x2="82.175" y2="48.77"/>
	      	</VelocityComponent>
	      	<VelocityComponent animation={{'x1': 15.634}} duration={1500} delay={1500} runOnMount={true}>
						<line className="minorLine shortLine" x1="37.393" y1="48.77" x2="37.393" y2="48.77"/>
	      	</VelocityComponent>
	      	<VelocityComponent animation={{'x1': 38.024}} duration={1500} delay={1500} runOnMount={true}>
						<line className="minorLine shortLine" x1="59.784" y1="13.835" x2="59.784" y2="13.835"/>
	      	</VelocityComponent>
	      	<VelocityComponent animation={{'x1': 38.024}} duration={1500} delay={1500} runOnMount={true}>
						<line className="minorLine shortLine" x1="59.784" y1="83.704" x2="59.784" y2="83.704"/>
	      	</VelocityComponent>
				</g>


	      	<VelocityComponent animation={{'translateX': 0}} duration={1500} delay={1000} runOnMount={true}>
	      		<VelocityComponent animation={{'translateX': 21.7}} runOnMount={true}>
							<g className="logoLayer_2">
								<polyline className="minorLine" points="38.024,13.835 60.415,48.77 38.024,83.704 	"/>
								<VelocityComponent {...animationProps}>
									<polyline className="majorLine" points="38.024,83.704 15.634,48.77 38.024,13.835 	"/>
								</VelocityComponent>
							</g>
		      	</VelocityComponent>
	      	</VelocityComponent>

						<g className="logoLayer_1">
							<line className="minorLine" x1="59.784" y1="13.835" x2="82.175" y2="48.77"/>
							<VelocityComponent {...animationProps}>
								<polyline className="majorLine" points="82.175,48.77 59.784,83.704 37.393,48.77 59.784,13.835 	"/>
			      	</VelocityComponent>
						</g>
			</svg>
		);
	}

  render() {

    return (
      <div className="container">
      	<VelocityComponent animation={{'stroke-dashoffset': 0}} duration={4000} delay={1000} runOnMount={true}>
      		{this.renderSVGLogo()}
      	</VelocityComponent>
      </div>
    );
  }
}

export default LogoComponent;
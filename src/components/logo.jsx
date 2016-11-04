import { VelocityComponent } from 'velocity-react';
import React, { Component } from 'react';

class LogoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startProp: {
				animation: {
	        'stroke-dashoffset': 0
	    	},
	    	duration: 3000,
	    	delay: 1000,
	    	runOnMount: true
	    }
		}
	}

	renderSVGLogo() {
		return (
			<svg className="SVGLogo" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 100 100">
				<g id="Layer_2">
					<line className="st0" x1="59.784" y1="13.835" x2="82.175" y2="48.77"/>
					<polyline className="st0" points="38.024,13.835 60.415,48.77 38.024,83.704 	"/>
					<line className="shortLine" x1="60.415" y1="48.77" x2="82.175" y2="48.77"/>
					<line className="shortLine" x1="37.393" y1="48.77" x2="15.634" y2="48.77"/>
					<line className="shortLine" x1="38.024" y1="13.835" x2="59.784" y2="13.835"/>
					<line className="shortLine" x1="38.024" y1="83.704" x2="59.784" y2="83.704"/>
				</g>
				<g id="Layer_1">
					<polyline className="st2" points="38.024,83.704 15.634,48.77 38.024,13.835 	"/>
					<polyline className="st2" points="82.175,48.77 59.784,83.704 37.393,48.77 59.784,13.835 	"/>
				</g>
			</svg>
		);
	}

  render() {

    return (
      <div className="index">
      	<VelocityComponent {...this.state.startProp}>
      		{this.renderSVGLogo()}
      	</VelocityComponent>
      </div>
    );
  }
}

export default LogoComponent;
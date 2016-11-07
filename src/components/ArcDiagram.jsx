import React, { Component } from 'react';
import {scaleLinear} from "d3-scale";


class ArcDiagram extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.width,
			height: this.props.height,
			margin: this.props.margin,
			pad: this.props.margin / 2,
			radius: this.props.radius,
			yfixed: this.props.margin / 2 + this.props.radius
		}
	}

  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
  	this.setState({
  		width: window.innerWidth * .75
  	})
  }

	linearLayout(nodes) {
    // used to scale node index to x position
    let xscale = scaleLinear()
        .domain([0, nodes.length - 1])
        .range([this.state.radius, this.state.width - this.state.radius]);

    // calculate pixel location for each node
    return nodes.map((d, i) => {
        d.x = xscale(i);
        d.y = this.state.yfixed;
        return d;
    });
	}

	renderNodes(nodes, radius) {
		return nodes.map((d, i) => {
			return (
				<g style={{fill: 'white'}} transform={`translate(${d.x + radius}, ${d.y})`}
					onClick={() => console.log('clicking ' + d.name)}
					key={d.name}
				>
					<circle className="techNodes" cx={-radius} cy={radius * 2} r={radius}/>
					<text transform={'rotate(-70)'}>{d.name}</text>
				</g>
			)
		});
	}

	render() {
		let scaledNodes = this.linearLayout(this.props.techData)

	 	return (
			<svg className="diagram">
				<svg className="plot">
					{this.renderNodes(scaledNodes, this.state.radius)}
				</svg>
			</svg>
		)
	}
}

export default ArcDiagram;
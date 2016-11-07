import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
const d3 = require("d3");

import projectData from '../temp/data';

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
      window.addEventListener('resize', this.updateDimensions.bind(this));
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
    //dataHash created for fast lookup
    let dataHash = {};
    let dataArray = nodes.map((d, i) => {
        d.x = xscale(i);
        d.y = this.state.yfixed;
    		dataHash[d.name] = d.x;
        return d;
    });

    return {
    	dataHash: dataHash,
    	dataArray: dataArray
    }

	}

	renderNodes(nodes, radius) {
		return nodes.map((d) => {
			return (
				<g transform={`translate(${d.x + radius}, ${d.y})`}
					onClick={() => console.log('clicking ' + d.name)}
					key={d.name}
				>
					<circle className="techNodes" cx={-radius} cy={radius * 2} r={radius}/>
					<text transform={'rotate(-70)'}>{d.name}</text>
				</g>
			)
		});
	}

	renderLinks(techs, nodesHash) {
    let radians = scaleLinear()
    .range([Math.PI / 2, 3 * Math.PI / 2]);

    //this can be refactor with a better graph data structure for the project data
    //right now the edges are duplicated
    let rendered = {};
    return (
    	techs.map((tech) => {
    		return tech.links.map((link) => {
    			let xshift;
    			let yshift;
    			let xdist;
    			let source = tech.name;
    			let target = link;
    			if (rendered[source] && rendered[source][target]) {
    				return;
    			} else {
            // arc will always be drawn around (0, 0)
            // shift so (0, 0) will be between source and target
		    		xshift = nodesHash[source] + (nodesHash[target] - nodesHash[source]) / 2;
		    		yshift = this.state.yfixed;

		    		// get x distance between source and target
		    		xdist = Math.abs(nodesHash[source] - nodesHash[target]);
		    		// arc.radius(xdist / 2);
		    		let points = d3.range(0, Math.ceil(xdist / 3));
		    		//use an object to remember if the edge has already been rendered
		    		rendered[source] = rendered[source] || {};
		    		rendered[source][target] = true;

		    		let arc = d3.arc()
		    			    .innerRadius(xdist / 2)
							    .outerRadius(xdist / 2 + .5)
							    .startAngle(Math.PI / 2)
							    .endAngle(Math.PI * 1.5);

		    		return (
		    			<path className="links"
		    				transform={`translate(${xshift},${yshift + this.state.radius + 2})`}
		    				d={arc()}
		    			/>
		    		)
    			}
    		})
    	})
    );
	}

	render() {
		let scaledNodes = this.linearLayout(this.props.techData);
	 	return (
			<svg className="diagram">
				<svg className="plot" style={{fill: 'white'}}>
					{this.renderNodes(scaledNodes.dataArray, this.state.radius)}
					{this.renderLinks(projectData.projectTechDetails[0].techs, scaledNodes.dataHash)}
				</svg>
			</svg>
		)
	}
}

export default ArcDiagram;
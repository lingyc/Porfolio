import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
const d3 = require('d3');
import { VelocityComponent } from 'velocity-react';

class ArcDiagram extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.width,
			margin: this.props.margin,
			pad: this.props.margin / 2,
			radius: this.props.radius,
			yfixed: this.props.margin / 2 + this.props.radius,
			techHovered: null
		}
	}

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
  	this.setState({
  		width: window.innerWidth * .8
  	})
  }

	linearLayout(nodes) {
    // used to scale node index to x position
    let xscale = scaleLinear()
        .domain([0, nodes.length - 1])
        .range([this.state.radius, this.state.width - this.state.radius - this.state.pad / 2 - this.state.width * .02]);

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
			let fill = (this.state.techHovered === d.name) ? this.props.color || 'white' : 'grey';
			return (
				<g transform={`translate(${d.x + radius}, ${d.y})`}
					key={d.name}
					style={{cursor: 'pointer', fill: fill}}
					onClick={ () => this.props.trackFocalTech(d.name) }
					onMouseEnter={ () => this.setState({techHovered: d.name}) }
					onMouseLeave={ () => this.setState({techHovered: null}) }
				>
					<circle className="techNodes" cx={-radius} cy={radius * 2} r={radius}/>
					<text transform={'rotate(-70)'}>{d.name}</text>
				</g>
			)
		});
	}

	renderLinks(techs, nodesHash) {
    //this can be refactor with a better graph data structure for the project data
    //right now the edges are duplicated
    let rendered = {};
    return (
    	<svg style={{opacity: 0}}>
	    	{techs.map((tech) => {
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
			    		yshift = this.state.yfixed + 10;

			    		// get x distance between source and target
			    		xdist = Math.abs(nodesHash[source] - nodesHash[target]);
			    		// arc.radius(xdist / 2);
			    		//use an object to remember if the edge has already been rendered
			    		rendered[source] = rendered[source] || {};
			    		rendered[source][target] = true;

			    		let arc = d3.arc()
			    			    .innerRadius(xdist / 2)
								    .outerRadius(xdist / 2 + .5)
								    .startAngle(Math.PI / 2)
								    .endAngle(Math.PI * 1.5);

			    		let fill, strokeWidth
			    		if (this.state.techHovered === source || this.state.techHovered === target) {
			    			fill = this.props.color || 'white';
			    			strokeWidth = 2;
			    		} else {
			    			fill = 'grey';
			    			strokeWidth = .5;
			    		}

			    		return (
			    			<path className="links"
  								stroke={fill}
  								strokeWidth={strokeWidth}
			    				transform={`translate(${xshift},${yshift + this.state.radius + 2})`}
			    				d={arc()}
			    			/>
			    		)
	    			}
	    		})
	    	})}
    	</svg>
    );
	}

	render() {
		let animationProps;
		if (this.props.techLinks.length > 0) {
			animationProps = {
				opacity: 1
			}
		} else {
			animationProps = {
				opacity: 0
			}
		}

		let scaledNodes = this.linearLayout(this.props.techData);
	 	return (
			<svg className="diagram">
				<svg className="plot" style={{fill: this.props.color || 'white'}}>
					{this.renderNodes(scaledNodes.dataArray, this.state.radius)}
					<VelocityComponent animation={animationProps} duration={500}>
						{this.renderLinks(this.props.techLinks, scaledNodes.dataHash)}
					</VelocityComponent>
				</svg>
			</svg>
		)
	}
}

export default ArcDiagram;
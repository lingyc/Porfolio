import React, { Component } from 'react';
import Logo from '../components/Logo';
import Nav from '../containers/Nav';
import Hero from '../containers/Hero';
import { VelocityComponent } from 'velocity-react';

class TopSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openingEnd: false
		}
	}

	openingEnd() {
		this.setState({openingEnd: true});
	}

	render() {
		let bodyAnimation;
		if (this.state.openingEnd) {
			bodyAnimation = { 
				animation: {
			    opacity: 1
				},
				duration: 250
			}
		} else {
			bodyAnimation = { 
				animation: {
			    opacity: 0
				},
				duration: 250
			}
		}

		return (
			<div>
				<div className="TopSection">
					<Logo openingEnd={() => this.openingEnd() }/>
					{/*<VelocityComponent {...bodyAnimation}>
						<Nav/>
					</VelocityComponent>*/}
				</div>
				<VelocityComponent {...bodyAnimation}>
					<Hero/>
				</VelocityComponent>
			</div>
		)
	}
}

export default TopSection;
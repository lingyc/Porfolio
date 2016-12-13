import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Menu from '../components/Menu';

class Hero extends Component {
	render() {
		return (
			<div className="hero">
				<div className="mainMsg">
					<Menu/>
					<h3>LING CHEN</h3>
					<h1>Web Developer</h1>

					<a href='https://github.com/lingyc' target="_blank">
						<Icon name='github alternate' size='big'/>
					</a>

					<a href='https://www.linkedin.com/in/ling-yu-chen-1b967312' target="_blank">
						<Icon name='linkedin' size='big'/>
					</a>

					<a href='https://angel.co/ling-yu-chen' target="_blank">
						<Icon name='angellist' size='big'/>
					</a>

					<a href='mailto:lingchen215@gmail.com' target="_blank">
						<Icon name='mail' size='big'/>
					</a>

					<a href="tel:+1-415-627-7886">
						<Icon name='mobile' size='big'/>
					</a>

					<a href='http://bit.ly/2dFCqbW' target="_blank">
						<Icon name='file text' size='big'/>
					</a>

				</div>
			</div>
		);
	}
}

export default Hero;

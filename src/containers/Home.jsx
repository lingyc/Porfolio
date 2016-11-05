import React, { Component } from 'react';

import Hero from '../containers/Hero';
import Projects from '../containers/Projects';

class Home extends Component {
	render() {
	 	return (
		 	<div>
		 		<Hero/>
		    <Projects/>
		  </div>
		)
	}
}

export default Home;
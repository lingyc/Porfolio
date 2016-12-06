import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
	return (
		<ul className="menuItems">
			<li><Link to="/top"> HOME </Link></li>
			<li><Link to="/projects"> PROJECTS </Link></li>
			{/*<li><Link to="/about"> ABOUT </Link></li>*/}
		</ul>);
}

export default Menu;
import 'core-js/fn/object/assign';
import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { applyRouterMiddleware, Router, Route, IndexRoute, browserHistory } from 'react-router'
import { useScroll } from 'react-router-scroll';

import App from './components/Main';
import Home from './containers/Home';
import Project from './containers/Project';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

render((
  <Router history={browserHistory}
  	render={
  		applyRouterMiddleware(useScroll(
  			(prevRouterProps, {location}) => {
  				if (location.pathname === 'top' || location.pathname === '/top') {
  					return [0,0];
  				} else if (location.pathname === 'projects' || location.pathname === '/projects') {
  					return [0,600];
  				} else if (location.pathname === 'about' || location.pathname === '/about') {
  					return [0,1000];
  				}
  			})
  		)
  	}>
    <Route path="/" component={App}>
      <IndexRoute component={Project}/>
      <Route path="*" component={Home}/>
        <Route path="/project/:projectId" component={Project}/>
    </Route>
  </Router>
), document.getElementById('app'))
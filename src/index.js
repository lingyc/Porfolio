import 'core-js/fn/object/assign';
import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { applyRouterMiddleware, Router, Route, IndexRoute, browserHistory } from 'react-router'
import { useScroll } from 'react-router-scroll';

import App from './components/Main';
import Home from './containers/Home';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

render((
  <Router history={browserHistory}
  	render={
  		applyRouterMiddleware(useScroll(
  			(prevRouterProps, {location}) => {
  				if (location.pathname === 'top' || location.pathname === '/top') {
  					return [0,0];
  				} else if (location.pathname === 'a' || location.pathname === '/a') {
  					return [0,200];
  				} else if (location.pathname === 'b' || location.pathname === '/b') {
  					return [0,400];
  				} else if (location.pathname === 'c' || location.pathname === '/c') {
  					return [0,800];
  				}
  			})
  		)
  	}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="*" component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'))
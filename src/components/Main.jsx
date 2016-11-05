require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import TopSection from '../containers/Top';
import Projects from '../containers/Projects';

class AppComponent extends Component {
  render() {
    return (
      <div className="index">
        <TopSection/>
        <Projects/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

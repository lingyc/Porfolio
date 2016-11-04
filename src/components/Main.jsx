require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import LogoComponent from './logo';

class AppComponent extends Component {
  render() {
    return (
      <div className="index">
        <LogoComponent/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

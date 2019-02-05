import React, { Component } from 'react';
import {SiteProvider} from './components/SiteContext';
import './styles/app.scss';
import Router from './components/Router';

class App extends Component {
  render() {
    return (
      <SiteProvider>
        <Router/>
      </SiteProvider>
    );
  }
}

export default App;

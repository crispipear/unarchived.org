import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './styles/app.scss';
import Router from './components/Router';
import {fetchSiteData} from './utils/siteUtils';

class App extends Component {
  componentDidMount(){
    fetchSiteData()
  }
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;

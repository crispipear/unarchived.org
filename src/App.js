import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './styles/app.scss';
import Router from './components/Router';
import LoadScreen from './components/LoadScreen';

import {fetchSiteData} from './utils/siteUtils';

class App extends Component {
  state ={
    ready: false
  }
  componentDidMount(){
    fetchSiteData().then(() => {
      setTimeout(() => {
        this.setState({
          ready: true
        })
      }, 2000)
    })
  }
  render() {
    return (
      <Provider store={store}>
        <LoadScreen ready={this.state.ready}/>
        <Router/>
      </Provider>
    );
  }
}

export default App;

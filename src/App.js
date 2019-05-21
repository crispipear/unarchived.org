import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './styles/app.scss';
import Router from './components/Router';
import {fetchSiteData} from './utils/siteUtils';

class App extends Component {
  state ={
    ready: false
  }
  componentDidMount(){
    fetchSiteData().then(() => {
      this.setState({
        ready: true
      })
    })
  }
  render() {
    return (
      <Provider store={store}>
        {
          this.state.ready && <Router/>
        }
      </Provider>
    );
  }
}

export default App;

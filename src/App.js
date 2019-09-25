import React, { Component } from 'react';
import './styles/app.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Router from './components/Router';
import LoadScreen from './components/LoadScreen';
import { updateView } from './actions/siteActions';

import {fetchSiteData} from './utils/siteUtils';


////////////////////////////////////////////////////////////////////
//set vh property for mobile devices based on the browser tool bar//
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
///////////////////////////////////////////////////////////////////

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
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions)
  }

  updateDimensions = () => {
    if(window.innerWidth <= 1023){
      this.props.updateView(2)
    }else{
      this.props.updateView(1)
    }
  }

  render() {
    return (
      <div>
        <LoadScreen ready={this.state.ready}/>
        {
          this.state.ready &&
          <Router/>
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateView
  }, dispatch)
}
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
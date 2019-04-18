import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/home.scss';

class Home extends Component {
  render() {
    return (
      this.props.siteContent ?
          <div className='home'>
            <div className='container'>
              <div className='content'>
                <h1>{this.props.siteContent.project_name}</h1>
                <p>{this.props.siteContent.project_tagline}</p>
              </div>
              <div className='video_link'>
                <button>watch full video</button>
              </div>
            </div>
            <div className='overlay'/>
            <video autoPlay muted loop className="home-vid" src={this.props.siteAssets.videoBg}/>
          </div>        
        :
        <div className='home'/>
    );
  }
}

const mapStateToProps = state => ({
  siteContent: state.site.siteContent,
  siteAssets: state.site.siteAssets
})

export default connect(mapStateToProps, null)(Home)
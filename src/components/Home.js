import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/home.scss';
import {toggleVideo} from '../actions/siteActions';

class Home extends Component {
  showVideo = () => {
    this.props.toggleVideo(true)
    this.refs.vidBg.pause()
  }
  componentWillReceiveProps = nextProps => {
    if(nextProps.video == true){
      this.refs.vidBg.play()
    }
  }
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
                <button className='white' onClick={this.showVideo}>watch full video</button>
              </div>
            </div>
            <div className='overlay'/>
            <video autoPlay muted loop playsInline className="home-vid" ref="vidBg" src={this.props.siteAssets.videoBg}/>
          </div>        
        :
        <div className='home'/>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleVideo
  }, dispatch)
}
const mapStateToProps = state => ({
  siteContent: state.site.siteContent,
  siteAssets: state.site.siteAssets,
  video: state.site.video
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
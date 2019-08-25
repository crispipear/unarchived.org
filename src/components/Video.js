import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CLOSE from '../assets/close.png';
import {toggleVideo} from '../actions/siteActions';

class Video extends Component {
    state = {}
    closeVideo = () =>{
        this.refs.video.pause();
        this.refs.video.currentTime = 0;
        this.props.toggleVideo(false)
    }
    render() {
        return (
            <div className='video'>
                <div className='video-close' onClick={this.closeVideo}>
                    <img src={CLOSE}/>
                </div>
                <video 
                ref="video"
                controls controlsList="nodownload" disablepictureinpicture="true"
                src={this.props.siteAssets.videoBg}/>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleVideo
    }, dispatch)
}
const mapStateToProps = state => ({
  siteAssets: state.site.siteAssets
})
export default connect(mapStateToProps, mapDispatchToProps)(Video);
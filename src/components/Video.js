import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CLOSE from '../assets/close.png';
import {toggleVideo} from '../actions/siteActions';

class Video extends Component {
    state = {}
    closeVideo = () =>{
        this.props.toggleVideo(false)
        if (!this.props.siteContent.home_full_video){
            this.refs.video.pause();
            this.refs.video.currentTime = 0;
        }
    }
    render() {
        return (
            <div className='video'>
                <div className='video-close' onClick={this.closeVideo}>
                    <img src={CLOSE}/>
                </div>
                {
                    this.props.siteContent.home_full_video ?
                    <div className='video-container'>
                        <iframe src={this.props.siteContent.home_full_video} frameBorder="0" 
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                    </div>
                    :
                    <video 
                        ref="video"
                        controls controlsList="nodownload" disablepictureinpicture="true"
                        src={this.props.siteAssets.videoBg}
                    />
                }
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
  siteAssets: state.site.siteAssets,
  siteContent: state.site.siteContent
})
export default connect(mapStateToProps, mapDispatchToProps)(Video);
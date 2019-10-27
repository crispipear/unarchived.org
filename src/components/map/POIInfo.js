import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ReactComponent as BACK } from '../../assets/back.svg';
import {togglePOIInfo} from '../../actions/mapActions';
import {Link} from 'react-router-dom';
import Gallery from './POIGallery';

import '../../styles/poi.scss';
class POIInfo extends Component {
    state = {
        index: 0,
        modal: false
    }
    updateIndex = index => this.setState({index})
    toggleModal = () => this.setState({modal: !this.state.modal})

    render() {
        const poi = this.props.poiData[this.props.poiIndex]
        return (
            <div className='poiInfo'>
                <Link 
                    to={`/explore/${this.props.curDistrict}`}
                    className='back-button'>
                    <BACK />
                </Link>
                <div className = 'poiInfo-modal' 
                    onClick={this.toggleModal}
                    style={{
                        opacity: this.state.modal ? 1 : 0,
                        pointerEvents: this.state.modal ? 'all' : 'none'
                    }}
                >
                    <img src={poi.images[this.state.index]}/>
                </div>
                <div className='poiInfo-left'>
                    <h1>{poi.poiName}</h1>
                    {
                        this.props.view == 2 && poi.videoUrl &&
                        <div className='poiInfo-video'>
                            <iframe src={poi.videoUrl}
                            frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                        </div>
                    }
                    <div className='poiInfo-content'>
                        <p>{poi.summary}</p>
                    </div>
                    {
                        this.props.view == 2 &&
                        <Gallery images={poi.images} index={this.state.index} updateIndex={this.updateIndex} toggleModal={this.toggleModal}/>
                    }
                    <div className='poiInfo-content'>
                        {documentToReactComponents(poi.description)}                     
                    </div>
                </div>
                {
                    this.props.view == 1 &&
                    <div className='poiInfo-right'>
                    {
                        poi.videoUrl &&
                        <div className='poiInfo-video'>
                            <iframe src={poi.videoUrl}
                            frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                        </div>
                    }
                    <Gallery 
                        fullHeight={!poi.videoUrl}
                        images={poi.images} index={this.state.index} updateIndex={this.updateIndex} toggleModal={this.toggleModal}/>
                    </div>
                }
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({togglePOIInfo}, dispatch)
}
const mapStateToProps = state => ({
    curDistrict: state.map.curDistrict,
    poiData: state.site.poiData[state.map.curDistrict].poi,
    poiIndex: state.map.index,
    view: state.site.view
})
export default connect(mapStateToProps, mapDispatchToProps)(POIInfo);
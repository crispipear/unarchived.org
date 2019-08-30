import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ReactComponent as BACK } from '../../assets/back.svg';
import {togglePOIInfo} from '../../actions/mapActions';
import {Link} from 'react-router-dom';

import '../../styles/poi.scss';
class POIInfo extends Component {
    selectPoi = index => this.setState({selected: index})
    componentDidMount(){
        console.log(this.props.poiData[this.props.poiIndex])
    }
    render() {
        const poi = this.props.poiData[this.props.poiIndex]
        return (
            <div className='poiInfo'>
                <Link 
                    to={`/explore/${this.props.curDistrict}`}
                    className='back-button'>
                    <BACK />
                </Link>
                {
                    poi.videoUrl &&
                    <div style={{position: 'relative', paddingTop: '56.25%', marginTop: '10%'}}>
                        <iframe src={poi.videoUrl}
                        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                    </div>
                }
                <h1>{poi.poiName}</h1>
                <div className='poiInfo-content'>
                    {documentToReactComponents(poi.description)}                     
                </div>
                <div className='poiInfo-images'>
                    {
                        poi.images.map((img, key) =>
                            <img src={img} key={key}/>
                        )
                    }
                </div>
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
    poiIndex: state.map.index
})
export default connect(mapStateToProps, mapDispatchToProps)(POIInfo);
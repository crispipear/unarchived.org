import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/poi.scss';
import GoogleMap from './GoogleMap';
import { ReactComponent as BACK } from '../../assets/back.svg';
import {updatePOIIndex, togglePOIInfo} from '../../actions/mapActions';
import POIInfo from './POIInfo';

class POIView extends Component {
    render() {
        let fPoi = this.props.poiData[this.props.poiIndex]
        return (
            this.props.poiInfo?
            <POIInfo/>
            :
            <div className='poi'>
                <div className='left'>
                    <div className='back-button' onClick={() => this.props.setPoiView(false)}>
                        <BACK />
                    </div>
                    <div className='poi-featured'>
                        <div className='featured-content'>
                            <h1>
                                {fPoi.poiName}
                            </h1>
                            <p>
                                {fPoi.summary}
                            </p>
                        </div>
                        <div className='featured-image' style={{backgroundImage: `url(${fPoi.posterImage ? fPoi.posterImage : fPoi.images[0]})`}}/>
                        <button onClick={() => this.props.togglePOIInfo(true)} style={{padding: '2% 3.5%'}}>SEE MORE</button>
                    </div>
                    <div className='poi-list'>
                        {
                            this.props.poiData.map((poi, key) =>
                                <div className='poi-list-item' 
                                    key={key}
                                     onClick = {() => this.props.updatePOIIndex(key)}
                                >
                                    <div className='poi-list-item-bg'
                                        style={{
                                            backgroundImage: `url(${poi.posterImage ? poi.posterImage : poi.images[0]})`
                                        }}
                                    />
                                    <div className='poi-list-item-overlay'
                                         style={{
                                             opacity: this.props.poiIndex == key ? 0.6 : 0
                                         }}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
                <GoogleMap />
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({updatePOIIndex, togglePOIInfo}, dispatch)
}
const mapStateToProps = state => ({
    poiData: state.site.poiData[state.map.curDistrict].poi,
    poiIndex: state.map.index,
    poiInfo: state.map.info
})
export default connect(mapStateToProps, mapDispatchToProps)(POIView);
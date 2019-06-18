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
                        <img src={this.props.poiData[this.props.poiIndex].images[0]}/>
                        <h1>
                            {this.props.poiData[this.props.poiIndex].poiName}
                        </h1>
                        <p>
                            {this.props.poiData[this.props.poiIndex].summary}
                        </p>
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
                                            backgroundImage: `url(${poi.images[0]})`
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
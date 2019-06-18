import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ReactComponent as BACK } from '../../assets/back.svg';
import {togglePOIInfo} from '../../actions/mapActions';

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
                <div className='back-button' onClick={() => this.props.togglePOIInfo(false)}>
                    <BACK />
                </div>
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
    poiData: state.site.poiData[state.map.curDistrict].poi,
    poiIndex: state.map.index
})
export default connect(mapStateToProps, mapDispatchToProps)(POIInfo);
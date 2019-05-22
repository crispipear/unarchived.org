import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/poi.scss';
import GoogleMap from './GoogleMap';
import { ReactComponent as BACK } from '../../assets/back.svg';
class POIView extends Component {
    state = {
        selected: 0
    }
    
    selectPoi = index => this.setState({selected: index})

    render() {
        return (
            <div className='poi'>
                <div className='left'>
                    <div className='back-button' onClick={() => this.props.setPoiView(false)}>
                        <BACK />
                    </div>
                    <div className='poi-featured'>
                        <img src={this.props.poiData[this.state.selected].images[0]}/>
                        <h1>
                            {this.props.poiData[this.state.selected].poiName}
                        </h1>
                        <p>
                            {this.props.poiData[this.state.selected].summary}
                        </p>
                    </div>
                    <div className='poi-list'>
                        {
                            this.props.poiData.map((poi, key) =>
                                <div className='poi-list-item' 
                                    key={key}
                                     onClick = {() => this.selectPoi(key)}
                                >
                                    <div className='poi-list-item-bg'
                                        style={{
                                            backgroundImage: `url(${poi.images[0]})`
                                        }}
                                    />
                                    <div className='poi-list-item-overlay'
                                         style={{
                                             opacity: this.state.selected == key ? 0.75 : 0
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
    return bindActionCreators({}, dispatch)
}
const mapStateToProps = state => ({
    poiData: state.site.poiData[state.map.curDistrict].poi
})
export default connect(mapStateToProps, mapDispatchToProps)(POIView);
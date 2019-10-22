import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/poi.scss';
import GoogleMap from './GoogleMap';
import { ReactComponent as BACK } from '../../assets/back.svg';
import {updatePOIIndex, togglePOIInfo} from '../../actions/mapActions';
import POIInfo from './POIInfo';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

class POIView extends Component {
    constructor(props){
        super(props)
        this.poiRefs = []
        this.props.poiData.map(p => {
            this.poiRefs.push(React.createRef())
        })
        this.poiListRef = React.createRef()
    }
    componentDidMount(){
        if(this.props.poiName !== "" && this.props.poiName !== null){
            console.log(this.props.poiName)
            this.props.poiData.map((p, key)=> {
                if(p.poiName.replace(/[|&;$%@"<>()+,.']/g, "").replace(/\s+/g, '-').toLowerCase() == this.props.poiName)
                {
                    this.props.updatePOIIndex(key)
                    this.props.togglePOIInfo(true)
                }
            })
        }
    }

    componentWillReceiveProps(nextProps){
       if((nextProps.poiIndex !== this.props.poiIndex) && this.props.view == 2){
           let poiPos = ReactDOM.findDOMNode(this.poiRefs[nextProps.poiIndex].current).offsetTop
           this.poiListRef.current.scrollTo({ top: poiPos-(window.innerHeight/2.05), behavior: 'smooth' })
       }
    }


    render() {
        let fPoi = this.props.poiData[this.props.poiIndex]
        return (
            this.props.poiInfo?
            <POIInfo/>
            :
            <div className='poi'>
                <div className='left'>
                    <Link className='back-button' to='/explore'>
                        <BACK />
                    </Link>
                    {
                        this.props.view == 1 &&
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
                            <Link 
                                to={`/explore/${this.props.curDistrict}/${fPoi.poiName.replace(/[|&;$%@"<>()+,.']/g, "").replace(/\s+/g, '-').toLowerCase()}`}>
                                <button>MORE ABOUT THIS SITE</button>
                            </Link>
                        </div>
                    }
                    {<div className='poi-list' ref={this.poiListRef}>
                        {
                            this.props.view == 2 &&
                            <p style={{padding: '0px 24px', fontSize: '14px', marginBottom: '16px'}}>click on the poi to see more details</p>
                        }
                        {
                            this.props.poiData.map((poi, key) =>
                                this.props.view == 1 ?
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
                                :
                                <Link className='poi-list-item' 
                                    style={{
                                        backgroundColor: this.props.poiIndex == key ? '#f2f8ff' : 'transparent'
                                    }}
                                    key={key}
                                    ref={this.poiRefs[key]}
                                    to={`/explore/${this.props.curDistrict}/${poi.poiName.replace(/[|&;$%@"<>()+,.']/g, "").replace(/\s+/g, '-').toLowerCase()}`}
                                     onClick = {() => {this.props.updatePOIIndex(key); window.scrollTo(0,0)}}
                                >
                                    <div className='poi-list-item-bg'
                                        style={{
                                            backgroundImage: `url(${poi.posterImage ? poi.posterImage : poi.images[0]})`
                                        }}
                                    />
                                    <div className='poi-list-item-info'>
                                        <h1>{poi.poiName}</h1>
                                        <p>{poi.summary}</p>
                                    </div>
                                </Link>
                            )
                        }
                    </div>}
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
    curDistrict: state.map.curDistrict,
    poiData: state.site.poiData[state.map.curDistrict].poi,
    poiIndex: state.map.index,
    poiInfo: state.map.info,
    view: state.site.view
})
export default connect(mapStateToProps, mapDispatchToProps)(POIView);
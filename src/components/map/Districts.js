import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/districts.scss';
import {Link} from 'react-router-dom'

class Districts extends Component {
    render() {
        return (
            <div className='districts' style={{backgroundImage: `url(${this.props.poiData.image})`}}>
                <div className='overlay'/>
                <div className='content'>
                    <div className='left'>
                      <h1>{this.props.poiData.districtName}</h1>
                        <Link to={`/explore/${this.props.poiData.districtName.replace(/[|&;$%@"<>()+,.']/g, "").replace(/\s+/g, '-').toLowerCase()}`}>
                            <button className='white'>EXPLORE SELECTED SITES</button>
                        </Link>
                    </div>
                    <div className='right'>
                    <p>{this.props.poiData.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
const mapStateToProps = state => ({
    poiData: state.site.poiData[state.map.curDistrict]
})
export default connect(mapStateToProps, mapDispatchToProps)(Districts);
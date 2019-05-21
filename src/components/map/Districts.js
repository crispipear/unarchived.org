import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/districts.scss';

class Districts extends Component {
    state = {}
    componentDidMount(){

    }
    render() {
        return (
            <div className='districts' style={{backgroundImage: `url(${this.props.poiData.image})`}}>
                <div className='overlay'/>
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
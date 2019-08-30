import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/loadscreen.scss';

class LoadScreen extends Component {
    state = {}
    render() {
        return (
            <div className="load-screen" style={{opacity: this.props.ready ? 0 : 1}}>
                    <h1>u</h1>
                    <h1>n</h1>
                    <h1 className="bold">A</h1>
                    <h1 className="bold">R</h1>
                    <h1>c</h1>
                    <h1>h</h1>
                    <h1>i</h1>
                    <h1>v</h1>
                    <h1>e</h1>
                    <h1>d</h1>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(LoadScreen);
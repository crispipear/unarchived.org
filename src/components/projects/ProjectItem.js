import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

class ProjectItem extends Component {
    state = {}
    render() {
        const proj = this.props.proj
        return (
            <Link className='project-item'
            to={`/projects/${proj.name.replace(/[|&;$%@"<>()+,.']/g, "").replace(/\s+/g, '-').toLowerCase()}`}
            >              
                <h1>{proj.name}</h1>
                <div className='bg-image' style={{
                    backgroundImage: `url(${proj.titleImage})`
                }}/>
            </Link>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import ImageFilter from 'react-image-filter';

class ProjectItem extends Component {
    state = {}
    render() {
        const proj = this.props.proj
        return (
            <Link className='project-item'
            to={`/projects/${proj.name.replace(/[|&;$%@"<>()+,.']/g, "").replace(/\s+/g, '-').toLowerCase()}`}
            >              
                    <h1>{proj.name}</h1>
                    <ImageFilter
                        image={proj.titleImage}
                        className='project-item-bg'
                        filter={ 'duotone' } // see docs beneath
                        colorOne={ [58, 111, 211] }
                        colorTwo={ [242, 248, 255] }
                    />
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
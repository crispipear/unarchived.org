import React, { Component } from 'react';
import {connect} from 'react-redux';
import "../styles/projects.scss";

class Projects extends Component {
  render() {
    return (
      <div className='projects container'>
        <div className='left'>
            <h1>{this.props.siteContent.proj_title}</h1>
            <p>{this.props.siteContent.proj_des}</p>
        </div>
        <div className='right'>
            {
              this.props.projects.map((proj, key) => 
                <div className='project-item'>
                   <div className='project-item-overlay'/>
                   <h1>{proj.name}</h1>
                   <div  className='project-item-bg'
                    style={{backgroundImage: `url(${proj.titleImage})`}}/>
                </div>
              )
            }
        </div>  
      </div>
    );
  }
}

const mapStateToProps = state => ({
  siteContent: state.site.siteContent,
  projects: state.site.projects
})

export default connect(mapStateToProps, null)(Projects)
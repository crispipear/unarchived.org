import React, { Component } from 'react';
import {connect} from 'react-redux';
import "../styles/projects.scss";
import ProjectItem from './projects/ProjectItem';

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
                <ProjectItem key={key} proj={proj}/>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ReactComponent as LEFT} from '../assets/left.svg';
import {ReactComponent as RIGHT} from '../assets/right.svg';
import {ReactComponent as BACK} from '../assets/back.svg';
import {Link} from 'react-router-dom'

class ProjectView extends Component {
    state = {
        project: {},
        index: 0
    }
    componentDidMount(){
        let projectName = this.props.match.params.title
        let projectItem = this.props.projects.find(
            p => 
            p.name.replace(/[|&;$%@"<>()+,.']/g, "").replace(/\s+/g, '-').toLowerCase() == projectName
        )
        let project = {images: [], content: [], name: projectItem.name}
        projectItem.images && projectItem.images.map(image => {
            let url = `https:${image.fields.file.url}`
            project.images.push(url)
        })
        projectItem.description && projectItem.description.content.map(c => {
            if (c.nodeType == 'paragraph' && c.content[0].value.length > 0){
                project.content.push(c.content[0].value)
            }
        })
        this.setState({
            project
        }, ()=>{console.log(this.state.project)})
    }
    handleClick = index =>{
        this.setState({
            index: index < 0 ? 0 : index > this.state.project.content.length-1 ? this.state.project.content-1 : index
        })
    }
    render() {
        return (
            (this.state.project.content && this.state.project.images) ?
            <div className='projects container'>
            <div className='back-button'>
                <Link to="/projects"><BACK/></Link>
            </div>
            <div className='left-project-view'>
                <h1>{this.state.project.name}</h1>
                <p>
                    {this.state.project.content[this.state.index]}
                </p>
                {
                    this.state.project.content.length > 1 &&
                    <div className='project-view-pagination'>
                        <LEFT onClick={() => this.handleClick(this.state.index-1)}/>
                        {
                            this.state.project.content.map((c, key) => 
                                <div key={key} className='circle'
                                     onClick={() => this.handleClick(key)}
                                     style={{
                                         background: this.state.index == key ? '#3A6FD3' : '#DCE2EA'
                                     }}
                                />
                            )
                        }
                        <RIGHT onClick={() => this.handleClick(this.state.index+1)}/>
                    </div>
                }
            </div>
            <div className='right-project-view' 
                style={{
                    backgroundImage: `url(${this.state.project.images[this.state.index]})`
                }}
            />
          </div>
          :
          <div className='project-view container'/>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
const mapStateToProps = state => ({
    siteContent: state.site.siteContent,
    projects: state.site.projects
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
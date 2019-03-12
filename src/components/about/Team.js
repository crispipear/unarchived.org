import React, { Component } from 'react';
import {connect} from 'react-redux';

class Team extends Component {
  render() {
    return (
      <div className='about-team'>
        {
            this.props.members.map((m, key) =>
                <TeamMember key={key} info={m}/>
            )
        }
      </div>  
    );
  }
}

class TeamMember extends Component {
    state = {
      imgSrc: ""
    }
    componentDidMount(){
      this.setState({
        imgSrc: this.props.info.portrait
      })
    }
    render(){
        return(
            <div className='member'>
                <div className='left'>
                    <img className='member-photo' src={this.state.imgSrc}
                      onMouseOver={() => this.setState({imgSrc: this.props.info.portraitAlt})}
                      onMouseOut={() => this.setState({imgSrc: this.props.info.portrait})}
                    />
                </div>
                <div className='right'>
                    <h1>{this.props.info.name}</h1>
                    <p className='role'>{this.props.info.role}</p>
                    <p className='desc'>{this.props.info.description}</p>
                    <div className='member-links'>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.info.website}>website</a>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.info.linkedin}>linkedin</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  siteContent: state.site.siteContent,
  members: state.site.members
})

export default connect(mapStateToProps, null)(Team)
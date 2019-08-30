import React, { Component } from 'react';
import {connect} from 'react-redux';
import "../styles/team.scss";
import {ReactComponent as LINKEDIN_ICON} from '../assets/linkedin.svg';
import {ReactComponent as WEB_ICON} from '../assets/web.svg';

class Team extends Component {
  render() {
    return (
      <div className='team container'>
        <div className='left'>
            <h1>MEET THE TEAM</h1>
            <h3>{this.props.siteContent.team_title}</h3>
            <p>{this.props.siteContent.team_desc}</p>
        </div>
        <div className='right'>
          {
              this.props.members.map((m, key) =>
                  <TeamMember key={key} info={m}/>
              )
          }
        </div>  
      </div>
    );
  }
}

class TeamMember extends Component {
    state = {
      imgAlt: false
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className='member'>
                <div className='member-photo'
                  style={{
                    backgroundImage: `url(${this.props.info.portrait})`
                  }}
                  onMouseOver={() => this.setState({imgAlt: true})}
                  onMouseOut={() => this.setState({imgAlt: false})}
                >
                  <div className='member-photo-alt'
                    style={{
                      opacity: this.state.imgAlt ? 1 :0,
                      backgroundImage: `url(${this.props.info.portraitAlt})`
                    }}
                  />
                </div>
                <div className='member-info-container'>
                    <div className='member-info'>
                      <h1>{this.props.info.name}</h1>
                      <p className='role' style={{color: '#1c1c1c', opacity: 0.8}}>{this.props.info.role}</p>
                      {
                        this.props.info.duration &&
                        <p className='role'>({this.props.info.duration})</p>
                      }
                    </div>
                    <div className='member-links'>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.info.website}>
                          <WEB_ICON/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.info.linkedin}>
                          <LINKEDIN_ICON/>
                        </a>
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
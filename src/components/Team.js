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
                {/* <img className='member-photo' src={this.state.imgSrc}
                  onMouseOver={() => this.setState({imgSrc: this.props.info.portraitAlt})}
                  onMouseOut={() => this.setState({imgSrc: this.props.info.portrait})}
                /> */}
                <div className='member-photo'
                  style={{
                    backgroundImage: `url(${this.state.imgSrc})`
                  }}
                  onMouseOver={() => this.setState({imgSrc: this.props.info.portraitAlt})}
                  onMouseOut={() => this.setState({imgSrc: this.props.info.portrait})}
                />
                <div className='member-info-container'>
                    <div className='member-info'>
                      <h1>{this.props.info.name}</h1>
                      <p className='role'>{this.props.info.role}</p>
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
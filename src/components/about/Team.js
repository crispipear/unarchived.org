import React, { Component } from 'react';
import {SiteConsumer} from '../SiteContext';

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
    render(){
        return(
            <div className='member'>
                <div className='left'>
                    <img className='member-photo' src={this.props.info.picture} />
                </div>
                <div className='right'>
                    <h1>{this.props.info.name}</h1>
                    <p className='role'>{this.props.info.role}</p>
                    <p className='desc'>{this.props.info.description}</p>
                    <div className='member-links'>
                        <a target="_blank" href={this.props.info.website}>website</a>
                        <a target="_blank" href={this.props.info.linkedin}>linkedin</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default () => (
  <SiteConsumer>
    {({members, siteContent}) => (
      <Team members={members} siteContent={siteContent}/>
    )}
  </SiteConsumer>
)

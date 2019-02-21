import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import Project from './about/Project';
import Inspiration from './about/Inspiration';
import Team from './about/Team';
import '../styles/about.scss';

class About extends Component {
  render() {
    return (
      <div className='about container'>
        <div className='about-block'>
          <h1 className='mtt'>About the project</h1>
          <h2>{this.props.siteContent.about_title}</h2>
          <p>{this.props.siteContent.about_short_desc}</p>
        </div>
        <div className='about-banner' style={{backgroundImage: `url(${this.props.siteAssets.lp_bg})`}}/>
        <Project/>
        <Inspiration/>
        <div className='about-block'>
          <h1 className='mtt'>Meet the team</h1>
          <h2>{this.props.siteContent.about_team_title}</h2>
          <p>{this.props.siteContent.about_team_desc}</p>
        </div>
        <Team/>
      </div>  
    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent, siteAssets}) => (
      <About siteContent={siteContent} siteAssets={siteAssets}/>
    )}
  </SiteConsumer>
)

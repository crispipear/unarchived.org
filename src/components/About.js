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
        <Project/>
        <Inspiration/>
        <Team/>
      </div>  
    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent}) => (
      <About siteContent={siteContent}/>
    )}
  </SiteConsumer>
)

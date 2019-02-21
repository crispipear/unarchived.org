import React, { Component } from 'react';
import {SiteConsumer} from '../SiteContext';

class Inspiration extends Component {
  render() {
    return (
      <div className='about-inspiration'>
        <div className='info'>
            <h2>{this.props.siteContent.about_ins_title}</h2>
            <p>{this.props.siteContent.about_ins_desc}</p>
        </div>
        <div className='image' style={{backgroundImage:  `url(${this.props.siteAssets.about_inspiration}`}}/>
      </div>  
    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteAssets, siteContent}) => (
      <Inspiration siteAssets={siteAssets} siteContent={siteContent}/>
    )}
  </SiteConsumer>
)

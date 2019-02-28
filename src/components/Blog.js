import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import BlogItem from './blog/BlogItem';
import '../styles/blog.scss';

class Blog extends Component {
  _handleClick = () => {
    alert("feature still under development")
  }
  
  render() {
    return (
      <div className='blog container' onClick={this._handleClick}>
        {
          this.props.blogs.map((b, key) => 
            <BlogItem key={key} blog={b}/>
          )
        }
      </div>  
    );
  }
}

export default () => (
  <SiteConsumer>
    {({blogs}) => (
      <Blog blogs={blogs}/>
    )}
  </SiteConsumer>
)

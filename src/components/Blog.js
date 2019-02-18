import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import BlogItem from './blog/BlogItem';
import '../styles/blog.scss';

class Blog extends Component {
  render() {
    return (
      <div className='blog container'>
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

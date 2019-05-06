import React, { Component } from 'react';
import {connect} from 'react-redux';
import BlogItem from './blog/BlogItem';
import FeaturedBlog from './blog/FeaturedBlog';
import '../styles/blog.scss';

class Blog extends Component {
  render() {
    return (
      <div className='blog container'>
        <div className='left'>
          {
            this.props.blogs[0] &&
            <FeaturedBlog blog={this.props.blogs[0]} path={`/blog/${this.props.blogs[0].title.replace(/[|&;$%@"<>()+,.']/g, "").replace(/\s+/g, '-').toLowerCase()}`}/>
          }
        </div>
        <div className='right'>
          {
            this.props.blogs.map((blog, key) => key !== 0 &&
              <BlogItem key={key} blog={blog} path={`/blog/${blog.title.replace(/[|&;$%@"<>()+,.']/g, "").replace(/\s+/g, '-').toLowerCase()}`}/>
            )
          }
        </div>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.site.blogs
})

export default connect(mapStateToProps, null)(Blog)
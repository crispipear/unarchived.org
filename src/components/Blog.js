import React, { Component } from 'react';
import {connect} from 'react-redux';
import BlogItem from './blog/BlogItem';
import BlogView from './blog/BlogView';
import '../styles/blog.scss';

class Blog extends Component {

  state = {
    blogView: false,
    blog: {},
  }

  openBlog = blog => {
    this.setState({
      blogView: true,
      blog
    })
  }

  closeBlog = () => {
    this.setState({
      blogView: false
    })
  }
  
  render() {
    console.log(this.props.blogs[0])
    return (
      <div className='blog container'>
        <div className='left'>
          {
            this.props.blogs[0] &&
            <div className='blog-featured-item' style={{backgroundImage: `url(${this.props.blogs[0].img})`}}>
              <div className='blog-featured-content'>
                <div className='author'>
                  <div className='image' 
                            style={{
                              backgroundImage: `url(${this.props.blogs[0].author.portrait})`
                            }}
                        />
                  <div className='info'>
                    <span>{this.props.blogs[0].author.name}</span>
                    <span>{this.props.blogs[0].date}</span>
                  </div>
                </div>
                <div className='content'>
                  <h1>{this.props.blogs[0].title}</h1>
                  <p>{this.props.blogs[0].intro}</p>
                </div>
                <div className='action'>
                  <button>read more</button>
                </div>
              </div>
            </div>
          }
        </div>
        <div className='right'>
          {
            this.props.blogs.map((blog, key) => key !== 0 &&
              <BlogItem key={key} blog={blog}/>
            )
          }
        </div>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.site.blogs,
  members: state.site.members
})

export default connect(mapStateToProps, null)(Blog)
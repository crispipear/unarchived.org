import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import BlogItem from './blog/BlogItem';
import BlogView from './blog/BlogView';
import '../styles/blog.scss';

class Blog extends Component {

  state = {
    blogView: false,
    blog: {},
    author: {}
  }

  openBlog = blog => {
    let author = this._getAuthors(blog.author)
    this.setState({
      blogView: true,
      blog,
      author
    })
  }

  _getAuthors = data => {
    let authors = []
    let blogAuthor = data.split(",")
    blogAuthor.map(a => {
      let member = this.props.members.find(m => m.name == a)
      authors.push({
        name: member.name,
        link: member.website,
        role: member.role,
        picture: member.portrait
      })
    })
    return authors
  }

  closeBlog = () => {
    this.setState({
      blogView: false
    })
  }
  
  render() {
    return (
      <div className='blog container'>
        {
          this.state.blogView
          ?
          <BlogView closeBlog={this.closeBlog} author={this.state.author} blog={this.state.blog}/>
          :
          this.props.blogs.map((b, key) => 
            <BlogItem openBlog={this.openBlog} key={key} blog={b}/>
          )
        }
      </div>  
    );
  }
}

export default () => (
  <SiteConsumer>
    {({blogs, members}) => (
      <Blog blogs={blogs} members={members}/>
    )}
  </SiteConsumer>
)

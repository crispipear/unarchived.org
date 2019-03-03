import React from 'react';

const BlogView = ({blog, author, closeBlog}) => (
    <div className='blogview'>
    <div className="left">
        <span className="backButton" onClick={closeBlog}>&larr;</span>
        <div className="author">
            <div style={{backgroundImage: `url(${author.picture})`}}/>
            <h1>{author.name}</h1>
            <h3>{author.role}</h3>
        </div>
    </div>
    <div className="right">
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
    </div>
  </div>  
)

export default BlogView;
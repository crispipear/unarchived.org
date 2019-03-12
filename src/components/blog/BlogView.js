import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogView = ({blog, author, closeBlog}) => (
    <div className='blogview'>
    <div className="left">
        <div className="backButton" onClick={closeBlog}><span>&larr; back</span></div>
        {
            author.map((a, key) =>
            <div key={key} className="author">
                <div style={{backgroundImage: `url(${a.picture})`}}/>
                <a href={a.link} target="_blank" rel="noopener noreferrer">{a.name}</a>
                <h3>{a.role}</h3>
            </div>
            )
        }
    </div>
    <div className="right">
        <div className="image" style={{backgroundImage: `url(${blog.img})`}}/>
        <h1>{blog.title}</h1>
        <h3 className="time">created at {blog.date} {blog.time}</h3>
        {
            documentToReactComponents(blog.content)
        }
    </div>
  </div>  
)

export default BlogView;
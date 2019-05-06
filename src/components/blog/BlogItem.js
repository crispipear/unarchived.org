import React from 'react'
import {Link} from 'react-router-dom'
const BlogItem = ({ blog, path }) => (
    <Link to={path} className='blog-item'>
            <div className='top'>
                <h1>{blog.title}</h1>
                <div className='blog-image'
                    style={{
                        backgroundImage: `url(${blog.img})`
                    }}
                />
            </div>
            <div className='bottom'>
                <p>
                    {blog.intro}
                </p>
                <div className='blog-info'>
                    <div className='blog-author-container'>
                        <div className='blog-author-image'
                            style={{
                                backgroundImage: `url(${blog.author.portrait})`
                            }}
                        />
                        <span>{blog.author.name}</span>
                    </div>
                    <span>
                        {blog.date}
                    </span>
                </div>
            </div>
    </Link>
)


export default BlogItem
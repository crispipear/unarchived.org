import React from 'react'
import { Link } from 'react-router-dom'
const FeaturedBlog = ({ blog, path }) => (
    <div className='blog-featured-item' style={{ backgroundImage: `url(${blog.img})` }}>
        <div className='blog-featured-content'>
            <div className='author'>
                {/* <div className='image'
                    style={{
                        backgroundImage: `url(${blog.author.portrait})`
                    }}
                /> */}
                <div className='info'>
                    {/* <span>{blog.author.name}</span> */}
                    <span>{blog.date}</span>
                </div>
            </div>
            <div className='content'>
                <h1>{blog.title}</h1>
                <p>{blog.intro}</p>
            </div>
            <div className='action'>
                <Link to={path} className='button'>read more</Link>
            </div>
        </div>
    </div>
)


export default FeaturedBlog
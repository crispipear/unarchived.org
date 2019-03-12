import React from 'react'

const BlogItem = ({blog, openBlog}) => (
    <div className="blog_item" onClick={() => openBlog(blog)}>
        <div className="blog_item_img" style={{backgroundImage: `url(${blog.img})`}}/>
        <div className="blog_item_content">
            <h1>
                {blog.title}
            </h1>
            <div>
               {
                   blog.author.map((a, key) =>
                        <h3>{a}{key != blog.author.length - 1 && ", "}</h3>
                    )
               }
            </div>
            <p>
                {blog.intro}
            </p>
            <span>
                {blog.date} {blog.time}
            </span>
        </div>
    </div>
)


export default BlogItem
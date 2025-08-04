import React from 'react'
import BlogHeader from '../Blogs/BlogHeader'
import BlogGrid from '../Blogs/blogPosts'
import Pagination from '../Blogs/Pagination'


export default function Blogs() {
  return (
    <div>
      
      <BlogHeader/>
      <BlogGrid/>
      <Pagination/>
        
    </div>
  )
}

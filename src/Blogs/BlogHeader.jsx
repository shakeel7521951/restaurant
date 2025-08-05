import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogHeader() {
    return (
        <div className=' flex justify-between items-center'>
            <div className=' p-3'>
                <h1 className=' text-xl sm:text-4xl  font-semibold'>Blog</h1>
                <div className=' w-full flex text-xl font-serif  sm:w-4/12 py-3'>
                    <Link to='/'><span className='flex '>  Home <span>/</span></span></Link>
                    <span className=' px-2 text-red-600'>Blog</span>
                </div>
            </div>
            <div className=' w-full sm:w-6/12 hidden sm:flex h-[400px] bg-red-500'>
                <img src="blogImage/delivery.jpg" alt="missing " className=' h-full w-full' />
            </div>
        </div>
    )
}

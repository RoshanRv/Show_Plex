import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className='h-[80vh] max-w-screen-lg mx-auto text-center justify-center flex items-center'>
                <Link to='/'><h1  className='text-[72px] text-white hover:text-red-700 w-full cursor-pointer'>404  ERROR  NOT  FOUND</h1 ></Link>
            </div>
            
        </div>
    )
}

export default NotFound

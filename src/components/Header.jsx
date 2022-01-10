import React ,{useContext, useState, useRef}from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// Images
import show_plex from '../images/show-plex_logo.png'
import tmdb_logo from '../images/tmdb_logo.svg'
// Components
import { Context } from '../context'
import Logout from './Logout'


const Header = () => {

    const [user,setUser]=useContext(Context)
    const [visible,setVisible]=useState(false)


    useEffect(()=>{
        const login=JSON.parse(localStorage.getItem('loginid'))

        if(login){
            setUser(login)
        }
    },[])


    
    
    return (
        <header  className="bg-gray-900/50 shadow-lg border-b-1 border-black " >
            <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4">
                <Link to='/'><img src={show_plex} alt="Show_Plex_Logo" className="w-1/3  py-3"/></Link>
                

                {user?<h1 className='px-4 text-white font-black font-display text-xl md:text-3xl cursor-pointer select-none'onClick={()=>setVisible(!visible)}><Logout vis={visible}/>{user.username}</h1>:<Link to='/login'><h1 className='px-4 w-full text-white font-bold font-display text-xl md:text-3xl '>Login</h1></Link>}
            </div>
        </header>
    )
}

export default Header

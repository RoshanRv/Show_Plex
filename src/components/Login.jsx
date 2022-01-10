import React from 'react'
import { useState, useContext } from 'react'
import API from '../API'
import { Context } from '../context'
import LoadMore from './LoadMore'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)

    const [_user,setUser]=useContext(Context)

    const navigate = useNavigate()

    const handleInput=(e)=>{
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        if(name==='username')setUsername(value)
        if(name==='password')setPassword(value)

    }

    const handleSubmit =async()=>{
        setError(false)


        try{

            const requestToken = await API.getRequestToken()

            const sessionId  = await API.authenticate(requestToken,username,password)

            setUser({
                sessionid: sessionId.session_id,
                username
            })

            navigate('/')

            localStorage.setItem('loginid',JSON.stringify({
                'sessionid':sessionId.session_id,
                'username':username
            }))

        }catch(err){
            setError(true)
        }

    }


    return (
        <div className='relative h-[83vh] '>
            <div className=' absolute top-0 z-10 h-full flex items-center justify-center w-full p-4'>
                <div className='rounded-lg  h-max px-12 py-12 shadow-2xl border-4 border-red-700 md:border-white hover:border-red-700 transition-all shadow-md shadow-red-700 md:shadow-lg md:shadow-white hover:shadow-red-500'  >
                    <h1 className='font-display md:text-4xl text-xl text-center text-white'>Log In</h1>
                    <div className='mt-4'>
                        {error && <h1 className='text-red-500 text-center  font-display text-xl'>Username or Password is Incorrect</h1>}
                        <div className='flex justify-around my-6'>
                        <label className='font-display text-white md:text-2xl text-lg'>Username:</label>
                        <input type="text" name='username' value={username} placeholder='Username' onChange={handleInput} required
                        className={`bg-black text-white px-2  outline-0 border-b-2 ${error?'border-red-400':'border-green-500'} w-1/2 font-display md:text-2xl text-lg`} />
                        </div>

                        <div className='flex justify-around items-center my-4'>
                        <label className='font-display text-white md:text-2xl text-lg' >Password:</label>
                        <input type="password" name='password' value={password} placeholder='Password' onChange={handleInput} 
                        className={`bg-black text-white px-2 outline-0 border-b-2 ${error?'border-red-400':'border-green-500'} w-1/2 font-display md:text-lg text-md`} />
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <LoadMore text='Login' callback={handleSubmit} color='bg-gradient-to-r from-red-800 via-red-600 to-red-800'/>
                        <a href="https://www.themoviedb.org/signup" target='_blank'><LoadMore text='Signin' color='bg-gradient-to-r from-red-800 via-red-600 to-red-800'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

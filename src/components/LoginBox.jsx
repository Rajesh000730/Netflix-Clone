import React, { useState } from 'react'
import LoginInput from './LoginInput'
import { Form, NavLink, useActionData } from 'react-router-dom'

function LoginBox() {
    let email= useActionData()
    console.log(email)
  return (
    <div className='w-[100%] h-[100%] flex items-center justify-center text-white'>
        <Form className='bg-black bg-opacity-50 p-10 flex flex-col  gap-6' action='/login' method='post'>
            <h1 className='font-bold text-[36px]'>Signin</h1>    
            <LoginInput type="email" placeholder="Email Address" name="email" value={email}/>
            <LoginInput type="password" placeholder="Password" name="password" />
            <button type='submit' className='w-[100%] px-3 py-2 bg-red-600 rounded-sm'>Sign in</button>
            <div className='w-[100%] flex justify-center '><NavLink to="/" className="hover:underline hover:text-gray-400" >Forgot Password?</NavLink></div>
            
            <div className='flex gap-3  '  >
            <input type='checkbox' name='remember me' className="w-3"/>
            <label htmlFor="remember me">Remember me</label>
            </div>

            <p ><span className='text-gray-400'>New to Netflix?</span> <NavLink to="/signup" className="hover:underline">Sign up now.</NavLink></p>
            
        </Form>
    </div>
  )
}

export default LoginBox
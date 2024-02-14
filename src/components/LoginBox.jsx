import React, { useState } from 'react'
import LoginInput from './LoginInput'
import { Form, NavLink, useActionData, useNavigation } from 'react-router-dom'

function LoginBox() {
    const navigation = useNavigation();
    const busy = navigation.state ==="submitting"
    var data = ""
    if(!busy){
      data=useActionData()
      console.log(data)
    }
  return (
    <div className='w-[100%] h-[100%] flex items-center justify-center text-white'>
        <Form className='bg-black bg-opacity-50 p-10 flex flex-col relative  gap-6' action='/login' method='post'>
            <p className='text-red-600 absolute top-[5px]' >{data}</p>
            <h1 className='font-bold text-[36px]'>Signin</h1>    
            <LoginInput type="email" placeholder="Email Address" name="email" />
            <LoginInput type="password" placeholder="Password" name="password" />
            <button type='submit' className='w-[100%] px-3 py-2 flex justify-center items-center bg-red-600 rounded-sm relative' disabled={busy}>{busy?<svg className="animate-spin h-4 w-4 mr-3 border-2  text-white" viewBox="0 0 24 24"></svg>:""}Sign in</button>
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
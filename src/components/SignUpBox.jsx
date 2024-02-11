import React, { useEffect, useState } from 'react'
import LoginInput from './LoginInput'
import { Form, NavLink, useActionData, useLoaderData } from 'react-router-dom'

function SignUpBox() {
  const error = useActionData()
  
  return (
    <div className='w-[100%] h-[100%] flex items-center justify-center text-white'>
        
    <Form className='bg-black bg-opacity-50 p-10 flex flex-col  gap-6' action='/signup' method='post'>
        <p>{error?error.error:""}</p>
        <h1 className='font-bold text-[36px]'>SignUp</h1>    
        <LoginInput type="email" placeholder="Email Address" name="email"  />
        <LoginInput type="password" placeholder="Password" name="password"/>
        <LoginInput type="password" placeholder="confirmPassword" name="confirmpassword" />
        <button type='submit' className='w-[100%] px-3 py-2 bg-red-600 rounded-sm'>Sign Up</button>

        <p ><span className='text-gray-400'>Already an user?</span> <NavLink to="/login" className="hover:underline">Signin.</NavLink></p>
        
    </Form>
</div>
  )
}

export default SignUpBox
import React, { useEffect, useState } from 'react'
import LoginInput from './LoginInput'
import { Form, NavLink, useActionData, useNavigation } from 'react-router-dom'

function SignUpBox() {
  const navigation = useNavigation()
  const busy = navigation.state === "submitting"
  var error=""
  if(!busy){
    error=useActionData()
  }

  
  return (
    <div className='w-[100%] h-[100%] flex items-center justify-center text-white'>
        
    <Form className='bg-black bg-opacity-50 p-10 flex flex-col relative gap-6' action='/signup' method='post'>
        <p className='text-red-600  absolute top-[5px]'>{error?error:""}</p>
        <h1 className='font-bold text-[36px]'>SignUp</h1>    
        <LoginInput type="email" placeholder="Email Address" name="email"  />
        <LoginInput type="password" placeholder="Password" name="password"/>
        <LoginInput type="password" placeholder="confirmPassword" name="confirmpassword" />
        <button type='submit' className='w-[100%] px-3 py-2 bg-red-600 rounded-sm flex items-center justify-center' disabled={busy}>{busy?<svg className="animate-spin h-4 w-4 mr-3 border-2 relative left-[0px] text-white" viewBox="0 0 24 24"></svg>:""}Sign Up</button>

        <p ><span className='text-gray-400'>Already an user?</span> <NavLink to="/login" className="hover:underline">Signin.</NavLink></p>
        
    </Form>
</div>
  )
}

export default SignUpBox
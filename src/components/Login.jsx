    import React from 'react'

import LoginNavbar from './LoginNavbar'
import { Outlet } from 'react-router-dom'
    function Login() {
      return (
        <div className='Login w-[100vw] h-[100vh] max-w-[3000px] max-h-[1000px]'>
          <div className=" w-[100%] h-[100%] gradientbg">
            <LoginNavbar/>
            <Outlet/>
          </div>
        </div>
      )
    }
    
    export default Login
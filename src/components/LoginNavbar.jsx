import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
function LoginNavbar() {
  return (
    <div  className='flex w-[100%] h-auto items-center text-white justify-between px-[170px] py-3 absolute top-0'>
        <div className='flex items-center'>
           <NavLink to="/" >
           <img src={logo} width={150}/>
           </NavLink>
        </div>
        <div>
            <NavLink to="/login" className='px-3 py-1  bg-red-600 rounded-sm'>Signin</NavLink>
        </div>
    </div>
  )
}

export default LoginNavbar
import React from 'react'
import user from '../assets/user.svg'
import profiles from '../assets/Profiles.svg'
import transfer from '../assets/transfer.svg'
import help from '../assets/help.svg'
import { NavLink } from 'react-router-dom'
import arrow from '../assets/arrow.svg'
function DropdownBox({display, setDisplay}) {
  var disp = "dropdown"+display  
  var styles = ` ${disp} ${display} text-xl  absolute mt-[0px] rounded right-[0px] w-[219px] h-[250px] bg-[#070605]`  
  return (
    <div className={styles} onMouseLeave={()=>{setDisplay("hidden")}}>
        <span className='absolute right-[10px] '><img src={arrow} /></span>
        <div className='p-5 '>
            <ul className='flex flex-col gap-2'>
                <li className='hover:underline'>
                    <NavLink className="flex gap-3 ">
                    <img src={profiles} alt="profiles logo"/>
                    <p className='text-[14px]'>Children</p>
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink className="flex gap-3 ">
                    <img src={user} alt="user logo"/>
                    <p className='text-[14px]'>Manage Profile</p>
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink className="flex gap-3 ">
                    <img src={transfer} alt="transfer logo"/>
                    <p className='text-[14px]'>Transfer Profile</p>
                    </NavLink>
                </li>
                <li className='hover:underline'>
                    <NavLink className="flex gap-3 ">
                    <img src={user} alt="user logo"/>
                    <p className='text-[14px]'>Account</p>
                    </NavLink>
                </li>
                <li className='hover:underline'>    
                    <NavLink className="flex gap-3 ">
                    <img src={help} alt="help logo"/>
                    <p className='text-[14px]'>Help Center</p>
                    </NavLink>
                </li>


            </ul>
        </div>
        <div className='flex w-[100%] h-[30px] border-t border-gray-500  gap-3 items-center justify-center'>
        <NavLink to="/logout" className="hover:underline">
        <p className='text-[14px]'>Sign Out of Netflix</p>
        </NavLink>
        </div>
    </div>
  )
}

export default DropdownBox
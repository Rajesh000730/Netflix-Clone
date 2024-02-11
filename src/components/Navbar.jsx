import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import Notification from '../assets/Notification.svg'
import ProfileLogo from '../assets/profileLogo.png'
import { NavLink } from "react-router-dom";
import Search from './Search'
function Navbar() {
    const [display, setDisplay] = useState("hidden")
    const toggle = ()=>{
        display === ""?setDisplay("hidden"):setDisplay("");
    }
  return (
    <div className='flex items-center justify-center w-[100%] sticky top-0'>
    <div className='flex items-center px-[4%] justify-between  h-[64px] bg-black  z-50 w-[100%] max-w-[3000px]' >
    <div className='flex m-0 text-white box-border relative'>
    <img src={logo} className=' mr-6 '/>
    <div className='flex'>
        <ul className='flex gap-5 text-[14px]' >
            <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "font-bold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
            to="/shows"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : ""
            }
          >
            TV Shows
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/browse"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : ""
            }
          >
            Movies
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/latest"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : ""
            }
          >
            New & Popular
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/my-list"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : ""
            }
          >
            My List
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/original-audio"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : ""
            }
          >
            Browse By languages
          </NavLink>
            </li>

        </ul>
    </div>
    </div>
    <div className='flex  text-white font-[14px]  gap-6 items-center relative'>
        <Search display={display}/>
        <button onClick={toggle}><img src={search} /></button>
        <span>Children</span>
        <img src={Notification} className=''/>
        <div>
        <img src={ProfileLogo}/>
        
        </div>
    </div>
</div>
    </div>
  )
}

export default Navbar
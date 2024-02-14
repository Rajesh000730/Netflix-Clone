import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import Notification from '../assets/Notification.svg'
import ProfileLogo from '../assets/profileLogo.png'
import { NavLink } from "react-router-dom";
import Search from './Search'
import DropdownBox from './DropdownBox'
function Navbar() {
    const [display, setDisplay] = useState("hidden")
    const [dropDowndisplay, setDropDownDisplay] = useState("hidden")
    const [scrolly, setScrolly] = useState(-1);
    const searchRef = useRef()
    
    useEffect(()=>{
      const scrollevent = document.addEventListener('scroll', ()=>{
        setScrolly(window.scrollY)
      })
      
      return ()=>{
        removeEventListener('scroll', scrollevent)
      }
      
    }, [scrolly])
    var bc="";
    if(scrolly == 0){
      bc = "navbarhide"
    }
    else if(scrolly == -1){
      bc = "transparent"
    }
    else{
      bc = "navbar bg-black"
    }
    const toggle = ()=>{
        setDisplay("")
    }
  return (
    <div className= "flex items-center justify-center w-[100%] bg-transparent fixed top-0 z-[1000]">
    <div className={`flex items-center  px-[4%] justify-between ${bc} h-[64px]  w-[100%] max-w-[3000px]`} >
    <div className='flex m-0 text-white box-border relative'>
    <img src={logo} className=' mr-6 '/>
    <div className='hidden lg:flex '>
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
            <li className='hidden xl:flex'>
            <NavLink
            to="/my-list"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : ""
            }
          >
            My List
          </NavLink>
            </li>
            <li className='hidden xl:flex'>
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
        <Search display={display} setDisplay={setDisplay} searchRef={searchRef}/>
        <button onClick={toggle} ref={searchRef} ><img src={search} /></button>
        <span className='hidden sm:flex'>Children</span>
        <img src={Notification} className='hidden sm:flex'/>
        <div>
        <div>
        <div onMouseOver={()=>setDropDownDisplay("")} onMouseLeave={()=>{setDropDownDisplay("hidden")}}>
        <img src={ProfileLogo} className='hover:cursor-pointer'/>
        <DropdownBox display={dropDowndisplay} setDisplay={setDropDownDisplay} />
        
        </div> 
        
        </div>
        
        </div>
    </div>
</div>
    </div>
  )
}

export default Navbar
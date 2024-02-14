import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import search from '../assets/search.svg'
function Search({display, setDisplay, searchRef}) {
  const refr = useRef()
  var style = `relative ${display} z-30 left-[50px] `
  useEffect(()=>{
    const  clickEvent = document.addEventListener("click", (event)=>{
    if(refr.current && !refr.current.contains(event.target) && !searchRef.current.contains(event.target)){
      setDisplay("hidden")
    }
    return ()=>{
      removeEventListener(clickEvent)
    }
    })
  }, [])
  return (
    <div className={style} ref={refr}>
    <div className='flex search'>
    <img src={search} className='ml-2 mr-2'/>
    <Form method="get" action="/browse">
    <input
      aria-label="search products"
      type="text"
      name="q"
      className='searchInput flex items-center justify-center text-[15px]'
      placeholder='Title, people, Genre'
      
    />
    </Form>
    </div>
    </div>
  )
}

export default Search
import React from 'react'
import { Form } from 'react-router-dom'
import search from '../assets/search.svg'
function Search({display}) {
  var style = `relative ${display} z-30 left-[50px]`
  return (
    <div className={style}>
    <div className='flex search'>
    <img src={search} className='mr-2'/>
    <Form method="get" action="/browse">
    <input
      aria-label="search products"
      type="text"
      name="q"
      className='searchInput'
      
    />
    </Form>
    </div>
    </div>
  )
}

export default Search
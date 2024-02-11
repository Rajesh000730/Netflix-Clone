import React from 'react'
import { Form } from 'react-router-dom'
import search from '../assets/search.svg'
function Search({display}) {
  return (
    <div className={display}>
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
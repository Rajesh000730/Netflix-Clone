import React from 'react'
import Carousel from './Carousel'

function Topics({data, Topic}) {
  return (
    <div className='mb-[20px] relative top-[-30px]'>
        <p className='mb-1 text-white font-bold text-xl pl-[4%] '>{Topic}</p>
        <Carousel data={data}/>
    </div>
  )
}

export default Topics
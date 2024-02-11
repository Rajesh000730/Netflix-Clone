import React from 'react'
import Carousel from './Carousel'

function Topics({data, Topic}) {
  return (
    <div className='mb-[20px]'>
        <p className='mb-1 text-white font-bold text-xl'>{Topic}</p>
        <Carousel data={data}/>
    </div>
  )
}

export default Topics
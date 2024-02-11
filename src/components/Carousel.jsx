import React, {useRef} from 'react'

function Carousel({data}) {
    const ref = useRef();
    const scroll = (scrolloffset) => {
        ref.current.scrollLeft += scrolloffset
      }
  return (
    <div className='relative'> <div ref={ref} className='flex ml-[4%] gap-2 overflow-scroll scroll-smooth scrollbar ease-linear duration-300 relative'>
    {data.images.map(image=><img  key={image} width={200} height={200} src= {image} />)} 
    {data.images.map(image=><img key={image} width={200} height={200} src= {image} />)}
    
    </div>
    <button className='absolute left-0 top-[0%] w-[4%] h-[100%] hover:bg-gray-200 ' onClick={()=>scroll(-300)}>{"<"}</button>
    <button className='absolute right-0 top-[0%] w-[4%] h-[100%] hover:bg-gray-200 ease-in-out duration-100' onClick={()=>scroll(1200)}>{">"}</button></div>
  )
}

export default Carousel
import React, {useRef} from 'react'
import temp_img from '../assets/temp_img.jpg'
function Carousel({data}) {
    const ref = useRef();
    const scroll = (scrolloffset) => {
        ref.current.scrollLeft += scrolloffset
      }
  return (
   
    <div className='relative bg-blue'> 
    <div className='carousel'>
    <div ref={ref} className='flex relative left-[4%] gap-1 overflow-scroll scroll-smooth scrollbar ease-linear duration-300'>
    {data.images.map(image=><img  key={image} width={218} height={121} src={temp_img} />)} 
    {data.images.map(image=><img  key={image} width={218} height={121} src={temp_img} />)} 



    </div>
    </div>
    <button className='absolute transparent left-0 top-[0%] w-[4%] h-[100%] hover:bg-gray-200 ' onClick={()=>scroll(-300)}>{"<"}</button>
    <button className='absolute right-0 top-[0%] w-[4%] h-[100%] hover:bg-gray-200 ease-in-out duration-100' onClick={()=>scroll(1200)}>{">"}</button></div>
 
  )
}

export default Carousel
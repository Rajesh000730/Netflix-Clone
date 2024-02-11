import React from 'react'
// import '../src/index.css'
import Carousel from './Carousel';
import { useLoaderData } from 'react-router-dom'
import Topics from './Topics';
function Home() {
  const data = useLoaderData();
  return (
    <div className='w-[100%] flex items-center justify-center'>
    <div  className='pl-[4%] mt-[20px] w-[100%] max-w-[3000px]'>
      <Topics data={data} Topic={"Popular on Netflix"} />
      <Topics data={data} Topic={"English Movies"} />
      <Topics data={data} Topic={"New Releases"} />
    </div>
    </div>
  )
}

export default Home
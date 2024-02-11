import React from 'react'
// import '../src/index.css'
import Loader from './Loader';
import Carousel from './Carousel';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom'
import getPhones from "../utils/getPhones.js";
import Topics from './Topics';
import { queryclient } from '../utils/queryClient'
export const loader = async ()=>{
  const res = await queryclient.fetchQuery({
    queryKey:['phones3'],
    queryFn: ()=>getPhones(2),
    staleTime:1000*60*2
  })
  return res;
}
function Home() {
  const {data, isPending, isError}  =  useQuery({
    queryKey:['phones3'],
    queryFn: ()=>getPhones(2),
    staleTime:1000*60*2
  })
  // console.log(data.data)
    // console.log(id)
    if(isPending){
      return <Loader/>
    }
  return (
    <div className='w-[100%] flex items-center justify-center z-10'>
    <div className=' mt-[20px] w-[100%] max-w-[3000px]'>
    <Topics data={data} Topic={"Newly released"} />
    <Topics data={data} Topic={"Newly released"} />
    <Topics data={data} Topic={"Newly released"} />
    <Topics data={data} Topic={"Newly released"} />
    </div>
    </div>
  )
}

export default Home
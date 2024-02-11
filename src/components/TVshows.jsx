import React, {useRef} from 'react'
import { useLoaderData } from 'react-router-dom'
import Carousel from './Carousel';
import { useQuery } from '@tanstack/react-query';
import { queryclient } from '../utils/queryClient'
import getPhones from '../utils/getPhones.js';
import Loader from './Loader';
// import Carousel from './Carousel';
export const loader = async ()=>{
  const res = await queryclient.fetchQuery({
    queryKey:['phones1'],
    queryFn: ()=>getPhones(1),
    staleTime:1000*60*2
  })
  console.log(res)
  return res;
}



function TVshows() {

  
    const {data, isPending, isError} = useQuery({
      queryKey:['phones1'],
      queryFn: ()=>getPhones(1),
      staleTime:1000*60*2
    })
    // console.log(data)
    // console.log(queryCache.find(['phones1']))
    if(isPending){
      return <Loader/>
    }
    console.log(data)
  return (
    <div className='w-[100%] flex items-center justify-center'>
    <div  className=' mt-[20px]  w-[100%] max-w-[3000px]'>
     <Carousel data={data}/>
      <Carousel data={data}/>
    </div>
    </div>
  )
}

export default TVshows

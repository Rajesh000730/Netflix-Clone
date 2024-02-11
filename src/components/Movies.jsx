import React from 'react'
import Navbar from './Navbar'
import { useParams, useLoaderData, } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import getPhones from '../utils/getPhones.js'
import { queryclient } from '../utils/queryClient'
import Carousel from './Carousel'
import Loader from './Loader'
export const loader = async ()=>{
  const res = await queryclient.fetchQuery({
    queryKey:['phones'],
    queryFn: ()=>getPhones(2),
    staleTime:1000*60*2
  })
  return res;
}

function Movies() {
  
  const {data, isPending, isError}  =  useQuery({
    queryKey:['phones'],
    queryFn: ()=>getPhones(2),
    staleTime:1000*60*2
  })
  // console.log(data.data)
    // console.log(id)
    if(isPending){
      return <Loader/>
    }
  return (
    <div className='w-[100%] flex items-center justify-center'>
    <div className=' mt-[20px] w-[100%] max-w-[3000px]'>
    <Carousel data={data}/>
    <Carousel data={data}/>
    </div>
    </div>
  )
}

export default Movies
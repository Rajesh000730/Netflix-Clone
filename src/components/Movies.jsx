import React from 'react'
import Navbar from './Navbar'
import { useParams, useLoaderData, } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import getPhones from '../utils/getPhones'
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
    <div className=' mt-[20px]'>
    <Carousel data={data}/>
    <Carousel data={data}/>
    </div>
  )
}

export default Movies
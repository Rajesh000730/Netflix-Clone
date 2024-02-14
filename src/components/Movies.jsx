import React from 'react'
import Navbar from './Navbar'
import { useParams, useLoaderData, } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import getPhones from '../utils/getPhones.js'
import { queryclient } from '../utils/queryClient'
import Carousel from './Carousel'
import Loader from './Loader'
import { useAuth } from './Authprovider.jsx'
import Topics from './Topics.jsx'
import Videoplayer from './Videoplayer.jsx'
export const loader = async (token)=>{
  const res = await queryclient.fetchQuery({
    queryKey:['phones'],
    queryFn: ()=>getPhones(1, token),
    staleTime:1000*60*2
  })
  return res;
}

function Movies() {
  const {token, setToken} = useAuth()
  const {data, isPending, isError}  =  useQuery({
    queryKey:['phones'],
    queryFn: ()=>getPhones(1, token),
    staleTime:1000*60
  })
    if(data ===  "jwt expired" || data === "not authorised"){
      localStorage.removeItem("token");
      setToken("")
      location.reload()
    }
    if(isPending){
      return <Loader/>
    }
  return (
    <div className='w-[100%] flex items-center justify-center'>
    <div className=' w-[100%] max-w-[3000px]'>
    <Videoplayer/>
    <div className="relative top-[-60px]">
    <Topics data={data} Topic={"Popular on Netflix"} />
       <Topics data={data} Topic={"Trending Now"} />
       <Topics data={data} Topic={"Because you watched Afwaah"} />
       <Topics data={data} Topic={"survival horror"} />
       <Topics data={data} Topic={"Retro Tv"} />
    </div>
    </div>
    </div>
  )
}

export default Movies
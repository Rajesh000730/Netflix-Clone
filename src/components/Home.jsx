import React from 'react'
// import '../src/index.css'
import Loader from './Loader';
import Carousel from './Carousel';
import { useQuery } from '@tanstack/react-query';
import { redirect, useLoaderData } from 'react-router-dom'
import getPhones from "../utils/getPhones.js";
import Topics from './Topics';
import { queryclient } from '../utils/queryClient'
import { useAuth } from './Authprovider.jsx';
import Videoplayer from './Videoplayer.jsx';
export const loader = async (token)=>{
  const res = await queryclient.fetchQuery({
    queryKey:['phones3'],
    queryFn: ()=>getPhones(1, token),
    staleTime:1000*60*2
  })
  return res;
}
function Home() {
  const {token, setToken} = useAuth()
  const {data, isPending, isError}  =  useQuery({
    queryKey:['phones3'],
    queryFn: ()=>getPhones(1, token),
    staleTime:1000*60
  })
    console.log(data)
    if(data ===  "jwt expired" || data === "not authorised"){
      localStorage.removeItem("token");
      setToken("")
      return redirect('/')
    }
    if(isPending){
      return <Loader/>
    }
    document.title = "Home"
  return (
    <div className='w-[100%] flex items-center justify-center z-10 relative'>
    <div className='  w-[100%] max-w-[3000px] relative'>
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

export default Home
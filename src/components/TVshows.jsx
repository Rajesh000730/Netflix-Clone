import React, {useRef} from 'react'
import { useLoaderData } from 'react-router-dom'
import Carousel from './Carousel';
import { useQuery } from '@tanstack/react-query';
import { queryclient } from '../utils/queryClient'
import getPhones from '../utils/getPhones.js';
import Loader from './Loader';
import { useAuth } from './Authprovider.jsx'
import Videoplayer from './Videoplayer.jsx';
import Topics from './Topics.jsx';
export const loader = async (token)=>{
  const res = await queryclient.fetchQuery({
    queryKey:['phones1'],
    queryFn: ()=>getPhones(1, token),
    staleTime:1000*60*2
  })
  console.log(res)
  return res;
}
function TVshows() {

    const {token, setToken}  = useAuth()
    const {data, isPending, isError} = useQuery({
      queryKey:['phones1'],
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
    document.title = "TV shows"
    console.log(data)
  return (
    <div className='w-[100%] flex items-center justify-center'>
    <div  className='w-[100%] max-w-[3000px]'>
    <Videoplayer/>
    <div className="relative top-[-60px]">
    <Topics data={data} Topic={"newly released"} />
    <Topics data={data} Topic={"newly released"} />
    <Topics data={data} Topic={"newly released"} />
    <Topics data={data} Topic={"newly released"} />
    </div>
    </div>
    </div>
  )
}

export default TVshows

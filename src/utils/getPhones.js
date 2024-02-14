import { data } from "autoprefixer";
import {instance, instance2} from "../utils/axiosConf.js";
 const getPhones = async (id, token)=>{
    // const res = await instance(`/products/${id}`);
    const res1 = await instance2(`/api/v1/products/${id}`,{
        headers:{
            "Authorization": "bearer " + token
        }
    })
    console.log(res1)

   if(res1.data.error){
    return res1.data.error
   }
    return res1.data.data

}

export default getPhones
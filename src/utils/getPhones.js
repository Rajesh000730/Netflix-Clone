import instance from "../utils/axiosConf.js";
 const getPhones = async (id)=>{
    const res = await instance(`/products/${id}`);
    return res.data;
}

export default getPhones
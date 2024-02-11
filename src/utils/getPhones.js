import instance from "../utils/axiosConf";
 const getPhones = async (id)=>{
    const res = await instance(`/products/${id}`);
    return res.data;
}

export default getPhones
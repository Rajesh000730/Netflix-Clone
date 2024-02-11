import instance from "../utils/axiosConf";
 const getPhones = async (id)=>{
    const res = await instance.get(`/products/${id}`);
    return res.data;
}

export default getPhones
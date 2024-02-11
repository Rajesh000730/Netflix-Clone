import instance from "../utils/axiosConf";
 const searchPhones = async (id)=>{
    console.log()
    const res = await instance.get(`/products/search?q=${id}`);
    return res.data;
}

export default searchPhones
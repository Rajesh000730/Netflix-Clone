import  axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL_1
  });


const instance2 = axios.create({
  baseURL: import.meta.env.VITE_API_URL_2
});

export {instance2, instance}
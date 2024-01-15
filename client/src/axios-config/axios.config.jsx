import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3500',
//     timeout: 10000,
//     withCredentials: true,
//     headers:{
//         "Content-Type": 'application/json'
//     }
// })

const axiosInstance = axios.create({
    baseURL: 'https://velvet-vista-api.vercel.app/',
    timeout: 10000,
    withCredentials: true,
    headers:{
        "Content-Type": 'application/json'
    }
})

export default axiosInstance
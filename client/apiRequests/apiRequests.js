import axios from 'axios'

const apiRequests = axios.create({
    baseURL:import.meta.env.SERVER_URL,
    withCredentials:true
})

export default apiRequests;
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-burger-app-pro.firebaseio.com/'
})

export default axiosInstance;
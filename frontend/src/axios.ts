import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD : process.env.REACT_APP_DEV
})
export default instance
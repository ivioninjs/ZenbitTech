import axios from 'axios'

console.log(process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD : process.env.REACT_APP_DEV)
const instance = axios.create({
    baseURL: "http://159.223.13.78/"
})
export default instance
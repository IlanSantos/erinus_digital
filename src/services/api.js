import axios from 'axios'

const instance = axios.create({
    baseURL: "http://erinusdigital.com.br"
})


export default instance
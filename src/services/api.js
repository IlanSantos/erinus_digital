import axios from 'axios'

const instance = axios.create({
    baseURL: "http://www.erinusdigital.com.br"
})


export default instance
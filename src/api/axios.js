import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://summer.local.eu.ngrok.io/swagger/index.html'
})

export default instance;
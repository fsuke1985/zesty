import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: true
});

export default apiClient

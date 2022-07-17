import axios from 'axios'

const apiClient = axios.create({
    baseURL: '/api/v1',
    timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: true
});

export default apiClient

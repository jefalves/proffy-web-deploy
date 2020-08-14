import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mentor-deploy.herokuapp.com/'
});

export default api;
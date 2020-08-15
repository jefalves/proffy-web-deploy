import axios from 'axios';

const api = axios.create({
    baseURL: 'https://connection-application.herokuapp.com/'
});

export default api;
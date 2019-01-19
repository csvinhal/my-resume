import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-resume-24a66.firebaseio.com/'
});

export default instance;
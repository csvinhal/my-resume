import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://my-resume-24a66.firebaseio.com/',
});

export default instance;

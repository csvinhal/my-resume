import axios from 'axios';
import moment from 'moment';

const API_KEY = 'AIzaSyBzUifyuHqcbjC-oH1rYkXsxSiBG2qznjU';
const SIGNUP_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser/';
const SIGIN_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword/';

export function register(email, password) {
  const body = {
    email,
    password,
    returnSecureToken: true,
  };
  return axios.post(`${SIGNUP_URL}?key=${API_KEY}`, body)
    .then((res) => {
      res.data.expirationDate = moment().add(res.data.expiresIn, 'seconds').toDate();
      return res.data;
    });
}

export function login(email, password) {
  const body = {
    email,
    password,
    returnSecureToken: true,
  };

  return axios.post(`${SIGIN_URL}?key=${API_KEY}`, body)
    .then((res) => {
      res.data.expirationDate = moment().add(res.data.expiresIn, 'seconds').toDate();
      return res.data;
    });
}

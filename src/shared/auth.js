import axios from 'axios';
import moment from 'moment';

const API_KEY = 'AIzaSyBzUifyuHqcbjC-oH1rYkXsxSiBG2qznjU';
const SIGNUP_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser/`;

export function register(email, password) {
    const body = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    return axios.post(`${SIGNUP_URL}?key=${API_KEY}`, body)
        .then(res => {
            res.data.expirationDate = moment().add(res.data.expiresIn, 'seconds').toDate();
            return res.data;
        })
}
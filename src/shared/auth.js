import axios from "axios";
import moment from "moment";

export const API_KEY = "AIzaSyBzUifyuHqcbjC-oH1rYkXsxSiBG2qznjU";

const SIGN_UP_URL =
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser/";
const SIG_IN_URL =
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword/";

const setAuthData = (token, userId, expirationDate) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expirationDate", expirationDate);
  localStorage.setItem("userId", userId);
};

export const isValidToken = expirationTokenDate => {
  const expirationDate = moment(expirationTokenDate);
  const currentDate = moment();

  return currentDate.isBefore(expirationDate, "minutes");
};

export const removeStorageData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
};

export const register = ({ email, password }) => {
  const body = {
    email,
    password,
    returnSecureToken: true,
  };
  return axios.post(`${SIGN_UP_URL}?key=${API_KEY}`, body).then(res => {
    res.data.expirationDate = moment()
      .add(res.data.expiresIn, "seconds")
      .toDate();
    const { idToken, localId, expirationDate } = res.data;
    setAuthData(idToken, localId, expirationDate);
    return res.data;
  });
};

export const login = (email, password) => {
  const body = {
    email,
    password,
    returnSecureToken: true,
  };

  return axios.post(`${SIG_IN_URL}?key=${API_KEY}`, body).then(res => {
    res.data.expirationDate = moment()
      .add(res.data.expiresIn, "seconds")
      .toDate();
    const { idToken, localId, expirationDate } = res.data;
    setAuthData(idToken, localId, expirationDate);
    return res.data;
  });
};

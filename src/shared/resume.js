import axios from './resquestsConfig';

export const fetchAll = token => axios.get(`resumes.json?auth=${token}`)
  .then((res) => {
    let fetchedOrders = [];
    fetchedOrders = Object.keys(res.data).map(key => ({
      id: key,
      ...res.data[key],
    }));
    return fetchedOrders;
  });

export const fetch = (token) => {
  return axios.get(`resumes.json?auth=${token}`);
};

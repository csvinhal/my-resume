import axios from './resquestsConfig';

export const fetchAll = token => axios.get(`resumes.json?auth=${token}`)
  .then((res) => {
    if (res.data) {
      let fetchedOrders = [];
      fetchedOrders = Object.keys(res.data).map(key => ({
        id: key,
        ...res.data[key],
      }));
      return fetchedOrders;
    }
    return [];
  });

export const deleteResume = (token, id) => axios.delete(`resumes/${id}.json?auth=${token}`);

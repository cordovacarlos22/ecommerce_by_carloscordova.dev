import axios from "axios";

let url = import.meta.env.VITE_DB_URL




export const loginUserService = async (data) => axios.post(`${url}/login`, data);

export const registerUserService = (data) => axios.post(`${url}/register`, data);

export const createItemService = (token, data) => axios.post(`${url}/items`,data, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});






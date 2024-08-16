import axios from "axios";

let url = import.meta.env.VITE_DB_URL

export const login = async (data) => {
  // Your login logic goes here
  try {
    const response = await axios.post(`${url}/login`, data);
    return response
  } catch (error) {
    console.error(error);    
  }
}

export const registerUserService = (data) => axios.post(`${url}/register`, data)






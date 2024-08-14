
import axios from "axios";

let url = import.meta.env.VITE_DB_URL

export const login = async (data) => {
  // Your login logic goes here
  try {
    const response = await axios.post(`${url}/login`, data);   
      return response
  } catch (error) {
    console.error(error);
    //todo :   toastify error message 
  }
}

export const signup = async (data) => {
  
  // Your signup logic goes here
  try {
    const response = await axios.post(`${url}/register`, data);
    console.log("signUp", response.status == 201)
    // todo : should add a toasify alert if user created 
    return response.data;
  } catch (error) {
    console.error(error);
    //todo :   toastify error message 
  }
};


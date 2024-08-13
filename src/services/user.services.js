import axios from "axios";


export const signup = async (data) => {
  let url = import.meta.env.VITE_DB_URL
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


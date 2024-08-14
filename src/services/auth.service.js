import axios from "axios";
import { Navigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

export const signup = async (data) => {

  // Your signup logic goes here
  try {
    toast.info(' waiting for server !', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
    const response = await axios.post(`${url}/register`, data);
    // todo : should add a toasify alert if user created 
    toast.success(' you have registed !', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
   
    return response.data;
  } catch (error) {
    //todo :   toastify error message 
    toast.error(' sorry email already in use', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });


  }
};


import axios from 'axios';

let url = import.meta.env.VITE_DB_URL;

export const accountInfo = async (token) => {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    }
    const response = await axios.get(`${url}/users/me`, config);
    // console.log("API response account info", response);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching account info", error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};
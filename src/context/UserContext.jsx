import { createContext, useEffect, useState } from "react"

//! create a new context 
const userContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("userData", user)
    console.log("token", token)
  }, [user, token]);


  let data = {
    token,
    setToken,
    user,
    setUser,
  }
  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
};








export { userContext, UserProvider };
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

//! create a new context 
const userContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);
  const [role, setRole] = useState(null)
  useEffect(() => {
    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setLogin(true);
    } else {
      setLogin(false);
      setUser(null);
      setToken(null);
      setRole(null);
    }
  }, [token]);


  const setupSession = (token) => {
    localStorage.setItem("token", token)
    setToken(token)
  }

  const deleteSession = () => {
    localStorage.removeItem("token")
    setToken(null)

  }


  let data = {
    token,
    setToken,
    user,
    setUser,
    login,
    setLogin,
    setupSession,
    deleteSession,
    role,
    setRole
  }
  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
};








export { userContext, UserProvider };
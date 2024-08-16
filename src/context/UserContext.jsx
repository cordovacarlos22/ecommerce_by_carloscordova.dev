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
    let storedUser = localStorage.getItem("user");
    let storedRole = localStorage.getItem("role");
    if (storedToken) {
      setToken(storedToken);
      setLogin(true);
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
     
    }
    if (storedRole) {
      setRole(storedRole);
    }
  }, [token]);


  const setupSession = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("role", userData.role);

    setToken(token);
    setUser(userData);
    console.log("user data", userData)
    setRole(userData.role);
    setLogin(true);
  };

  const deleteSession = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("role")
    setToken(null)
    setLogin(false);
    setUser(null);
    setToken(null);
    setRole(null);
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
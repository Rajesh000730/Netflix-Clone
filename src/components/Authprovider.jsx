import {instance2} from "../utils/axiosConf.js";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const setToken = (newToken) => {
    setToken_(newToken);
  };
  const scrollY = window.scrollY
  
  useEffect(() => {
    if (token) {
      localStorage.setItem('token',token);
    } else {  
      localStorage.removeItem('token')
    }
   
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;

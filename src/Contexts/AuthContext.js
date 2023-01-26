import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/auth/getMe")
      .then((res) => setuser(res.data))
      .catch(() => setuser(null));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setuser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth;

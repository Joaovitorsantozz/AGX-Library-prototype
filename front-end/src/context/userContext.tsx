import { useState, createContext, useContext, useEffect } from "react";
import Axios from "axios";
export const UserContext = createContext<any>(null);
export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const resetUser = () => {
    setUser(null);
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }
        const response = await Axios.get("http://localhost:3000/getUserInfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.data);
      } catch (error) {
        console.log("erro ao buscar user global", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, resetUser,loading }}>
      {children}
    </UserContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(UserContext);

  if (!context) {
    console.log("Context deve ser usado dentro do provider");
  }
  return context;
}

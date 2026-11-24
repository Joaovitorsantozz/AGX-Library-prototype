import { useState, createContext, useContext } from "react";
export const UserContext = createContext<any>(null);
export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{ user,setUser }}>{children}</UserContext.Provider>;
};


export function useAuth (){
    const context = useContext(UserContext)

    if(!context){
        console.log("Context deve ser usado dentro do provider");
    }
    return context;
}
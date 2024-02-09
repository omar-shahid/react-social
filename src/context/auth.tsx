import { createContext, useState } from "react";
type DarkmodeContextType = { currentUserToken: string | null; setCurrentUserToken: (value: string | null) => void };
export const AuthContext = createContext<DarkmodeContextType>({ currentUserToken: "", setCurrentUserToken: () => {} });
export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUserToken, setCurrentUser] = useState(localStorage.getItem("userToken"));
  const setCurrentUserToken = (value: string | null) => {
    localStorage.setItem("userToken", value || "");
    setCurrentUser(value);
  };
  return <AuthContext.Provider value={{ currentUserToken, setCurrentUserToken }}>{children}</AuthContext.Provider>;
};

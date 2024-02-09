import { createContext, useState } from "react";
type DarkmodeContextType = { darkmode: boolean; toggle: () => void };
export const DarkmodeContext = createContext<DarkmodeContextType>({ darkmode: false, toggle: () => {} });
export const DarkmodeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkmode, setDarkmode] = useState<boolean>(JSON.parse(localStorage.getItem("darkmode") || "false"));
  const toggle = () => {
    setDarkmode((prev) => {
      localStorage.setItem("darkmode", (!prev).toString());
      console.log(!prev);
      return !prev;
    });
  };

  return <DarkmodeContext.Provider value={{ darkmode, toggle }}>{children}</DarkmodeContext.Provider>;
};

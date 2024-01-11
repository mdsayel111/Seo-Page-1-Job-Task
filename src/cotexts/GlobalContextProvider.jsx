import { createContext, useState } from "react";

export const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {
  const [currentCard, setCurrentCard] = useState("");

  const value = {
    currentCard,
    setCurrentCard,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

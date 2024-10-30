import { createContext, PropsWithChildren, useContext, useState } from "react";

// STAP 1: Nieuwe context aanmaken
const DarkModeContext = createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

// STAP 2: Provider maken voor mijn context
const DarkModeContextProvider = (props: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode: isDarkMode, toggleDarkMode: toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;

// Custom hook
export const useDarkMode = () => useContext(DarkModeContext);

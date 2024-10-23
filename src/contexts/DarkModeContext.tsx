import { createContext, PropsWithChildren, useContext, useState } from "react";

// STAP 1: Nieuwe context aanmaken
const DarkModeContext = createContext({ isDarkMode: true, toggleDarkMode:  });

// STAP 2: Provider maken voor mijn context
const DarkModeContextProvider = (props: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

//   TODO: toggleDarkMode methode maakt -> state flippen van true naar false of omgekeerd

  return (
    <DarkModeContext.Provider value={{ isDarkMode: isDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;

// Custom hook
export const useDarkMode = () => useContext(DarkModeContext);

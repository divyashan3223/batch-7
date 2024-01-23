import { useState, createContext } from "react";
// step-1
export const themeContext = createContext(null);

// children=<App/>
const ThemeContextProvider = ({ children }) => {
  // step-2
  const [theme, setTheme] = useState("dark");
  //   step-3
  return <themeContext.Provider value={theme}>{children}</themeContext.Provider>;
};

export default ThemeContextProvider;

import React, { createContext, useState } from "react";

export const ThemeContext = createContext("light");

const ThemesProvider = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemesProvider;

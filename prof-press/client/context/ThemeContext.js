import React, { createContext, useState } from "react";
import { jsx, css, ThemeProvider } from "@emotion/react"; /** @jsx jsx */
import { brownTheme, blueTheme } from "../styles/theme";
import { themeSaver, hasGlasses, putGlasses } from "./theme-saver";

export const ThemeContext = createContext(themeSaver.whatTheme());

function ThemeContextProvider(props) {
  const [active, setActive] = useState(themeSaver.whatTheme());
  const [gotGlasses, setGotGlasses] = useState(hasGlasses());

  console.log("active", active);

  const toggleTheme = () => {
    themeSaver.setTheme(active);
    return active ? brownTheme : blueTheme;
  };

  const saveGlasses = () => {
    setGotGlasses(true);
    putGlasses(true);
  };

  return (
    <ThemeContext.Provider
      value={{ active, setActive, gotGlasses, saveGlasses }}
    >
      <ThemeProvider theme={toggleTheme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

import React, { useState, lazy } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./theme/theme";

const NavBar = lazy(() => import("./components/NavBar"));
const Main = lazy(() => import("./components/Main"));
const GlobalStyle = lazy(() => import("./theme/globalStyle"));

const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <NavBar changeTheme={changeTheme} />
      <Main />
    </ThemeProvider>
  );
};

export default App;

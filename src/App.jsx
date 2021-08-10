import React, { useState, lazy } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./theme/theme";

const NavBar = lazy(() => import("./components/NavBar"));
const Main = lazy(() => import("./components/Main"));
const GlobalStyle = lazy(() => import("./theme/globalStyle"));

const App = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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

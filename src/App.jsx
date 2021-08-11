import React, { lazy } from "react";
import { ThemeProvider } from "styled-components";
import useLocalStorage from "./components/_Hooks/useLocalStorage";
import themes from "./theme/theme";

const NavBar = lazy(() => import("./components/NavBar"));
const Main = lazy(() => import("./components/Main"));
const GlobalStyle = lazy(() => import("./theme/globalStyle"));

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
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

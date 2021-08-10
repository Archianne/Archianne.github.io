import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/theme/globalStyle";
import themes from "../src/theme/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const App = () => {
  return <ThemeProvider theme={baseTheme}></ThemeProvider>;
};

export default App;

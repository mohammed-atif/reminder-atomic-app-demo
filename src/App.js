import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

import HomePage from "pages/HomePage";

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;

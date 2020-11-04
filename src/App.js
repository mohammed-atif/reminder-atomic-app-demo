import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <div>Hello World</div>
    </ThemeProvider>
  );
};

export default App;

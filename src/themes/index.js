import { createMuiTheme } from "@material-ui/core/styles";

import { grey } from "@material-ui/core/colors";

const defaultTheme = createMuiTheme();

const baseTheme = createMuiTheme({
  container: {
    secondary: {
      color: grey[300],
      borderRadius: defaultTheme.spacing(1),
      padding: defaultTheme.spacing(2),
    },
  },
});

export default baseTheme;

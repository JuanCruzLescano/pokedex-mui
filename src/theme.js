import { createMuiTheme } from "@material-ui/core/styles";
import { red, yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: yellow["A400"]
    },
  }
});

export default theme;
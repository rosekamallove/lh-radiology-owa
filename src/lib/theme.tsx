import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F59031",
    },
    secondary: {
      light: "#FFF9F3",
      main: "#faca9e",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

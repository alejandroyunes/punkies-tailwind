// components/themes/darkTheme.tsx
import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {

  name: "darkmode",
  borderRadius: "4px",
  bodyColor: "#000",
  textColor: "#fff",
  palette: {
    common: {
      black: "#121212",
      white: "#ffffff",
    },
    primary: {
      main: "#3b82f6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d946ef",
      contrastText: "#ffffff",
    },
  },
};

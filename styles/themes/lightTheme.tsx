// components/themes/defaultTheme.tsx
import { DefaultTheme } from "styled-components";
import { breakpoint, fontSizes, fonts, zIndices } from "./darkTheme";


export const lightTheme: DefaultTheme = {
  name: "lightmode",
  borderRadius: "4px",
  bodyColor: "#ffffff",
  textColor: "#000000",
  palette: {
    common: {
      black: "#212121",
      white: "#ffffff",
    },
    primary: {
      main: "#212121",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d946ef",
      contrastText: "#ffffff",
    },
  },
  breakpoint,
  zIndices,
  fontSizes,
  fonts
};
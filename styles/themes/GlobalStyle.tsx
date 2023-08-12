import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-size: 16px;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
  body {
    background-color: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
`;

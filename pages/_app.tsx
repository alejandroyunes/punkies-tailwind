// pages/_app.tsx
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { useLocalStorage } from "usehooks-ts"
import { GlobalStyle } from "../styles/themes/GlobalStyle"
import { darkTheme } from "../styles/themes/darkTheme"
import Navigation from "../components/Navigation/Navigation"

function PunkiesApp({ Component, pageProps }: AppProps) {
  const [theme] = useLocalStorage("theme", darkTheme)
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default PunkiesApp

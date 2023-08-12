import { useLocalStorage } from "usehooks-ts"
import { darkTheme } from "../../styles/themes/darkTheme"
import { lightTheme } from "../../styles/themes/lightTheme"
import Moon from "../../public/svgs/moon"
import Sun from "../../public/svgs/sun"

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', darkTheme)

  return (
    theme.name === 'darkmode' ?
      <span onClick={() => setTheme(lightTheme)}> <Moon /></span>
      :
      <span onClick={() => setTheme(darkTheme)}> <Sun /></span>
  )
}
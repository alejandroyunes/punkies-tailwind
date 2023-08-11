// pages/index.tsx
import type { NextPage } from "next";
import { useLocalStorage } from "usehooks-ts";
import { darkTheme } from "../styles/themes/darkTheme"
import { defaultTheme } from "../styles/themes/defaultTheme";
import Navigation from "../app/components/Navigation/Navigation";

const Home: NextPage = () => {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);

  return (
    <div>
      {/* <Navigation /> */}
      <button onClick={() => setTheme(defaultTheme)}>Use Default Theme</button>
      <button onClick={() => setTheme(darkTheme)}>Use Dark Theme</button>
    </div>
  );
};
export default Home;

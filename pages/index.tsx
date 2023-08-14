import type { NextPage } from "next"
import Slider from "../components/Slider/Slider"
import Title from "../components/Title/Title";

const Home: NextPage = () => {

  return (
    <main>
      <Slider />
      <Title title={"Eventos"} />
    </main>
  );
};
export default Home

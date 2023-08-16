import type { NextPage } from "next"
import Slider from "../components/Slider/Slider"
import Title from "../components/Title/Title"
import Concert from "../components/Concerts/Concert"
import { punkiesVideosProps } from "../components/Videos/punkies-videos-props"
import Videos from "../components/Videos/Videos"

const Home: NextPage = () => {

  return (
    <main>
      <Slider />
      <Title title={"Eventos"} />
      <Concert />
      <Title title={"Videos"} />
      <Videos items={punkiesVideosProps.items} />

    </main>
  );
};
export default Home

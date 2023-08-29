import type { NextPage } from "next"
import Slider from "../components/Slider/Slider"
import Title from "../components/Title/Title"
import Concert from "../components/Concerts/Concert"
import { punkiesVideosProps } from "../components/Bandas/Data/videos-youtube/punkies-videos-props"
import Videos from "../components/Videos/Videos"

const Home: NextPage = () => {

  return (
    <main>
      <Slider />
      <Title title="Eventos" id='eventos'/>
      <Concert />
      <Title title={"Videos"} />
      <Videos items={punkiesVideosProps.items} />
      <br />
    </main>
  );
};
export default Home

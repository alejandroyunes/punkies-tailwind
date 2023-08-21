import Hero from "../../components/Bandas/Banda/Hero/Hero";
import Videos from "../../components/Videos/Videos";
import TitleComp from "../../components/Title/Title";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { fullBandHistoryProps } from "../../components/Bandas/Data/full-band-history-props";
import { jimmyVideosProps } from "../../components/Bandas/Data/videos-youtube/jimmy-videos-props";

const JimmyJazz = () => {
  return (
    <>
      <Breadcrumb
        title={"Jimmy Jazz"}
        goBack={true}
        topPadding={false}
        headerDesktop={true}
        backMessage={"volver"}
      />
      <Hero
        description={fullBandHistoryProps?.bands[2].description}
        imgUrl={fullBandHistoryProps?.bands[2].imgUrl}
        imgAlt={fullBandHistoryProps?.bands[2].imgAlt}
        viewMoreURL={fullBandHistoryProps?.bands[2].viewMoreURL}
        fullDiscographyURL={fullBandHistoryProps?.bands[2].fullDiscographyURL}
      />
      <TitleComp title={"Videos"} message={``} />
      <Videos items={jimmyVideosProps.items}/>
    </>
  );
};

export default JimmyJazz;

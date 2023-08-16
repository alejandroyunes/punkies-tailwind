import Hero from "../../components/Bandas/Banda/Hero/Hero";
import Videos from "../../components/Videos/Videos";
import TitleComp from "../../components/Title/Title";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { fullBandHistoryProps } from "../../components/Bandas/Data/full-band-history-props";
import Band from "../../components/Band/Band";
import { punkiesVideosProps } from "../../components/Bandas/Data/videos-youtube/punkies-videos-props";

const PycBand = () => {
  return (
    <>
      <Breadcrumb
        title={"Punkies y Cerebro"}
        goBack={true}
        topPadding={false}
        headerDesktop={true}
        backMessage={"volver"}
      />
      <Hero
        description={fullBandHistoryProps?.bands[1].description}
        imgUrl={fullBandHistoryProps?.bands[1].imgUrl}
        imgAlt={fullBandHistoryProps?.bands[1].imgAlt}
        viewMoreURL={fullBandHistoryProps?.bands[1].viewMoreURL}
        fullDiscographyURL={fullBandHistoryProps?.bands[1].fullDiscographyURL}
      />
      <Band />
      <TitleComp title={"Videos"} message={``} />
      <Videos
        items={punkiesVideosProps.items}
      />
    </>
  );
};

export default PycBand;

import Hero from "../../components/Bandas/Banda/Hero/Hero";
import Videos from "../../components/Videos/Videos";
import TitleComp from "../../components/Title/Title";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { fullBandHistoryProps } from "../../components/Bandas/Data/full-band-history-props";
import { gpVideosProps } from "../../components/Bandas/Data/videos-youtube/gp-videos-props"
import { useMemo, useState } from "react";

type GpVideoProps = {
  videos: {
    description: string;
    image: {
      url: string;
    };
    title: string;
    youtube: string;
  }[];
  backgroundColor?: boolean;
  seeMore?: boolean;
};

const GpBand = () => {



  return (
    <>
      <Breadcrumb
        title={"GP"}
        goBack={true}
        topPadding={false}
        headerDesktop={true}
        backMessage={"volver"}
      />
      <Hero
        description={fullBandHistoryProps?.bands[0].description}
        imgUrl={fullBandHistoryProps?.bands[0].imgUrl}
        imgAlt={fullBandHistoryProps?.bands[0].imgAlt}
        viewMoreURL={fullBandHistoryProps?.bands[0].viewMoreURL}
        fullDiscographyURL={fullBandHistoryProps?.bands[0].fullDiscographyURL}
      />
      <TitleComp title={"Videos"} message={``} />
      <Videos items={gpVideosProps.items} />
    </>
  );
};

export default GpBand;

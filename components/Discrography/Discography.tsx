import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Album from "../../components/Bandas/Albums";
import Social from "../../components/Discrography/Social";

import { FullWrapper, GpPadding } from "./discography.styled";

import { jimmyProps } from "./data/jimmy-data";
import { punkiesProps } from "./data/punkies-data";
import { gpProps } from "./data/gp-data";

export default function Discography () {
  return (
    <>
      <FullWrapper>
        <Breadcrumb
          breadcrumId="punkies-y-cerebro-discography"
          title="Discrografía"
          headerDesktop={false}
          topPadding={false}
          goBack={true}
          backMessage={"volver"}
        />
        <Social punkies={true} socialText={true}></Social>
        <Album albums={punkiesProps.albums} />
        <Breadcrumb
          breadcrumId="jimmy-jazz-discography"
          title="Jimmy Jazz"
          headerDesktop={false}
          topPadding={false}
          goBack={false}
          backMessage={"volver"}
        />
        <Social punkies={false} socialText={false}></Social>
        <Album albums={jimmyProps.albums} />
        <Breadcrumb
          breadcrumId="gp-discography"
          title="GP"
          headerDesktop={false}
          topPadding={false}
          goBack={false}
          backMessage={"volver"}
        />
        <GpPadding />
        <Album albums={gpProps.albums} />
      </FullWrapper>
    </>
  );
};

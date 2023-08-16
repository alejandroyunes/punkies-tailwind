import { FC } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Discografia from "../../components/Bandas/Albums";
import Social from "../../components/Discrography/Social";

import { FullWrapper, GpPadding } from "./discography.styled";

import { jimmyProps } from "./data/jimmy-data";
import { punkiesProps } from "./data/punkies-data";
import { gpProps } from "./data/gp-data";

const Discography: FC = () => {
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
        <Discografia albums={punkiesProps.albums} />
        <Breadcrumb
          breadcrumId="jimmy-jazz-discography"
          title="Jimmy Jazz"
          headerDesktop={false}
          topPadding={false}
          goBack={false}
          backMessage={"volver"}
        />
        <Social punkies={false} socialText={false}></Social>
        <Discografia albums={jimmyProps.albums} />
        <Breadcrumb
          breadcrumId="gp-discography"
          title="GP"
          headerDesktop={false}
          topPadding={false}
          goBack={false}
          backMessage={"volver"}
        />
        <GpPadding />
        <Discografia albums={gpProps.albums} />
      </FullWrapper>
    </>
  );
};
export default Discography;

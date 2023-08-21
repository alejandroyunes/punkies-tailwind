import { FC, useMemo, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import Image from "next/image";
import {
  Title,
  BodyWrapper,
  TitleTextDesktop,
  RedLineDesktop,
  ImageDiscoWrapper,
  ImageDiv,
  BandDescription,
  BandReadMore,
  BandReadMoreButton,
  BandDescriptionWrapper,
  BreadcrumbWrapper,
  ImageWrapper,
} from "./history.styled";

import { briefBandHistoryProps } from "../Bandas/Data/brief-band-history-props";

interface BandasProps {
  bands: {
    image: string;
    alt: string;
    description: string;
    url: string;
    link: string;
    band: string;
    topPadding: boolean;
    goBack: boolean;
  }[];
}

const History: FC = () => {
  const [bandas, setBandas] = useState<BandasProps>();

  const banda = useMemo(() => {
    return setBandas(briefBandHistoryProps);
  }, []);

  return (
    <>
      <BodyWrapper>
        <RedLineDesktop />
        <TitleTextDesktop>
          <Title>GP</Title>
          <Title>Punkies y Cerebro</Title>
          <Title>Jimmy Jazz</Title>
        </TitleTextDesktop>

        <ImageDiscoWrapper>
          {bandas?.bands.map((e, i) => (
            <ImageDiv key={i}>
              {/* BREADCRUM FOR MOBILE */}
              <BreadcrumbWrapper>
                <Breadcrumb
                  title={e.band}
                  headerDesktop={true}
                  topPadding={e.topPadding}
                  goBack={e.goBack}
                  backMessage={"inicio"}
                />
              </BreadcrumbWrapper>
              <ImageWrapper>
                <Image
                  src={e.image}
                  alt={e.alt}
                  width={390}
                  height={220} />
              </ImageWrapper>
              <BandDescriptionWrapper>
                <BandDescription>{e.description}</BandDescription>
                <BandReadMoreButton>
                  <Button
                  buttonText={"leer más"}
                  link={e.link}
                  externalLink={false}
                />
                </BandReadMoreButton>
              </BandDescriptionWrapper>
            </ImageDiv>
          ))}
        </ImageDiscoWrapper>
      </BodyWrapper>
    </>
  );
};

export default History;

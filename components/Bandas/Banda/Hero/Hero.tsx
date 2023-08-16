import { FC } from "react";
import Link from "next/link";

import {
  FullWrapper,
  BandWrapper,
  ImageDiv,
  BandDescription,
  ReadMoreDisco,
  ReadMore,
  Wrapper,
} from "./hero.styled";
import Arrow from "public/svgs/arrow";
import Download from "public/svgs/download";

interface HeroProps {
  description: string;
  imgUrl: string;
  imgAlt: string;
  viewMoreURL: string;
  fullDiscographyURL: string;
}

const Hero: FC<HeroProps> = ({
  description,
  imgUrl,
  imgAlt,
  viewMoreURL,
  fullDiscographyURL,
}) => {
  return (
    <>
      <FullWrapper>
        <Wrapper>
          <BandWrapper>
            <BandDescription>
              {description}
              <Link href={viewMoreURL}>
                <ReadMore>
                  <br />
                  Descarga la historia completa
                </ReadMore>
              </Link>
              <Download />
            </BandDescription>

            <ImageDiv>
              <div>
                <img src={imgUrl} alt={imgAlt} />
              </div>
              <Link href={fullDiscographyURL}>
                <ReadMoreDisco>
                  <Link href={fullDiscographyURL}>
                      <h3>ver discografia completa</h3>
                  </Link>
                </ReadMoreDisco>
              </Link>
            </ImageDiv>
          </BandWrapper>
        </Wrapper>
      </FullWrapper>
    </>
  );
};

export default Hero;

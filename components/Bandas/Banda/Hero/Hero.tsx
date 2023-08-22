import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Download from '../../../../public/svgs/download'

import {
  FullWrapper,
  BandWrapper,
  ImageDiv,
  BandDescription,
  ReadMoreDisco,
  ReadMore,
  Wrapper,
} from "./hero.styled";

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
              <Link 
                href={viewMoreURL}>
                <ReadMore>
                  <br />
                  Descarga la historia completa
                </ReadMore>
              </Link>
              <Download />
            </BandDescription>

            <ImageDiv>
              <div>
                <Image
                  src={imgUrl} 
                  alt={imgAlt} 
                  width={310}
                  height={260}
                  />
              </div>
                <ReadMoreDisco>
                  <Link href={fullDiscographyURL}>
                      <h3>ver discografia completa</h3>
                  </Link>
                </ReadMoreDisco>
            </ImageDiv>
          </BandWrapper>
        </Wrapper>
      </FullWrapper>
    </>
  );
};

export default Hero;

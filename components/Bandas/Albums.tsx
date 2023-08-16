import { FC } from "react";

import Link from "next/link";
import PlusSvg from "../../public/svgs/plus";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel'


import {
  Wrapper,
  ImageHeading,
  BodyWrapper,
  Card,
  WrapperSvg,
  MoreButton,
  WrapperMobile,
  MoreIcon,
  CardMobileTitle,
  CardMobile,
} from "./albums.styled";

interface AlbumProps {
  albums: {
    band: string;
    title?: string;
    image: {
      url: string;
    };
    alt: string;
    description?: string;
    year: string;
    slug: string;
    album: string;
    comparedAlbum: string;
  }[];
}
const Albums: FC<AlbumProps> = ({ albums }) => {
  return (
    <>
      <BodyWrapper>
        <Wrapper>
          {albums?.length &&
            albums.map((e, i) => (
              <Card key={i} className="both">
                <Link href={`/musica/${e.slug}`}>
                  <MoreButton className="button-active">
                    <WrapperSvg>
                      <PlusSvg />
                    </WrapperSvg>

                    <MoreIcon>Letras</MoreIcon>
                  </MoreButton>
                  <ImageHeading>
                    <Image
                      src={`${e.image?.url}`}
                      alt={`${e.alt}`}
                      width={208}
                      height={208}
                      className="image-active"
                    />
                  </ImageHeading>
                </Link>
              </Card>
            ))}
        </Wrapper>

        <WrapperMobile>
          <Carousel>
            {albums?.length &&
              albums.map((e, i) => (
                <>
                  <CardMobile key={i}>
                    <Link href={`musica/${e.slug}`}>
                      <ImageHeading>
                        <img src={`${e.image?.url}`} alt={`${e.alt}`} />
                      </ImageHeading>
                    </Link>
                  </CardMobile>
                  <CardMobileTitle>
                    <p>{e.album}</p>
                    <p>{e.year}</p>
                  </CardMobileTitle>
                </>
              ))}
          </Carousel>
        </WrapperMobile>
      </BodyWrapper>
    </>
  );
};

export default Albums;

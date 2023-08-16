import { FC, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useRouter } from "next/router";
import Arrow from "../../public/svgs/arrow";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import NavPadding from "../../components/Navigation/NavPadding/NavPadding";

import { dataLyricsProps } from "../../components/Bandas/Data/letra";

import { albumProps } from "../../components/Discrography/album-data";

import {
  Wrapper,
  BodyWrapper,
  AlbumHeader,
  AlbumImage,
  AlbumTitle,
  TitleWrapper,
  AlbumTracks,
  ImageWrapper,
  Song,
  SongWriter,
  SongTitle,
  DynamicLyrics,
  DropdownWrapper,
  Dropdown,
  DropdownMenu,
  DropdownList,
  ArrowContent,
  AlbumImageMobile,
  AlbumTitleWrapper,
  Year,
  Title,
} from "../../components/Bandas/Letras/letras.styled";

interface albumProps {
  albums: {
    image: {
      url: string
    };
    comparedAlbum: string
    description: string
    alt: string
    title: string
    slug: string
    year: number
    banda: string
    album: string
  }[]
}

const Letras: FC<albumProps> = () => {
  const router = useRouter();
  const articleid: any = router.query.letras;

  const [nudeUrl]: any = useState(articleid?.replace(/-/g, " "));
  const [open, setOpen] = useState(false);

  const caratulaArray = albumProps.albums.filter(
    (e: any) => e.comparedAlbum == nudeUrl
  );
  const albumArray = dataLyricsProps.lyrics.filter(
    (e) => e.comparedAlbum == nudeUrl
  );

  const firstSongForDropdown = albumArray.filter((e: any) => e.track == "1");

  const song: any = firstSongForDropdown[0]?.song;
  const [songTitle, setSongTitle] = useState(song);

  const songInfo = albumArray
    .map((e: any) => e)
    .filter((e: any) => e.song == songTitle);
  const songs = albumArray.map((e: { song: any }) => e.song);

  return (
    <>
      <Head>
        <title>Punkies Y Cerebro</title>
        <meta name="description" content={`Letras del Album ' ${nudeUrl}`} />
        <meta name="keywords" content={`Letras ${song}`} />
      </Head>
      <NavPadding />

      <Breadcrumb
        title={"Discografía"}
        headerDesktop={false}
        topPadding={false}
        goBack={true}
        backMessage={"volver"}
      />

      <BodyWrapper>
        <Wrapper>
          <AlbumHeader>
            <ImageWrapper>
              <AlbumImage>
                {caratulaArray.map((e, i) => (
                  <Image
                    key={i}
                    src={e.image?.url}
                    alt=""
                    layout="responsive"
                    width={260}
                    height={260} />
                ))}
              </AlbumImage>
              <AlbumTracks>
                <span className="tracklist">Track list: </span>
                {albumArray.map((e: any, i: any) => (
                  <ul key={i}>
                    <li
                      onClick={() => {
                        setSongTitle(e.song);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {e.track}:<span> {e.song} </span>
                    </li>
                  </ul>
                ))}
              </AlbumTracks>
            </ImageWrapper>
            {/* //MOBILE */}
            <TitleWrapper>
              <AlbumTitleWrapper>
                <AlbumImageMobile>
                  {caratulaArray.map((e, i) => (
                    <Image
                      key={i}
                      src={e.image?.url}
                      alt={e.album}
                      layout="responsive"
                      width={160}
                      height={260} />
                  ))}
                </AlbumImageMobile>
                <AlbumTitle>
                  <Title>
                    <h1>
                      {caratulaArray.map((e: any, i: any) => (
                        <span key={i}>{e.album}</span>
                      ))}
                    </h1>
                  </Title>
                  <Year>
                    <h3>
                      {caratulaArray.map((e: any, i: any) => (
                        <span key={i}>{`año: ${e.year}`}</span>
                      ))}
                    </h3>
                  </Year>
                </AlbumTitle>
              </AlbumTitleWrapper>

              <DropdownWrapper onClick={() => setOpen(!open)}>
                <Dropdown className={open ? "dropdown" : " "}>
                  {!songTitle ? " Track list" : songTitle}
                  <DropdownMenu className="dropdown_menu--animated dropdown_animation">
                    {songs.map((e: any, i: any) => (
                      <DropdownList
                        key={i}
                        onClick={() => {
                          setSongTitle(e);
                        }}
                      >
                        {e}
                      </DropdownList>
                    ))}
                  </DropdownMenu>
                  <ArrowContent>
                    <Arrow />
                  </ArrowContent>
                </Dropdown>
              </DropdownWrapper>

              {songInfo.map((e: any, i: any) => (
                <DynamicLyrics key={i}>
                  <SongWriter>
                    <p>
                      <span>Letra:</span> {e.composer}
                    </p>
                  </SongWriter>
                  <SongTitle>
                    <div>
                      <p>
                        <span>{e.track}:</span> {e.song}
                      </p>
                    </div>
                    <div className="song-duration">
                      <p>
                        <span> {e.time}</span>
                      </p>
                    </div>
                  </SongTitle>
                  <Song>
                    <p>{e.lyrics}</p>
                  </Song>
                </DynamicLyrics>
              ))}
            </TitleWrapper>
          </AlbumHeader>
        </Wrapper>
      </BodyWrapper>
    </>
  );
};

export default Letras;

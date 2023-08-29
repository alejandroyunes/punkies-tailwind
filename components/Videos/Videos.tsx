import { useState } from "react"
import YoutubeIcon from "../../public/svgs/youtube-icon"
import { Wrapper } from "../Wrapper/wrapper.styled"
import Image from "next/image"
import { PunkiesVideosProps } from "../Bandas/Data/videos-youtube/punkies-videos-props"

import {
  Container,
  Description,
  Title,
  VideoCard,
  DescriptionWrapper,
  YoutubeIconDiv,
  ImageDiv,
  VideoOverlay,
  ExitButton,
  VideoYoutubeWrapper,
  VideoYoutube,
  ImageWrapper,
} from "./videos-youtube.styled";

export default function Videos({ items }: PunkiesVideosProps) {

  const [video, setvideo] = useState(false)
  const [videoUrl, setvideoUrl] = useState("")

  return (
    <>
      <Wrapper>
        <Container>
          {items.map((e, i) => (
            <VideoCard key={i}>
              <ImageDiv
                onClick={() => {
                  setvideo(true);
                  setvideoUrl(e.youtube);
                }}
              >
                <YoutubeIconDiv>
                  <YoutubeIcon />
                </YoutubeIconDiv>
                <ImageWrapper>
                  <Image
                    src={e.image.url}
                    alt="punkies y cerebro videos"
                    width={312}
                    height={200} />
                </ImageWrapper>
              </ImageDiv>
              <Title>{e.title}</Title>

              <DescriptionWrapper>
                <Description>
                  {e.description}
                </Description>
              </DescriptionWrapper>
            </VideoCard>
          ))}
        </Container>
      </Wrapper>

      <VideoOverlay openVideo={video}>
        <ExitButton onClick={() => setvideo(!video)}>
          <span></span>
          <span></span>
        </ExitButton>
      </VideoOverlay>
      <VideoYoutubeWrapper openVideo={video}>
        <VideoYoutube
          src={video ? videoUrl + "?autoplay=1" : ""}
          allow="fullscreen; autoplay;"
        />
      </VideoYoutubeWrapper>
    </>
  );
};

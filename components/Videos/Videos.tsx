import {  useState } from "react"
import YoutubeIcon from "../../public/svgs/youtube-icon"
import { Wrapper } from "../Wrapper/wrapper.styled"
import Image from "next/image"
import imagex from '../../public/multimedia/punkies-youtube-thumbnails/bodas.webp'

import {
  Container,
  Description,
  More,
  Title,
  NewsWrapper,
  DescriptionWrapper,
  YoutubeIconDiv,
  ImageDiv,
  VideoOverlay,
  ExitButton,
  VideoYoutubeWrapper,
  VideoYoutube,
  ImageWrapper,
} from "./videos-youtube.styled";
import { PunkiesVideosProps } from "./punkies-videos-props";

export default function Videos ({ items }: PunkiesVideosProps)   {

  const [video, setvideo] = useState(false)
  const [videoUrl, setvideoUrl] = useState("")

  return (
    <Wrapper>
      <Container>
        {items.map((e, i) => (
          <NewsWrapper key={i}>
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
                  width={200}
                  height={200} />
              </ImageWrapper>
            </ImageDiv>
            <Title>{e.title}</Title>

            <DescriptionWrapper>
              <Description>
                {e.description}
              </Description>
            </DescriptionWrapper>
          </NewsWrapper>
        ))}

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
      </Container>
    </Wrapper>
  );
};

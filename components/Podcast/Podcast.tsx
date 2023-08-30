import Image from "next/image"
import podcastImage from '../../public/podcasts/truenopodcast.webp'


import {
  FullWrapper,
  Wrapper,
  WrapperChild,
  ButtonWrapper,
} from "./podcast.styled";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../Button/Button";

const Podcast = () => {

  return (
    <>
      <FullWrapper>
        <Breadcrumb
          breadcrumId="pyc-discography"
          title="Podcasts"
          headerDesktop={true}
          topPadding={false}
          goBack={true}
          backMessage={"volver"}
        />
        <Wrapper>
          <WrapperChild>
            <Image src={podcastImage} alt="" width={328} height={328} />
          </WrapperChild>
          <WrapperChild>
            <ButtonWrapper>
              <div>
                <h1>El Trueno de Queronea</h1>
                <h3>De Jaime López</h3>
                <p>
                  Audio opiniones del cantautor de rock subterráneo Jimmy Jazz.
                  Extraídas del blog "in sermo rusticos".
                </p>
              </div>
              <div>
                <Button
                  buttonText="Escuchar en Apple Podcasts"
                  externalLink={true}
                  link={
                    "https://podcasts.apple.com/bo/podcast/el-trueno-de-queronea/id1562723117"
                  }
                />
              </div>
              <div>
                <Button
                  buttonText="Escuchar en Spotify"
                  externalLink={true}
                  link={
                    "https://anchor.fm/jaime-lpez/episodes/Retos-de-ingenieria-I-Entrada-61-e1kgjra"
                  }
                />
              </div>
            </ButtonWrapper>
          </WrapperChild>
        </Wrapper>
      </FullWrapper>
    </>
  );
};

export default Podcast;

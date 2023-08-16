import { FC } from "react";
import YoutubeRed from "../../../public/svgs/youtube-red"
import Spotify from "../../../public/svgs/spotify";
import AmazonMusic from "../../../public/svgs/amazon";
import SoundCloud from "../../../public/svgs/soundcloud";
import Download from "../../../public/svgs/download";
import {
  SocialItems,
  SocialWrapper,
  SocialText,
  LinksWrapper,
  TextWrapper,
} from "./social.styled";
import Link from "next/link";

interface SocialProps {
  punkies: boolean;
  socialText: boolean;
}

const Social: FC<SocialProps> = ({ punkies, socialText }) => {
  return (
    <SocialWrapper>
      <LinksWrapper>
        <Link
          target="_blank"
          href={
            punkies
              ? "https://www.youtube.com/c/punkiesycerebro/featured"
              : "https://www.youtube.com/user/DAFXDXZ"
          }
        >
          <SocialItems className="youtube">
            <YoutubeRed />
          </SocialItems>
        </Link>
        <Link
          target="_blank"
          href={
            punkies
              ? "https://music.amazon.com/artists/B0752B6RCB/punkies-y-cerebro"
              : "https://music.amazon.com/artists/B000QKC70K/jimmy-jazz"
          }
        >
          <SocialItems className="amazon">
            <AmazonMusic />
          </SocialItems>
        </Link>
        <Link
          target="_blank"
          href={
            punkies
              ? "https://open.spotify.com/artist/6Nq4YQd4JdWvtY3HrgvYK7"
              : "https://open.spotify.com/artist/6MlcEwkxGsCTsCmZVl8w2I"
          }
        >
          <SocialItems className="spotify">
            <Spotify />
          </SocialItems>
        </Link>
        <Link
          target="_blank"
          href={
            punkies
              ? "https://soundcloud.com/punkiesycerebro"
              : "https://soundcloud.com/jimmyjazzgp"
          }
        >
          <SocialItems className="sound">
            <SoundCloud />
          </SocialItems>
        </Link>
        <Link
          target="_blank"
          href={punkies ? "/" : "/"}>
          <SocialItems className="download">
            <Download />
          </SocialItems>
        </Link>
      </LinksWrapper>
      {socialText && (
        <TextWrapper>
          <SocialText>
            Dale click en la imagen para ir a las letras de cada album.
          </SocialText>
        </TextWrapper>
      )}
    </SocialWrapper>
  );
};
export default Social;

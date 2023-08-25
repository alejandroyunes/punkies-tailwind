import { FC } from "react";

import {
  FullWrapper,
  WrapperSocial,
  WrapperChild,
  ContactWrapper,
  ContactImages,
  ContactItem,
  Image,
} from "./contact.styled";

import Facebook from "../../public/svgs/facebook";

import Instagram from "../../public/svgs/instagram";
import AmazonMusic from "../../public/svgs/amazon";
import YoutubeIcon from "../../public/svgs/youtube-icon";
import Spotify from "../../public/svgs/spotify";
import SoundCloud from "../../public/svgs/soundcloud";
import Whatapp from "../../public/svgs/whatapp";
import Link from "next/link";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Contact: FC = () => {
  return (
    <>
      <FullWrapper>
        <Breadcrumb
          breadcrumId="pyc-discography"
          title="Redes"
          headerDesktop={true}
          topPadding={false}
          goBack={true}
          backMessage={"volver"}
        />
        <WrapperSocial>
          <WrapperChild>
            <Link href={`https://www.facebook.com/punkiesycerebro`} target="_blank">
                <Facebook />
            </Link>
          </WrapperChild>
          <WrapperChild>
            <Link href={`https://www.instagram.com/punkiesycerebro/`} target="_blank">
                <Instagram />
            </Link>
          </WrapperChild>
          <WrapperChild>
            <Link href={`https://music.amazon.com/artists/B0752B6RCB/punkies-y-cerebro`} target="_blank">
                <AmazonMusic />
            </Link>
          </WrapperChild>
          <WrapperChild>
            <Link href={`https://soundcloud.com/punkiesycerebro`} target="_blank">
                <SoundCloud />
            </Link>
          </WrapperChild>
          <WrapperChild>
            <Link href={`https://www.youtube.com/c/punkiesycerebro/featured`} target="_blank">
                <YoutubeIcon />
            </Link>
          </WrapperChild>
          <WrapperChild>
            <Link href={`https://open.spotify.com/artist/6Nq4YQd4JdWvtY3HrgvYK7`} target="_blank">
                <Spotify />
            </Link>
          </WrapperChild>
          <WrapperChild>
            <Link href={`https://open.spotify.com/artist/6Nq4YQd4JdWvtY3HrgvYK7`}>
              <Link
                href="https://chat.whatsapp.com/G058cwxphqPBRv1xuUII2w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Whatapp />
              </Link>
            </Link>
          </WrapperChild>
        </WrapperSocial>
        <ContactWrapper>
          <ContactItem>
            <h1>Información de Contacto:</h1>
            <p>Teléfono: 304 537 7640</p>
            <p>E-mail: punkiesycerebro@gmail.com</p>
            <h1>Mercadeo:</h1>
            <p>Teléfono: 320 580 2590</p>
            <h1>Libros directos:</h1>
            <p>Teléfono: 305 484 0455</p>
            <h1>Aportes, dudas o amenazas:</h1>
            <p>Teléfono: 304 669 5598</p>
            <h2>¿Quieres recibir notificaciones de los eventos de Punkies y Cerebro o Jimmy Jazz? Escanea el código QR y listo.</h2>
            <div>
              <Link href={`https://open.spotify.com/artist/6Nq4YQd4JdWvtY3HrgvYK7`}>
                <Link
                  href="https://chat.whatsapp.com/G058cwxphqPBRv1xuUII2w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dswubnbqj/image/upload/v1693007195/contacto/p1jei7mbcwqsyp3ze6yb.webp"
                    alt="Jimmy Jazz - Jaime López Punkie Gp"
                  />
                </Link>
              </Link>
            </div>

          </ContactItem>


          <ContactImages>
            <Image>
              <img
                src="https://res.cloudinary.com/dswubnbqj/image/upload/v1693007196/contacto/kecpvu1kfhzffdhwyzfu.webp"
                alt="Baterista de Punkies Y Cerebro"
              />
              <h2>Camilo Restrepo</h2>
            </Image>
            <Image>
              <img
                src="https://res.cloudinary.com/dswubnbqj/image/upload/v1693007196/contacto/jg1qhufn3r4gfktpcpz7.webp"
                alt="Jimmy Jazz - Jaime López Punkie Gp"
              />
              <h2>Jimmy Jazz</h2>
            </Image>

            <Image>
              <img
                src="https://res.cloudinary.com/dswubnbqj/image/upload/v1693007196/contacto/tctqsolyn2yvnwoyegfd.webp"
                alt="Guitarra lider de Punkies Y Cerebro"
              />
              <h2>Erich Hernandez</h2>
            </Image>
            <Image>
              <img
                src="https://res.cloudinary.com/dswubnbqj/image/upload/v1693007195/contacto/klb35p0kxd8bhuiut1rl.webp"
                alt="Guitarra Rítmica de Punkies Y Cerebro"
              />
              <h2>Alejandro Yunes</h2>
            </Image>
          </ContactImages>
        </ContactWrapper>
      </FullWrapper>
    </>
  );
};

export default Contact;

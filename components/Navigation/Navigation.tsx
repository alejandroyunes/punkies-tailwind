import { FC } from "react"
import Link from "next/link"
import Hamburger from "./Hamburger/Hamburger"
import { usePathname } from "next/navigation"
import Logo from '../../public/logos/punkies-logo.png'
import Image from 'next/image'

import {
  ImagePaddingMobile,
  DesktopWrapper,
  Menu,
  ImageMain,
  LinksContainer,
  MobileNav,
  MobileLogo,
} from "./index.styled"

const Navigation: FC = () => {
  const pathname = usePathname()

  return (
    <>
      <DesktopWrapper>
        <LinksContainer>
          <Menu>
            <ul>
              <Link href="/eventos">
                <li className={pathname == "/eventos" ? "active" : ""}>
                  Eventos
                </li>
              </Link>
              <Link href="/podcast">
                <li className={pathname == "/podcast" ? "active" : ""}>
                  Podcast
                </li>
              </Link>
              <Link href="/historia">
                <li className={pathname == "/historia" ? "active" : ""}>
                  Historia
                </li>
              </Link>
              <Link href="/musica">
                <li className={pathname == "/musica" ? "active" : ""}>
                  Música
                </li>
              </Link>
            </ul>
          </Menu>
          <ImageMain>
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo Punkies y Cerebro"
                width={250}
                height={80}
                placeholder="blur"
              />
            </Link>
          </ImageMain>
          <Menu>
            <ul>
              <Link href="/libros">
                <li className={pathname == "/libros" ? "active" : ""}>
                  Libros
                </li>
              </Link>
              <Link href="/tienda">
                <li className={pathname == "/tienda" ? "active" : ""}>
                  Tienda
                </li>
              </Link>
              <Link href="/rnql">
                <li className={pathname == "/rnql" ? "active" : ""}>
                  RNQL
                </li>
              </Link>
              <Link href="/contacto">
                <li className={pathname == "/contacto" ? "active" : ""}>
                  Contacto
                </li>
              </Link>
            </ul>
          </Menu>
        </LinksContainer>
      </DesktopWrapper>

      <MobileNav>
        <MobileLogo>
          <Link href="/">
            <ImagePaddingMobile>
              <h1>Punkies & Cerebro</h1>
            </ImagePaddingMobile>
          </Link>
        </MobileLogo>
        <Hamburger />
      </MobileNav>
    </>
  )
}

export default Navigation

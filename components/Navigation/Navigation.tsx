import { FC } from "react"
import Link from "next/link"
import Hamburger from "./Hamburger/Hamburger"
import { useRouter } from "next/navigation"
import Arrow from "../../public/svgs/arrow"
import Logo from '../../public/logos/punkies-logo.png'
import Image from 'next/image'

import {
  ImagePaddingMobile,
  ImagePadding,
  LinksWrapper,
  Menu,
  ImageMain,
  LinksContainer,
  MobileNav,
  MobileLogo,
  ArrowContent
} from "./index.styled"
import { useLocalStorage } from "usehooks-ts"
import { darkTheme } from "../../styles/themes/darkTheme"
import Moon from "../../public/svgs/moon"
import Sun from "../../public/svgs/sun"
import { lightTheme } from "../../styles/themes/lightTheme"


const Navigation: FC = () => {
  const router = useRouter()
  const [theme, setTheme] = useLocalStorage("theme", darkTheme)

  return (
    <>
      <LinksWrapper>
        <LinksContainer>
          <Menu>
            <ul>
              <Link href="/eventos">
                <li>
                  {/* <a className={router.pathname == "/eventos" ? "active" : ""}> */}
                  Eventos
                  {/* </a> */}
                </li>
              </Link>
              <Link href="/podcast">
                <li>
                  {/* <a className={router.pathname == "/blog" ? "active" : ""}> */}
                  Podcast
                  {/* </a> */}
                </li>
              </Link>
              <Link href="/historia">
                <li>
                  {/* <a className={router.pathname == "/historia" ? "active" : ""}> */}
                  Historia
                  {/* </a> */}
                </li>
              </Link>
              <Link href="/musica">
                <li>
                  {/* <a className={router.pathname == "/musica" ? "active" : ""}> */}
                  Música
                  {/* </a> */}
                </li>
              </Link>
            </ul>
          </Menu>
          <ImageMain>
            <ImagePadding>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo Punkies y Cerebro"
                  width={260}
                  height={80}
                  placeholder="blur"
                />
              </Link>
            </ImagePadding>
          </ImageMain>
          <Menu>
            <ul>
              <Link href="/libros">
                <li>
                  {/* <a className={router.pathname == "/libros" ? "active" : ""}> */}
                  Libros
                  {/* </a> */}
                </li>
              </Link>
              <Link href="/tienda">
                <li>
                  {/* <a className={router.pathname == "/tienda" ? "active" : ""}> */}
                  Tienda
                  {/* </a> */}
                </li>
              </Link>
              {/* <Link href="/blog">
                <li className="dropdown">
                  <ul>
                    <Link href="/rnql">
                      <li>
                        <a>RNQL</a>
                      </li>
                    </Link>
                  </ul>
                  <a className={router.pathname === "/media" ? "active" : ""}>
                    Media
                  </a>
                  <ArrowContent>
                    <Arrow />
                  </ArrowContent>
                </li>
              </Link> */}
              <Link href="/rnql">
                <li>
                  {/* <a className={router.pathname == "/rnql" ? "active" : ""}> */}
                  RNQL
                  {/* </a> */}
                </li>
              </Link>
              <Link href="/contacto">
                <li>
                  {/* <a className={router.pathname == "/contacto" ? "active" : ""}> */}
                  Contacto
                  {/* </a> */}
                </li>
              </Link>

              {theme.name === 'darkmode' ?
                <span onClick={() => setTheme(lightTheme)}> <Moon /></span>
                :
                <span onClick={() => setTheme(darkTheme)}> <Sun /></span>
              }

              {/* <LoginButton /> */}
            </ul>
          </Menu>
        </LinksContainer>
      </LinksWrapper>

      <MobileNav>
        <MobileLogo>
          <Link href="/">
            {/* <a> */}
            <ImagePaddingMobile>
              {/* <img src="/punkies-logo.png" /> */}
              <h1>Punkies & Cerebro</h1>
            </ImagePaddingMobile>
            {/* </a> */}
          </Link>
        </MobileLogo>
        <Hamburger />
      </MobileNav>
      {/*  Mobile  */}
    </>
  )
}

export default Navigation

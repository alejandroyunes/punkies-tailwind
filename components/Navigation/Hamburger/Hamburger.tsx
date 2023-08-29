import { useState } from "react"
import Link from "next/link"

import {
  Menu,
  Links,
  HamburgerMenu,
  ThemeSwitchWrapper
} from "./index.styled"
import { ThemeSwitcher } from "../../ThemeSwitcher"

const Hamburger = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HamburgerMenu>
      <ThemeSwitchWrapper>
        <ThemeSwitcher />
      </ThemeSwitchWrapper>

      <Menu onMouseLeave={() => setMenuOpen(false)}>
        <input
          type="checkbox"
          checked={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          onChange={(e) => { }}
        />
        <span></span>
        <span></span>
        <span></span>
        <Links>
          <Link href="/">
            <li onClick={() => setMenuOpen(false)}>
              Inicio
            </li>
          </Link>
          <Link href="/eventos">
            <li onClick={() => setMenuOpen(false)}>
              Eventos
            </li>
          </Link>
          <Link href="/podcast">
            <li onClick={() => setMenuOpen(false)}>
              Podcast
            </li>
          </Link>
          <Link href="/historia">
            <li onClick={() => setMenuOpen(false)}>
              Historia
            </li>
          </Link>
          <Link href="/musica">
            <li onClick={() => setMenuOpen(false)}>
              Música
            </li>
          </Link>
          <Link href="/libros">
            <li onClick={() => setMenuOpen(false)}>
              Libros
            </li>
          </Link>
          <Link href="/tienda">
            <li onClick={() => setMenuOpen(false)}>
              Tienda
            </li>
          </Link>
          <Link href="/rnql">
            <li onClick={() => setMenuOpen(false)}>
              RNQL
            </li>
          </Link>
          <Link href="/contacto">
            <li onClick={() => setMenuOpen(false)}>
              Contacto
            </li>
          </Link>
        </Links>
      </Menu>
    </HamburgerMenu>
  )
}

export default Hamburger

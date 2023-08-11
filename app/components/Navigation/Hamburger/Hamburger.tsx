"use client"

import { useState } from "react"
import Link from "next/link"

import { HamburgerMenu, Menu, Links } from "./index.styled"
// import PlusOutlineSvg from "../../../../public/svgs/outline-plus"

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HamburgerMenu>
      <Menu onMouseLeave={() => setMenuOpen(false)}>
        <input
          type="checkbox"
          // defaultChecked={menuOpen}
          checked={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          //The onChange deletes the error message about the checked prop
          onChange={(e) => { }}
        />
        <span></span>
        <span></span>
        <span></span>
        <Links>
          <Link href="/">
            <li onClick={() => setMenuOpen(false)}>
              <a>Inicio</a>
            </li>
          </Link>
          <Link href="/eventos">
            <li onClick={() => setMenuOpen(false)}>
              <a>Eventos</a>
            </li>
          </Link>
          <Link href="/podcast">
            <li onClick={() => setMenuOpen(false)}>
              <a>Podcast</a>
            </li>
          </Link>
          <Link href="/historia">
            <li onClick={() => setMenuOpen(false)}>
              <a>Historia</a>
            </li>
          </Link>
          <Link href="/musica">
            <li onClick={() => setMenuOpen(false)}>
              <a>Música</a>
            </li>
          </Link>
          <Link href="/libros">
            <li onClick={() => setMenuOpen(false)}>
              <a>Libros</a>
            </li>
          </Link>
          <Link href="/tienda">
            <li onClick={() => setMenuOpen(false)}>
              <a>Tienda</a>
            </li>
          </Link>
          {/* <Link href="/">
            <li className="dropdown" onClick={() => setMenuOpen(false)}>
              <div className="media">
                <a>Media</a>
                <PlusOutlineSvg />
              </div>
              <div className="media-links">
                <ul>
                  <Link href="/podcast">
                    <li onClick={() => setMenuOpen(false)}>
                      <a>PodCast</a>
                    </li>
                  </Link>
                  <Link href="/rnql">
                    <li onClick={() => setMenuOpen(false)}>
                      <a>RNQL</a>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </Link> */}
          <Link href="/rnql">
            <li onClick={() => setMenuOpen(false)}>
              <a>RNQL</a>
            </li>
          </Link>

          <Link href="/contacto">
            <li onClick={() => setMenuOpen(false)}>
              <a>Contacto</a>
            </li>
          </Link>
        </Links>
      </Menu>
    </HamburgerMenu>
  )
}

export default Hamburger

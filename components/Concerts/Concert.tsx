import { useEffect, useState } from "react"
import { Wrapper } from "../Wrapper/wrapper.styled"
import { concertsData } from "./concerts-data"

import {
  Container,
  Date,
  Evento,
  Lugar,
  Precio,
  Title,
  BodyWrapper,
  DesktopWrapper,
  MobileWrapper,
  DateMobile,
  TitleDateMobile,
  DateMobileWrapper,
  ColumnData,
} from "./concerts.styled"

interface ConcertProps {
  concerts: {
    date: string
    evento: string
    lugar: string
    price: string
    fecha: string
  }[]
}

export default function Concerts() {
  const [concerts, setConcerts] = useState<ConcertProps>()

  useEffect(() => {
    return setConcerts(concertsData)
  }, [])

  return (
    <Wrapper>
      <DesktopWrapper id="eventos">
        <BodyWrapper>
          <Container>
            <Date>
              <Title>
                <h3>Fecha</h3>
              </Title>
            </Date>
            <Evento>
              <Title>
                <h3>Evento</h3>
              </Title>
            </Evento>
            <Lugar>
              <Title>
                <h3>Lugar</h3>
              </Title>
            </Lugar>
            <Precio>
              <Title>
                <h3>Precio</h3>
              </Title>
            </Precio>
          </Container>
        </BodyWrapper>

        {concerts?.concerts.map((e, i) => (
          <BodyWrapper key={i}>
            <Container>
              <Date>
                <Title>
                  <p>{e.fecha}</p>
                </Title>
              </Date>
              <Evento>
                <Title>
                  <p>{e.evento}</p>
                </Title>
              </Evento>
              <Lugar>
                <Title>
                  <p>{e.lugar}</p>
                </Title>
              </Lugar>
              <Precio>
                <Title>
                  <p>{e.price}</p>
                </Title>
              </Precio>
            </Container>
          </BodyWrapper>
        ))}
      </DesktopWrapper>

      {concerts?.concerts.map((e, i) => (
        <MobileWrapper key={i}>
          <DateMobileWrapper>
            <TitleDateMobile>
              <p>Fecha:</p>
            </TitleDateMobile>
            <DateMobile>
              <p>{e.fecha}</p>
            </DateMobile>
          </DateMobileWrapper>

          <DateMobileWrapper>
            <TitleDateMobile>
              <p>Evento: </p>
            </TitleDateMobile>
            <DateMobile>
              <p>{e.evento}</p>
            </DateMobile>
          </DateMobileWrapper>

          <DateMobileWrapper>
            <TitleDateMobile>
              <p>Lugar: </p>
            </TitleDateMobile>
            <DateMobile>
              <p>{e.lugar}</p>
            </DateMobile>
          </DateMobileWrapper>

          <DateMobileWrapper>
            <TitleDateMobile>
              <p>Precio: </p>
            </TitleDateMobile>
            <DateMobile>
              <p>{e.price}</p>
            </DateMobile>
          </DateMobileWrapper>
        </MobileWrapper>
      ))}
    </ Wrapper>
  )
}

import { FC, useMemo, useState } from "react"

import Breadcrumb from "../Breadcrumb/Breadcrumb"
import Button from "../Button/Button"
import Image from "next/image"

import {
  ItemCard,
  ItemImg,
  ItemDescription,
  ItemWrap,
  ItemWrapMobile,
} from "./libros.styled";

interface LibrosProps {
  tienda: {
    image: string;
    alt: string;
    description: string;
    pdf: string;
  }[];
}
import { librosDatos } from "./libros.datos";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Wrapper } from "../Wrapper/wrapper.styled";

const Libros: FC = () => {
  const [libros, setLibros] = useState<LibrosProps>();

  const getLibros = useMemo(() => {
    setLibros(librosDatos);
  }, []);

  return (
    <Wrapper>
      <Breadcrumb
        title="Libros"
        headerDesktop={true}
        topPadding={false}
        goBack={true}
        backMessage={"inicio"}
      />

      <ItemWrap>
        {libros?.tienda.map((e, i) => (
          <ItemCard key={i}>
            <ItemImg>
              <Image
                src={e.image}
                alt=""
                width={220}
                height={280} />
            </ItemImg>
            <ItemDescription>
              <Button buttonText="Descargar" download={true} pdf={`${e.pdf}`} />
            </ItemDescription>
            <ItemDescription>
              <h3>
                <span>{e.description}</span>
              </h3>
            </ItemDescription>
          </ItemCard>
        ))}
      </ItemWrap>

      <ItemWrapMobile>
        <Carousel showThumbs={false}>
          {libros?.tienda.map((e, i) => (
            <ItemCard key={i}>
              <ItemDescription>
                <h3>
                  <span>{e.description}</span>
                </h3>
              </ItemDescription>
              <ItemDescription>
                <Button buttonText="Descargar" download={true} pdf={e.pdf} />
              </ItemDescription>
              <ItemImg>
                <Image
                  src={e.image}
                  alt=""
                  width={360}
                  height={450} />
              </ItemImg>
            </ItemCard>
          ))}
        </Carousel>
      </ItemWrapMobile>
    </Wrapper>
  );
};

export default Libros;

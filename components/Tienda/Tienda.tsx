import { FC, useState } from "react";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import WhatAppIcon from "../../public/svgs/whatapp"
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"


import {
  BodyWrapper,
  ButtonsWrapper,
  Button,
  ItemCard,
  ItemImg,
  ItemDescription,
  ItemWrap,
  ItemCardMobile,
  WhatApp,
  ItemWrapMobile
} from "./tienda.styled";
import { mockData_tiendaProps } from "./tienda-full";
import { Carousel } from "react-responsive-carousel";

const Tienda: FC = () => {
  const [categoryState, setCategoryState] = useState(0);
  const category = mockData_tiendaProps.tienda;

  const unique = category.filter(
    (e, i) => category.findIndex((obj) => obj.category === e.category) === i
  );
  const articles = category.filter((e) => e.categoryNum === categoryState);

  return (
    <>
      <BodyWrapper>
        <Breadcrumb
          title="Tienda"
          headerDesktop={true}
          topPadding={false}
          goBack={true}
          backMessage={"inicio"}
        />
        <ButtonsWrapper>
          {unique.map((e, i) => (
            <Button
              key={i}
              type="button"
              className="button"
              onClick={(e) => setCategoryState(i)}
            >
              {e.category}
            </Button>
          ))}
        </ButtonsWrapper>

        <ItemWrap>
          {articles.map((e, i) => (
            <ItemCard key={i}>
              <ItemImg>
                <Image
                  src={e.image}
                  alt=""
                  width={300}
                  height={240} />
              </ItemImg>
              <ItemDescription>
                {e.size && (
                  <h3>
                    Tallas: <span>{e.size}</span>
                  </h3>
                )}
              </ItemDescription>
              <ItemDescription>
                <h3>
                  Precio: <span>${e.price}</span>
                </h3>
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
          <Carousel>
            {articles &&
              articles.map((e, i) => (
                <ItemCardMobile key={i}>
                  <ItemImg>
                    <Image
                      src={e.image}
                      alt=""
                      width={180}
                      height={280} />
                  </ItemImg>
                  <ItemDescription>
                    {e.size && (
                      <h3>
                        Tallas: <span>{e.size}</span>
                      </h3>
                    )}
                  </ItemDescription>
                  <ItemDescription>
                    <h3>
                      Precio: <span>${e.price}</span>
                    </h3>
                  </ItemDescription>
                  <ItemDescription>
                    <h3>
                      <span>{e.description}</span>
                    </h3>
                  </ItemDescription>
                </ItemCardMobile>
              ))}
          </Carousel>
        </ItemWrapMobile> 
      </BodyWrapper>
      <WhatApp>
        <Link
          href="https://wa.me/+573205802590"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatAppIcon />
        </Link>
      </WhatApp>
    </>
  );
};

export default Tienda;

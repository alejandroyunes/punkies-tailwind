import { FC } from "react";

import { FullWrapper, Wrapper, WrapperChild } from "./rnql.styled";

import { RnqlData } from "./data";
import Link from "next/link";
import YoutubeRed from "../../public/svgs/youtube-icon";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
const Rnql: FC = () => {
  return (
    <>
      <FullWrapper>
        <Breadcrumb
          breadcrumId="pyc-discography"
          title="RNQL"
          headerDesktop={true}
          topPadding={false}
          goBack={true}
          backMessage={"volver"}
        />
        <Wrapper>
        <WrapperChild>
              <Link target="_blank" href="https://www.youtube.com/watch?v=gZeciffSmxs">
                <img src="https://res.cloudinary.com/dswubnbqj/image/upload/v1693447737/rqnl/sopa_u4eg5x.webp" alt="nuevo tema de rqnl - punkies y cerebro" />
                <YoutubeRed />
              </Link>
          </WrapperChild>
          <WrapperChild>
              <Link target="_blank" href="https://www.youtube.com/watch?v=S5LYn_ebdxs">
                <img src="https://res.cloudinary.com/dswubnbqj/image/upload/v1693447737/rqnl/sortilegio_umy7ju.webp" alt="" />
                <YoutubeRed />
              </Link>
          </WrapperChild>
          <WrapperChild>
            <Link href="https://www.youtube.com/watch?v=nYcgdKdE7fw" target="_blank">
                <img src="https://res.cloudinary.com/dswubnbqj/image/upload/v1693447745/rqnl/nada-vale-lagrimas_ka43lc.webp" alt="" />
                <YoutubeRed />
            </Link>
          </WrapperChild>

        </Wrapper>
      </FullWrapper>
    </>
  );
};

export default Rnql;

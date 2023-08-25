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
                <img src="/sopa.webp" alt="nuevo tema de rqnl - punkies y cerebro" />
                <YoutubeRed />
              </Link>
          </WrapperChild>
          <WrapperChild>
              <Link target="_blank" href="https://www.youtube.com/watch?v=S5LYn_ebdxs">
                <img src="/sortilegio.webp" alt="" />
                <YoutubeRed />
              </Link>
          </WrapperChild>
          <WrapperChild>
            <Link href="https://www.youtube.com/watch?v=nYcgdKdE7fw" target="_blank">
                <img src="/nada-vale-lagrimas.webp" alt="" />
                <YoutubeRed />
            </Link>
          </WrapperChild>

        </Wrapper>
      </FullWrapper>
    </>
  );
};

export default Rnql;

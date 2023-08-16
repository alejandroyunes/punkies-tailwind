import { FC } from "react";
import Arrow from "../../public/svgs/arrow";
import { useRouter } from "next/router";

import {
  Title,
  FullWrapper,
  TitleWrapper,
  RedLineDesktop,
  GoBackWrapper,
  ArrowContent,
  GoBack,
} from "./breadcrumb.styled";

interface BreadProps {
  title?: string | string[];
  goBack?: boolean;
  headerDesktop: boolean;
  topPadding: boolean;
  backMessage: string;
  breadcrumId?: string;
}

const Breadcrumb: FC<BreadProps> = ({
  title,
  goBack,
  backMessage,
  breadcrumId,
}) => {
  const router = useRouter()
  return (
    <FullWrapper>
      <RedLineDesktop />

      <TitleWrapper id={breadcrumId}>
        <Title>
          <h1>{title}</h1>
        </Title>
          {!!goBack && (
            <GoBackWrapper onClick={() => router.back()}>
              <ArrowContent>
                <Arrow />
              </ArrowContent>
              <GoBack>{backMessage}</GoBack>
            </GoBackWrapper>
          )}
      </TitleWrapper>
    </FullWrapper>
  );
};

export default Breadcrumb;

import { FC, useMemo } from "react";

import { TitleWrapper } from "./contactoFooter.styled";

const ContactFooter: FC = () => {

  let date = new Date().getFullYear();

  return (
    <>
      <TitleWrapper id="contacto">
        <p>Punkies y Cerebro {date} </p>
      </TitleWrapper>
    </>
  );
};
export default ContactFooter;

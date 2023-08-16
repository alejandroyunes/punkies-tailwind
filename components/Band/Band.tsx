import { FC } from "react";
import Image from "next/image";
import { Wrapper, InnerWrapper, BandMember, Img, Text } from "./band.styled";
import data from "./datos-band";
const Band: FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        {data.members.map((e, i) => (
          <BandMember key={i}>
            <Img>
              <Image
               src={e.img}
                alt={e.alt}
                width={300}
                height={380}
                 />
            </Img>
            <Text>
              <p>{e.name}</p>
            </Text>
            <Text>
              <p>{e.description}</p>
            </Text>
          </BandMember>
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};
export default Band;

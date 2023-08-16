import { SliderContainer, SliderContainerMobile } from "./slider.styled"
import { SliderMobileProps, SliderProps } from "./sliderData"
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { Wrapper } from "../Wrapper/wrapper.styled"

export default function Slider() {
  return (
    <Wrapper>
      <SliderContainer>
        <Carousel
          showThumbs={false}
        >
          {SliderProps.images.map((img) => (
            <div key={img.alt}>
              <Image src={img.path} width={img.width} height={img.height} alt={img.alt} />
            </div>
          ))}
        </Carousel>
      </SliderContainer>

      <SliderContainerMobile>
        <Carousel
          showThumbs={false}
        >
          {SliderMobileProps.images.map((img) => (
            <div key={img.alt}>
              <Image src={img.path} width={img.width} height={img.height} alt={img.alt} />
            </div>
          ))}
        </Carousel>
      </SliderContainerMobile>
    </Wrapper>
  )
}
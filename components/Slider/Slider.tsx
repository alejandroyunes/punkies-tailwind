import { SliderContainer, SliderContainerMobile } from './slider.styled'
import { SliderMobileProps, SliderProps } from './sliderData'
import { Wrapper } from '../Wrapper/wrapper.styled'
import Carousel from '../Carousel'

export default function Slider() {
  return (
    <Wrapper>
      <SliderContainer>
        <Carousel images={SliderProps.images} />
      </SliderContainer>

      <SliderContainerMobile>
        <Carousel images={SliderMobileProps.images} />
      </SliderContainerMobile>
    </Wrapper>
  )
}
import image_one_desktop from '../../public/slider/merch-slide.webp'
import image_two_desktop from '../../public/slider/cd.webp'
import image_one_mobile from '../../public/slider/merchMobile.webp'
import image_two_mobile from '../../public/slider/cdmobile.webp'
import { StaticImageData } from 'next/image'

type SliderTypes = {
  images: {
    path: StaticImageData
    alt: string
    width: number
    height: number
  }[]
}

export const SliderProps: SliderTypes = {
  images: [
    {
      path: image_one_desktop,
      alt: "Mercancia, camisetas, busos, vasos, destapadores punkies y cerebro",
      width: 1280,
      height: 400
    },
    {
      path: image_two_desktop,
      alt: "cd exclusivo de punkies y cerebro",
      width: 1280,
      height: 400
    },
  ]
}

export const SliderMobileProps: SliderTypes = {
  images: [
    {
      path: image_one_mobile,
      alt: "Mercancia, camisetas, busos, vasos, destapadores punkies y cerebro",
      width: 360,
      height: 450,
    },
    {
      path: image_two_mobile,
      alt: "cd exclusivo de punkies y cerebro",
      width: 360,
      height: 450
    },
  ]
}
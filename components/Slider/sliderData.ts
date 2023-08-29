type SliderTypes = {
  images: {
    path: string
    alt: string
    width: number
    height: number
  }[]
}

export const SliderProps: SliderTypes = {
  images: [
    {
      path: 'https://res.cloudinary.com/dswubnbqj/image/upload/v1693279386/slider/dchn0928edddyugaisil.webp',
      alt: "Mercancia, camisetas, busos, vasos, destapadores punkies y cerebro",
      width: 1280,
      height: 400
    },
    {
      path: 'https://res.cloudinary.com/dswubnbqj/image/upload/v1693279386/slider/ny28trdaz3xrh9neydyw.webp',
      alt: "cd exclusivo de punkies y cerebro",
      width: 1280,
      height: 400
    },
  ]
}

export const SliderMobileProps: SliderTypes = {
  images: [
    {
      path: 'https://res.cloudinary.com/dswubnbqj/image/upload/v1693279386/slider/hkyi20cprwtk1ucchcoq.webp',
      alt: "Mercancia, camisetas, busos, vasos, destapadores punkies y cerebro",
      width: 360,
      height: 450,
    },
    {
      path: 'https://res.cloudinary.com/dswubnbqj/image/upload/v1693279386/slider/qq137nsvlnuujewlnbuy.webp',
      alt: "cd exclusivo de punkies y cerebro",
      width: 360,
      height: 450
    },
    {
      path: 'https://res.cloudinary.com/dswubnbqj/image/upload/v1693280294/slider/vt3xhne2e19t4rdiyv4q.webp',
      alt: "cd exclusivo de punkies y cerebro",
      width: 360,
      height: 420
    },
  ]
}
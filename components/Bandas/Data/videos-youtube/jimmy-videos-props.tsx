interface MultimediaProps {
  items: {
    description: string;
    image: {
      url: string;
    };
    title: string;
    youtube: string;
  }[];
}

export const jimmyVideosProps: MultimediaProps = {
  items: [
    {
      title: "Canciones de manicomio",
      description:
        "Es insoportable la realidad del sanatorio; para entrar alli hay que estar, no cuerdo y es como dijera JJ, para enloquecerse hay que tener una pizca de cerebro.",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692229163/manicomio_ix4d8o.webp",
      },
      youtube: "https://www.youtube.com/embed/u8UWqa4dgBQ",
    },
    {
      title: "Humores",
      description:
        "Ilustración: Eccehomo basado en Caras grotescas de Leonardo D'Vinci.",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692229163/humores_f48nx2.webp",
      },
      youtube: "https://www.youtube.com/embed/RXfUxuvC6tg",
    },
    {
      title: "Dies Irae",
      description: "Producido por Malopters Records.",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692229163/dies_gzrxpr.webp",
      },
      youtube: "https://www.youtube.com/embed/FUckxc3yYFg",
    },
    {
      title: "En Obra Negra",
      description: "Producido por Malopters Records.",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692229163/obra_de3w5j.webp",
      },
      youtube: "https://www.youtube.com/embed/tqY11ivqrdo",
    },
    {
      title: "GP Unpunked",
      description: "Punk Acústico Negro / Malopters Records.",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692229163/manicomio_ix4d8o.webp",
      },
      youtube: "https://www.youtube.com/embed/yIhF85k5DL8",
    },
    {
      title: "Resistiré",
      description: "Canciones populares vueltas mierda.",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692229163/resistire_hgmkpy.webp",
      },
      youtube: "https://www.youtube.com/embed/AsMKE1TaN1Y",
    },
  ],
};

interface MultimediaProps {
  videos: {
    description: string;
    image: {
      url: string;
    };
    title: string;
    youtube: string;
  }[];
}

export const jimmyVideosProps: MultimediaProps = {
  videos: [
    {
      title: "Canciones de manicomio",
      description:
        "Es insoportable la realidad del sanatorio; para entrar alli hay que estar, no cuerdo y es como dijera JJ, para enloquecerse hay que tener una pizca de cerebro.",
      image: {
        url: "/resources/multimedia/jimmy-youtube-thumbnails/manicomio.webp",
      },
      youtube: "https://www.youtube.com/embed/u8UWqa4dgBQ",
    },
    {
      title: "Humores",
      description:
        "Ilustración: Eccehomo basado en Caras grotescas de Leonardo D'Vinci.",
      image: {
        url: "/resources/multimedia/jimmy-youtube-thumbnails/humores.webp",
      },
      youtube: "https://www.youtube.com/embed/RXfUxuvC6tg",
    },
    {
      title: "Dies Irae",
      description: "Producido por Malopters Records.",
      image: {
        url: "/resources/multimedia/jimmy-youtube-thumbnails/dies.webp",
      },
      youtube: "https://www.youtube.com/embed/FUckxc3yYFg",
    },
    {
      title: "En Obra Negra",
      description: "Producido por Malopters Records.",
      image: {
        url: "/resources/multimedia/jimmy-youtube-thumbnails/obra.webp",
      },
      youtube: "https://www.youtube.com/embed/tqY11ivqrdo",
    },
    {
      title: "GP Unpunked",
      description: "Punk Acústico Negro / Malopters Records.",
      image: {
        url: "/resources/multimedia/jimmy-youtube-thumbnails/unpunked.webp",
      },
      youtube: "https://www.youtube.com/embed/yIhF85k5DL8",
    },
    {
      title: "Resistiré",
      description: "Canciones populares vueltas mierda.",
      image: {
        url: "/resources/multimedia/jimmy-youtube-thumbnails/resistire.webp",
      },
      youtube: "https://www.youtube.com/embed/AsMKE1TaN1Y",
    },
  ],
};

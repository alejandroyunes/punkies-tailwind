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

export const gpVideosProps: MultimediaProps = {
  videos: [
    {
      title: "Festival Campo Valdes",
      description: "G.P. en vivo Festival Campo Valdes.",
      image: {
        url: "/resources/multimedia/gp-youtube-thumbnails/campo.jpeg",
      },
      youtube: "https://www.youtube.com/embed/wtamejQ6Kvg",
    },
    {
      title: "El Analista",
      description: "Recuerdos de la grabación de: G.P. Para la sociedad 1995.",
      image: {
        url: "/resources/multimedia/gp-youtube-thumbnails/oscar.jpeg",
      },
      youtube: "https://www.youtube.com/embed/UYS1rQZmzjQ",
    },
    {
      title: "Ciencia Asesina",
      description: "Campo Valdez - Medellín - 1996.",
      image: {
        url: "/resources/multimedia/gp-youtube-thumbnails/ciencia.jpeg",
      },
      youtube: "https://www.youtube.com/embed/bWGYLRpiiKY",
    },
    {
      title: "Pintura de guerra",
      description: "Álbum Completo (1997).",
      image: {
        url: "/resources/multimedia/gp-youtube-thumbnails/pintura.jpeg",
      },
      youtube: "https://www.youtube.com/embed/6tf5PUuvyRI",
    },
    {
      title: "Con las manos arriba",
      description: "Álbum Completo (1993).",
      image: {
        url: "/resources/multimedia/gp-youtube-thumbnails/manos.jpeg",
      },
      youtube: "https://www.youtube.com/embed/GcovpYrDbns",
    },
    {
      title: "Concierto Para Delinkir",
      description: "Álbum Completo (1999).",
      image: {
        url: "/resources/multimedia/gp-youtube-thumbnails/koncierto.jpeg",
      },
      youtube: "https://www.youtube.com/embed/32sd7buyiGA",
    },
  ],
};

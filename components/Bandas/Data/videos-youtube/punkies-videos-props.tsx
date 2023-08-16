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

export const punkiesVideosProps: MultimediaProps = {
  videos: [
    {
      title: "Relámpagos",
      description:
        'Canción extraída del disco "Cualquier Parecido con la Realidad es Pura Coincidencia" Malopters Records 2018.',
      image: {
        url: "/resources/multimedia/punkies-youtube-thumbnails/relampagos.webp",
      },
      youtube: "https://www.youtube.com/embed/MUQricykt0Q",
    },
    {
      title: "Epidemia",
      description:
        'Álbum: "Cualquier Parecido Con La Realidad Es Pura Coincidencia".',
      image: {
        url: "/resources/multimedia/punkies-youtube-thumbnails/epidemia.webp",
      },
      youtube: "https://www.youtube.com/embed/0jMGmvkD1ZU",
    },
    {
      title: "La patria boba",
      description:
        'Álbum: "Cualquier Parecido Con La Realidad Es Pura Coincidencia."',
      image: {
        url: "/resources/multimedia/punkies-youtube-thumbnails/la-patria.webp",
      },
      youtube: "https://www.youtube.com/embed/r5Lod1yJUsY",
    },
    {
      title: "Los Críticos",
      description: "De G.P. para la sociedad.",
      image: {
        url: "/resources/multimedia/punkies-youtube-thumbnails/los-critico.webp",
      },
      youtube: "https://www.youtube.com/embed/t01cE1t4twY",
    },
    {
      title: "Bodas de Sangre",
      description:
        "Bodas de Sangre de Regreso a Bogotá. 1 de Abril 2017 en Cadillac Sala.",
      image: {
        url: "/resources/multimedia/punkies-youtube-thumbnails/bodas.webp",
      },
      youtube: "https://www.youtube.com/embed/MFkYH3_U6o0",
    },
    {
      title: "Dima",
      description:
        "Dima y Nueva esperanza en la 4 sur Medellín - Colombia 24 junio 2021 - Protesta social.",
      image: {
        url: "/resources/multimedia/punkies-youtube-thumbnails/dima.webp",
      },
      youtube: "https://www.youtube.com/embed/J3pGvWvl4vA",
    },
  ],
};

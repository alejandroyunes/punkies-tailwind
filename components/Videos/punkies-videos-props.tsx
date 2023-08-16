import { StaticImageData } from 'next/image';
import imageOne from '../../public/multimedia/punkies-youtube-thumbnails/relampagos.webp'
import imageTwo from '../../public/multimedia/punkies-youtube-thumbnails/epidemia.webp'
import imageThree from '../../public/multimedia/punkies-youtube-thumbnails/la-patria.webp'
import imageFour from '../../public/multimedia/punkies-youtube-thumbnails/los-critico.webp'
import imageFive from '../../public/multimedia/punkies-youtube-thumbnails/bodas.webp'
import imageSix from '../../public/multimedia/punkies-youtube-thumbnails/dima.webp'

export interface PunkiesVideosProps {
  items: {
    title: string
    description: string
    image: {
      url: StaticImageData
    }
    youtube: string
  }[],
}

export const punkiesVideosProps: PunkiesVideosProps = {
  items: [
    {
      title: "Relámpagos",
      description:
        'Canción extraída del disco "Cualquier Parecido con la Realidad es Pura Coincidencia" Malopters Records 2018.',
      image: {
        url: imageOne,
      },
      youtube: "https://www.youtube.com/embed/MUQricykt0Q",
    },
    {
      title: "Epidemia",
      description:
        'Álbum: "Cualquier Parecido Con La Realidad Es Pura Coincidencia".',
      image: {
        url: imageTwo,
      },
      youtube: "https://www.youtube.com/embed/0jMGmvkD1ZU",
    },
    {
      title: "La patria boba",
      description:
        'Álbum: "Cualquier Parecido Con La Realidad Es Pura Coincidencia."',
      image: {
        url: imageThree
      },
      youtube: "https://www.youtube.com/embed/r5Lod1yJUsY",
    },
    {
      title: "Los Críticos",
      description: "De G.P. para la sociedad.",
      image: {
        url: imageFour
      },
      youtube: "https://www.youtube.com/embed/t01cE1t4twY",
    },
    {
      title: "Bodas de Sangre",
      description:
        "Bodas de Sangre de Regreso a Bogotá. 1 de Abril 2017 en Cadillac Sala.",
      image: {
        url: imageFive
      },
      youtube: "https://www.youtube.com/embed/MFkYH3_U6o0",
    },
    {
      title: "Dima",
      description:
        "Dima y Nueva esperanza en la 4 sur Medellín - Colombia 24 junio 2021 - Protesta social.",
      image: {
        url: imageSix
      },
      youtube: "https://www.youtube.com/embed/J3pGvWvl4vA",
    },
  ],
};

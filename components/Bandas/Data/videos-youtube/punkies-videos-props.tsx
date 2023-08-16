export interface PunkiesVideosProps {
    items: {
      title: string
      description: string
      image: {
        url: string;
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
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692218445/relampagos_abidsv.webp",
        },
        youtube: "https://www.youtube.com/embed/MUQricykt0Q",
      },
      {
        title: "Epidemia",
        description:
          'Álbum: "Cualquier Parecido Con La Realidad Es Pura Coincidencia".',
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692218445/epidemia_htaw07.webp",
        },
        youtube: "https://www.youtube.com/embed/0jMGmvkD1ZU",
      },
      {
        title: "La patria boba",
        description:
          'Álbum: "Cualquier Parecido Con La Realidad Es Pura Coincidencia."',
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692218445/la-patria_urhlrg.webp"
        },
        youtube: "https://www.youtube.com/embed/r5Lod1yJUsY",
      },
      {
        title: "Los Críticos",
        description: "De G.P. para la sociedad.",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692218445/los-critico_eoz4zj.webp"
        },
        youtube: "https://www.youtube.com/embed/t01cE1t4twY",
      },
      {
        title: "Bodas de Sangre",
        description:
          "Bodas de Sangre de Regreso a Bogotá. 1 de Abril 2017 en Cadillac Sala.",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692218445/bodas_rtbbqb.webp"
        },
        youtube: "https://www.youtube.com/embed/MFkYH3_U6o0",
      },
      {
        title: "Dima",
        description:
          "Dima y Nueva esperanza en la 4 sur Medellín - Colombia 24 junio 2021 - Protesta social.",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692218445/dima_gloljf.webp"
        },
        youtube: "https://www.youtube.com/embed/J3pGvWvl4vA",
      },
    ],
  };
  
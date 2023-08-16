export interface IAlbum {
    albums: {
      band: string;
      title?: string;
      image: {
        url: string;
    };
      alt: string;
      description?: string;
      year: string;
      slug: string;
      album: string;
      comparedAlbum: string;
    }[];
}

export const punkiesProps: IAlbum = {
  albums: [
    {
      band: "punkies",
      title: "Punkies y Cerebro",
      year: "2018",
      image: {
        url: 'https://res.cloudinary.com/dswubnbqj/image/upload/v1692172535/cualquier_cjqzxp.jpg',
      },
      description: "Cualquier Parecido Con La Realidad Es Pura Coincidencia",
      alt: "caratula cualquier parecido con la realidad es pura coincidencia",
      slug: "cualquier-parecido-con-la-realidad-es-pura-coincidencia",
      album: "Cualquier Parecido Con La Realidad Es Pura Coincidencia",
      comparedAlbum: "cualquier parecido con la realidad es pura coincidencia",
    },
    {
      band: "punkies",
      title: "Punkies y Cerebro",
      year: "2006",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1634372922/discos_black_693f3201ea.jpg",
      },
      description: "Demo Punkies y Cerebro",
      alt: "caratula demo punkies y cerebro ",
      slug: "demo-punkies",
      album: "Demo Punkies",
      comparedAlbum: "demo punkies",
    },
    {
      band: "punkies",
      title: "Punkies y Cerebro",
      year: "2008",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1634372922/discos_punkies_a_la_escuela_50badbe41a.jpg",
      },
      description: "Punkies a la Escuela",
      alt: "caratula punkies a la escuela",
      slug: "punkies-a-la-escuela",
      album: "Punkies A La Escuela",
      comparedAlbum: "punkies a la escuela",
    },
    {
      band: "gp",
      title: "GP",
      description: "La Sagrada Familia del Mal",
      year: "2008",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1634372922/discos_la_sagrada_familia_e150f84e3f.jpg",
      },
      alt: "caratula la sagrada familia del mal",
      slug: "la-sagrada-familia-del-mal",
      album: "La Sagrada Familia Del Mal",
      comparedAlbum: "la sagrada familia del mal",
    },
    {
      band: "punkies",
      title: "Punkies y Cerebro",
      year: "2009",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1634372922/discos_la_ultima_revolucion_ed0a662a2a.jpg",
      },
      description: "La Última Revolución del Punk Rock",
      alt: "caratula la última revolución del punk rock",
      slug: "la-ultima-revolucion-del-punk-rock",
      album: "La Última Revolución Del Punk Rock",
      comparedAlbum: "la ultima revolucion del punk rock",
    },
    {
      band: "punkies",
      title: "Punkies y Cerebro",
      year: "2012",
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1634372922/discos_kratos_904b99338a.jpg",
      },
      description: "Demo Kratos",
      alt: "caratula demo kratos",
      slug: "demo-kratos",
      album: "Demo Kratos",
      comparedAlbum: "demo kratos",
    },
    ],
};

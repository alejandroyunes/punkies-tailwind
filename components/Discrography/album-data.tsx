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

export const albumProps: IAlbum = {
  albums: [
      {
        band: "punkies",
        title: "Punkies y Cerebro",
        year: "2018",
        image: {
          url: "/resources/discos-jpg/cualquier.jpeg",
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
      {
        band: "gp",
        title: "GP",
        year: "2000",
        alt: "caratula bodas de sangre",
        slug: "bodas-de-sangre",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646636774/bodas_de_sangre_fc538fada0.jpg",
        },
        description: "Bodas de Sangre",
        album: "Bodas De Sangre",
        comparedAlbum: "bodas de sangre",
      },
      {
        band: "gp",
        title: "GP",
        slug: "con-las-manos-arriba",
        alt: "caratula con las manos arriba",
        year: "1993",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646636850/con_las_manos_arriba_c2c78b8d4a.jpg",
        },
        description: "Con las Manos Arriba",
        album: "Con Las Manos Arriba",
        comparedAlbum: "con las manos arriba",
      },
      {
        band: "gp",
        year: "2005",
        title: "GP",
        alt: "caratula crimenes de lesa humanidad",
        slug: "crimenes-de-lesa-humanidad",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646636915/crimenes_de_lesa_humanidad_60e6ca1989.jpg",
        },
        album: "Crímenes De Lesa Humanidad",
        description: "Con las Manos Arriba",
        comparedAlbum: "crimenes de lesa humanidad",
      },
      {
        band: "gp",
        title: "GP",
        year: "1993",
        alt: "caratula aquí no se mueve nadie",
        slug: "aqui-no-se-mueve-nadie",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646637101/de_aqui_no_se_mueve_nadie_151efe29f8.jpg",
        },
        description: "de Aquí no se mueve nadie",
        album: "Aquí No Se Mueve Nadie",
        comparedAlbum: "aqui no se mueve nadie",
      },
      {
        band: "gp",
        title: "GP",
        alt: "caratula de gp para la sociedad",
        slug: "de-gp-para-la-sociedad",
        year: "1998",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646637184/de_gp_para_la_sociedad_557ee26b20.jpg",
        },
        album: "De GP Para La Sociedad",
        comparedAlbum: "de gp para la sociedad",
      },
      {
        band: "gp",
        year: "1999",
        alt: "caratula koncierto para delinkir",
        slug: "koncierto-para-delinkir",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646637369/koncierto_para_delinkir_43d28603f3.jpg",
        },
        album: "Koncierto Para Delinkir",
        comparedAlbum: "koncierto para delinkir",
      },
      {
        band: "gp",
        year: "2000",
        alt: "caratula los pecados capitales",
        slug: "los-pecados-capitales",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646637412/los_pecados_capitales_bd51bab522.jpg",
        },
        album: "Los Pecados Capitales",
        comparedAlbum: "los pecados capitales",
      },
      {
        band: "gp",
        alt: "caratula pintura de guerra",
        year: "1997",
        slug: "pintura-de-guerra",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646637477/pintura_de_guerra_d1cb15feed.jpg",
        },
        album: "Pintura De Guerra",
        comparedAlbum: "pintura de guerra",
      },
      {
        band: "jimmy",
        year: "2017",
        slug: "todas-las-cartas-sobre-la-mesa",
        alt: "caratula todas las cartas sobre la mesa",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646638352/todas_las_cartas_sobre_la_mesa_649e3c648d.jpg",
        },
        album: "Todas Las Cartas Sobre La Mesa",
        comparedAlbum: "todas las cartas sobre la mesa",
      },
      {
        band: "jimmy",
        slug: "plegarias",
        alt: "caratula plegarias",
        year: "2017",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646638400/plegarias_8d0f2dd186.jpg",
        },
        album: "Plegarias",
        comparedAlbum: "plegarias",
      },
      {
        band: "jimmy",
        alt: "ideas de amor y muerte",
        slug: "ideas-de-amor-y-muerte",
        year: "2017",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646638468/ideas_de_amor_y_muerte_ebe73efa41.jpg",
        },
        album: "Ideas De Amor Y Muerte",
        comparedAlbum: "ideas de amor y muerte",
      },
      {
        band: "jimmy",
        year: "2021",
        slug: "humores",
        alt: "caratula humores",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646638648/humores_85553893f9.jpg",
        },
        album: "Humores",
        comparedAlbum: "humores",
      },
      {
        band: "jimmy",
        year: "2017",
        alt: "caratula en obra negra",
        slug: "en-obra-negra",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646638680/en_obra_negra_25597d0523.jpg",
        },
        album: "En Obra Negra",
        comparedAlbum: "en obra negra",
      },
      {
        band: "jimmy",
        year: "2018",
        alt: "caratula en la sima",
        slug: "en-la-sima",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1647161206/en_la_sima_4a7c06d030.jpg",
        },
        album: "En la sima",
        comparedAlbum: "en la sima",
      },
      {
        band: "jimmy",
        year: "2017",
        alt: "caratula dies irae",
        slug: "dies-irae",
        image: {
          url: "resources/discos-jpg/dies-jimmy.webp",
        },
        album: "Dies Irae",
        comparedAlbum: "dies irae",
      },
      {
        band: "jimmy",
        year: "2017",
        alt: "unpunked",
        slug: "ununked",
        image: {
          url: "/resources/discos-jpg/unpunked-jimmy-jazz.webp",
        },
        album: "Unpunked",
        comparedAlbum: "unpunked",
      },
      {
        band: "jimmy",
        year: "2017",
        alt: "jingles",
        slug: "jingles",
        image: {
          url: "/resources/discos-jpg/jingles-jimmy.webp",
        },
        album: "Unpunked",
        comparedAlbum: "unpunked",
      },
      {
        band: "jimmy",
        year: "2004",
        alt: "el mismo dolor de cabeza",
        slug: "el-mismo-dolor-de-cabeza",
        image: {
          url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1646638927/el_mismo_dolor_de_cabeza_260958f398.jpg",
        },
        album: "El Mismo Dolor De Cabeza",
        comparedAlbum: "el mismo dolor de cabeza",
      },
    ],
};

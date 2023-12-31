interface BandHistoryProps {
  bands: {
    description: string;
    imgUrl: string;
    imgAlt: string;
    viewMoreURL: string;
    fullDiscographyURL: string;
  }[];
}
export const fullBandHistoryProps: BandHistoryProps = {
  bands: [
    {
      description:
        "G.P. fue fudanda en Medellín en 1984 por Jaime Lopez (bajo, voz) y Óscar Roldán (batería). En 1988 Mauricio Gómez toma la primera guitarra, tiempo después Guillermo Arroyave un incansable colaborador y Diego Rodríguez (segunda guitarra) se unen en el año 2001. Esta línea permanece constante hasta Octubre del año 2006 cuando Jaime López; voz, bajo y cofundador, se retira de la banda. El miércoles 23 de julio de 2008 me llamaron de Bogotá preguntándome por las consecuencias de la separación de GP en cuanto a los integrantes restantes y, qué las cosas que se decían y, que el otro grupo que se hace llamar Genoma Punk… Yo entendí que se había de contar esta historia que les voy a relatar, historia para los que estén interesados en saber la verdad de mis labios, de mi puño y letra.",
      imgAlt: "G.P. para la sociedad en sus inicios",
      imgUrl: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692215736/gp-band_x2i40l.jpg",
      viewMoreURL: "/libros",
      fullDiscographyURL: "/musica",
    },
    {
      description:
        "Esta historia corre alrededor de la comunidad en la que Juan Camilo Restrepo en diciembre de 2005 solicita la creación de una nueva banda para decir lo que a bien nos diera la gana; la propuesta recibida por Jaime López “Jimmy Jazz” (vocalista, bajista y autor del 98% de las canciones de G.P.) no se hace esperar y se proponen arrancar en enero de 2006, Juan Camilo decide llamar a los integrantes que antes militaban en Diskordia en la misma formación con la diferencia que Diego Soto deja el bajo a un lado para que Jaime López se encargue de el junto a la voz y entonces quedan Neyger Zapata y Diego Soto en las guitarras, Juan Camilo en la batería y Jaime en el bajo y la voz y ensayando bajo la sombra de GP.",
      imgAlt: "Punkies y Cerebro banda en vivo",
      imgUrl: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692215736/pyc_s8xelm.jpg",
      viewMoreURL: "/bandas/historia/punkies-y-cerebro",
      fullDiscographyURL: "/musica",
    },
    {
      description:
        "Jaime López conocido como Jimmy Jazz, el cantautor y profesor lleva más de 34 años expresando sus criticas y vivencias a través del punk. Jimmy encuentra en la literatura y el punk forma expresarse con mayor facilidad. Expresar desde un punto crítico las vivencias cotidianas de un país donde los escenarios de violencia, desigualdad social, abusos políticos, religiosos y militar se exhiben día a día.",
      imgAlt: "Jimmy Jazz foto perfil",
      imgUrl: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692215736/jimmy-jazz_yas16c.jpg",
      viewMoreURL: "/bandas/historia/jimmy-jazz",
      fullDiscographyURL: "/musica",
    },
  ],
};

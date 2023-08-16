interface HistoriaBandasProps {
  bands: {
    image: string;
    alt: string;
    description: string;
    url: string;
    link: string;
    band: string;
    topPadding: boolean;
    goBack: boolean;
  }[];
}

export const briefBandHistoryProps: HistoriaBandasProps = {
  bands: [
    {
      image: "/gp-band.jpg",
      alt: "GP foto grupo 1984",
      description:
        "G.P. fue fudanda en Medellín en 1984 por Jaime Lopez (bajo, voz) y Óscar Roldán (baterista); En 1988 Mauricio Gómez toma la primera guitarra, tiempo después Guillermo Arroyave un incansable colaborador y Diego Rodríguez (segunda guitarra) se unen en el año 2001.",
      url: "/",
      link: "/bandas/gp",
      band: "GP",
      topPadding: false,
      goBack: true,
    },
    {
      image: "/pyc.jpg",
      alt: "Punkies y cerebro foto grupo 2021",
      description:
        "Esta historia corre alrededor de la comunidad en la que Juan Camilo Restrepo en diciembre de 2005 solicita la creación de una nueva banda para decir lo que a bien nos diera la gana; la propuesta recibida por Jaime López no se hace esperar y se proponen arrancar.",
      url: "/",
      link: "/bandas/pyc",
      band: "Punkies y Cerebro",
      topPadding: true,
      goBack: false,
    },
    {
      image: "/jimmy-jazz.jpg",
      alt: "Foto perfil Jimmy jazz - gran cherokee",
      description:
        "Jaime López conocido como Jimmy Jazz, el cantautor y profesor lleva más de 34 años expresando sus criticas y vivencias a través del punk. Jimmy encuentra en la literatura y el punk forma expresarse con mayor facilidad. Expresar desde un punto crítico las vivencias cotidianas de un país donde los escenarios de violencia, desigualdad social, abusos políticos, religiosos y militar se exhiben día a día.",
      url: "/",
      link: "/bandas/jimmy-jazz",
      band: "Jimmy Jazz",
      topPadding: true,
      goBack: false,
    },
  ],
};

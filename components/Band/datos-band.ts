interface BandMembers {
  members: {
    name: string;
    description: string;
    img: string;
    alt: string;
  }[];
}

export const dataBandProps: BandMembers = {
  members: [
    {
      name: "Juan Camilo Restrepo",
      description: "Batería y Coros",
      img: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692224705/camilo-contact_dwjctf.webp",
      alt: "Baterista de Punkies Y Cerebro",
    },
    {
      name: "Jimmy Jazz",
      description: "Voz y Bajo",
      img: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692224705/jimmy-contact_f6ihgx.webp",
      alt: "Jimmy Jazz - Jaime López Punkie Gp",
    },
    {
      name: "Erich Hernández",
      description: "Guitarra y Coros",
      alt: "Guitarra lider de Punkies Y Cerebro",
      img: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692224705/erich-contact_mxeylc.webp",
    },
    {
      name: "Alejandro Yunes",
      description: "Guitarra y Coros",
      alt: "Guitarra Rítmica de Punkies Y Cerebro",
      img: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692224705/alejo-contact_zz2tgx.webp",
    },
  ],
};

export default dataBandProps;

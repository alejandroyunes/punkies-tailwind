import image from "next/image";

interface RnqlProps {
  media?: {
    image: {
      url: string;
    };
    id?: number;
    title?: string;
    description?: string;
    date?: Date;
    readMore?: string;
    youtube?: string;
  }[];
  backgroundColor?: boolean;
  seeMore?: boolean;
}

export const RnqlData: RnqlProps = {
  media: [
    {
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1693447737/rqnl/sortilegio_umy7ju.webp",
      },
      id: 0,
      title: "Sorgilegio",
      description: "",
      readMore: "",
      youtube: "https://www.youtube.com/watch?v=S5LYn_ebdxs",
    },
    {
      image: {
        url: "https://res.cloudinary.com/dswubnbqj/image/upload/v1693447745/rqnl/nada-vale-lagrimas_ka43lc.webp",
      },
      id: 1,
      title: "Nada Vale Lagrimas",
      description: "",
      readMore: "",
      youtube: "https://www.youtube.com/watch?v=nYcgdKdE7fw",
    },
  ],
};

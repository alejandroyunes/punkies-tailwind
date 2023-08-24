interface LibrosProps {
  tienda: {
    image: string;
    alt: string;
    description: string;
    pdf: string;
  }[];
}

export const librosDatos: LibrosProps = {
  tienda: [
    {
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/mjzyomb8pdwvjqamducx.webp",
      alt: "Y este es el libro nuevo cuya leyenda de resumen debe decir Escarnio matemático inigualable",
      description: "Y este es el libro nuevo cuya leyenda de resumen debe decir Escarnio matemático inigualable",
      pdf: ""
    },
    {
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/gieaw3gmzznbumelsqvc.webp",
      alt: "Furibundo compendio de métodos normalizados y analizados.",
      description: "Furibundo compendio de métodos normalizados y analizados.",
      pdf: '/librospdf/manual-del-suicida.pdf'
    },
    {
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/hlyhkdnq6nolxaitexvn.webp",
      alt: "Documentos públicos latinizados.",
      description: "Documentos públicos latinizados.",
      pdf: "/librospdf/giri.pdf"
    },
    {
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/fscdqucd7rwk1b5khph1.webp",
      alt: "Desagüe mental de adagios llenos de odio.",
      description: "Desagüe mental de adagios llenos de odio.",
      pdf: "librospdf/pildoras.pdf"
    },
    {
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/ivuwl4qbmx8pxo4i55n2.webp",
      alt: "Versión libre liberada de los archivos civiles.",
      description: "Versión libre liberada de los archivos civiles.",
      pdf: "librospdf/la-historia.pdf"
    },
    {
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/dycdzkhhst6u3vjdll80.webp",
      alt: "Libro apócrifo repleto de malas nuevas.",
      description: "Libro apócrifo repleto de malas nuevas.",
      pdf: "/librospdf/santos-disangelios.pdf"
    },
    {
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/wo83hxkpzbnur844i0as.webp",
      alt: "Poesía con acordes para guitarra.",
      description: "Poesía con acordes para guitarra.",
      pdf: "/librospdf/tabs.pdf"
    },
  ],
};

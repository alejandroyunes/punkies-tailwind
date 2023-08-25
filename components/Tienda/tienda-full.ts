interface TiendaProps {
  tienda: {
    categoryNum: number;
    category: string;
    size?: string;
    image: string;
    price: string;
    description?: string;
    alt?: string;
  }[];
}

enum categoryList {
  shirts = 0,
  sweatshirts = 1,
  cds = 2,
  accesories = 3,
}

export const mockData_tiendaProps: TiendaProps = {
  tienda: [
    {
      categoryNum: 0,
      category: "Ropa",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692987712/tienda/wedet4j4zmy7pf4a5qcx.jpg",
      size: "todas",
      price: "30k",
    },
    {
      categoryNum: 0,
      category: "Ropa",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692987711/tienda/zjnuwknjg0s5tjkf2ncx.jpg",
      size: "todas",
      price: "30k",
      
    },
    {
      categoryNum: 0,
      category: "Ropa",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692987711/tienda/ksoqb2vewqzzienxz0gr.jpg",
      size: "todas",
      price: "30k",
      
    },
    {
      categoryNum: 0,
      category: "Ropa",
      size: "s, m, l, xl",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692987711/tienda/cq2nuonwogvnhnfiw6so.jpg",
      price: "60k",
      
    },
    // // **** LIBROS **** // //
    {
      categoryNum: 1,
      category: "Libros",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/gotowjgzhbo089udowsx.webp",
      price: "50k",
      alt: "Historias de álbumes y canciones",
      description: "Historias de álbumes y canciones",
    },
    {
      categoryNum: 1,
      category: "Libros",  
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/uqvarny4qtzkj2mftkzy.webp",
      price: "30k",
      alt: "Tres librillos adicionados a operas musicales",
      description: "Tres librillos adicionados a operas musicales",
    },
    {
      categoryNum: 1,
      category: "Libros",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/gieaw3gmzznbumelsqvc.webp",
      price: "30k",
      alt: "Furibundo compendio de métodos normalizados y analizados.",
      description: "Furibundo compendio de métodos normalizados y analizados.",
    },
    {
      categoryNum: 1,
      category: "Libros",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/hlyhkdnq6nolxaitexvn.webp",
      price: "50k",
      description: "Documentos públicos latinizados",
    },
    {
      categoryNum: 1,
      category: "Libros",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/fscdqucd7rwk1b5khph1.webp",
      price: "30k",
      description: "Desagüe mental de adagios llenos de odio.",
      alt: "Desagüe mental de adagios llenos de odio.",
    },
    {
      categoryNum: 1,
      category: "Libros",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/zlw04f2d8gkwc6bs5znb.webp",
      price: "30k",
      description: "BKJ Pretencioso texto para espíritus combativos",
      alt: "BKJ Pretencioso texto para espíritus combativos"
    },
    {
      categoryNum: 1,
      category: "Libros",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/dycdzkhhst6u3vjdll80.webp",
      price: "30k",
      alt: "Libro apócrifo repleto de malas nuevas.",
      description: "Libro apócrifo repleto de malas nuevas.",
    },
    {
      categoryNum: 1,
      category: "Libros",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/wo83hxkpzbnur844i0as.webp",
      price: "50k",
      alt: "Poesía con acordes para guitarra.",
      description: "Poesía con acordes para guitarra.",
    },
    {
      categoryNum: 1,
      category: "Libros",  
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692663962/libros/ivuwl4qbmx8pxo4i55n2.webp",
      price: "30k",
      alt: "Versión libre liberada de los archivos civiles.",
      description: "Versión libre liberada de los archivos civiles.",
    },
     // // **** LIBROS **** // //
    {
      categoryNum: 2,
      category: "CDs",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692990882/cds/gfqkjaxoflxg1kwvmh4o.jpg",
      
      price: "15k",
      description: "Humores: Acústico 2021 Jimmy Jazz",
    },
    {
      categoryNum: 2,
      category: "CDs",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1693003808/cds/cdmobile_qmitcg.webp",
      
      price: "30k",
      description:
        "Reedición del primer trabajo de estudio de Punkies y Cerebro",
    },
    // {
    //   categoryNum: 3,
    //   category: "Accesorios",
    //   image: "/vaso-frente.webp",
      
    //   price: "25k",
    //   description: "Vaso cervecero",
    // },
    // {
    //   categoryNum: 3,
    //   category: "Accesorios",
    //   image: "/vaso-atras.webp",
      
    //   price: "25k",
    //   description: "Vaso cervecero con letra de Punkies",
    // },
    {
      categoryNum: 3,
      category: "Accesorios",
      image: "https://res.cloudinary.com/dswubnbqj/image/upload/v1692988221/tienda/ekaicntif8gooueskgg0.webp",
      
      price: "15k",
      description: "Destapador acero inoxidable",
    },
  ],
};

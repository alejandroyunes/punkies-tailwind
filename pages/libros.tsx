import Head from "next/head";
import Libros from "../components/Libros/Libros";

export default function Tienda() {
  return (
    <div>
      <Head>
        <title>Libros de Jimmy Jazz</title>
        <meta
          property="og:title"
          content={`Libros de Jimmy Jazz`}
        />
        <meta
          property="og:description"
          content={`Ideas y escritos de Jimmy Jazz`}
        />
        <meta
          name="keywords"
          content="Tienda, Música, Ropa, Accesorios, Productos, Punk Medallo"
        />
        <meta
          property="og:url"
          content={`https://punkiesycerebro.com/libros`}
        />
        <meta
          property="og:type"
          content="De Jimmy Jazz del punk de Medellín, Colombia"
        />
        <meta
          property="og:image"
          content="https://punkiesycerebro.com/punkieslogo.webp"
        />
      </Head>
      <Libros />
    </div>
  );
}

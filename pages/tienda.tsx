import Head from "next/head";
import TiendaComponente from "../components/Tienda/Tienda";

export default function Tienda() {
  return (
    <div>
      <Head>
        <title>Tienda Oficial de los Punkies Y Cerebro</title>
        <meta
          property="og:title"
          content={`Tienda Oficial de los Punkies Y Cerebro`}
        />
        <meta
          property="og:description"
          content={`Tienda de productos oficiales de Punkies y Cerebro`}
        />
        <meta
          name="keywords"
          content="Tienda, Música, Ropa, Accesorios, Productos, Punk Medallo"
        />
        <meta
          property="og:url"
          content={`https://punkiesycerebro.com/tienda`}
        />
        <meta
          property="og:type"
          content="Tienda, comprar productos del punk de Medellín, Colombia"
        />
        <meta
          property="og:image"
          content="https://punkiesycerebro.com/punkieslogo.webp"
        />
      </Head>
      <TiendaComponente />
    </div>
  );
}

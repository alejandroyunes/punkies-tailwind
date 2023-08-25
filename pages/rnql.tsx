import Head from "next/head";
import Rnql from "../components/Rnql/Rnql";

export default function RnqlPage() {
  return (
    <div>
      <Head>
        <title>Contacto Punkies Y Cerebro</title>
        <meta
          property="og:title"
          content={`RNQL`}
        />
        <meta
          property="og:description"
          content={`Información de contacto RNQL`}
        />
        <meta
          name="keywords"
          content="RNQL, Punkies Y Cerebro"
        />
        <meta
          property="og:url"
          content={`https://punkiesycerebro.com/rnql`}
        />
        <meta
          property="og:type"
          content="Contacto del mejor grupo de punk de Medellín, Colombia"
        />
        <meta
          property="og:image"
          content="https://punkiesycerebro.com/pyc.jpg"
        />
      </Head>
      <Rnql />
    </div>
  );
}

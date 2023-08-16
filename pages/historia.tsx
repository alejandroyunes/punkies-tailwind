import Head from "next/head";
import History from "../components/History/history"

export default function Discografia() {
  return (
    <div>
      <Head>
        <title>Historia Punkies Y Cerebro</title>
        <meta
          property="og:title"
          content={`Historia del Punk de Medellín - Punkies Y Cerebro, GP`}
        />
        <meta
          property="og:description"
          content={`Punkies Y Cerebro, GP, Jimmy Jazz, Hitoria, Música, Punk Rock, Punk Colombia`}
        />
        <meta
          name="keywords"
          content="Punk Medellín, Punk Colombia Historia, Música, Letras, Canciones"
        />
        <meta
          property="og:url"
          content={`https://punkiesycerebro.com/historia`}
        />
        <meta
          property="og:type"
          content="Historia del punk de Medellín, Colombia"
        />
        <meta
          property="og:image"
          content="https://punkiesycerebro.com/pyc.jpg"
        />
      </Head>
      <History />
    </div>
  );
}

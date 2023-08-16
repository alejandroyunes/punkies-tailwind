import Head from "next/head";
import Discography from "../../components/Discrography/Discography";

export default function Musica() {
  return (
    <div>
      <Head>
        <title>Punkies Y Cerebro</title>
        <meta name="description" content={`Todos los albumnes de GP, Jimmy Jazz, Punkies Y Cerebro`} />
        <meta name="keywords" content={`Discografía, Música, GP, Punkies Y Cerebro, Lyrics`} />
        <meta name="viewport" content={`width=device-width, initial-scale=1`} />
        <meta name="author" content={`punkie # 4`} />

        {/* Open Graph */}
        <meta property="og:title" content={`Albumnes y Letras de Punkies Y Cerebro`} key={`title`} />
        <meta property="og:description" content={`Albumnes de GP, Jimmy Jazz, Punkies Y Cerebro`} />
        <meta property="og:image" content={`https://punkiesycerebro.com/resources/slider/punkie-code-mobile.webp`}/>
        <meta property="og:locale" content="es_CO" />
        <meta property="og:url" content={`https://punkiesycerebro.com`} />
        <meta property="og:type" content="website" />
      </Head>
      <Discography />
    </div>
  );
}

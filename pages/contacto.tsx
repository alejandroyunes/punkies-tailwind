import Head from "next/head";
import Contact from "../components/Contact/Contacto";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contacto Punkies Y Cerebro</title>
        <meta
          property="og:title"
          content={`Contacto de  - Punkies Y Cerebro, GP`}
        />
        <meta
          property="og:description"
          content={`Información de contacto de Punkies y Cerebro`}
        />
        <meta
          name="keywords"
          content="Telefono, E-mail, contacto Punkies Y Cerebro"
        />
        <meta
          property="og:url"
          content={`https://punkiesycerebro.com/contacto`}
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
      <Contact />
    </div>
  );
}

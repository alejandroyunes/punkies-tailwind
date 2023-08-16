import Head from "next/head"
import PodcastComponet from "../components/Podcast/Podcast"

export default function Podcast() {
  return (
    <div>
      <Head>
        <title>Podcast</title>
        <meta
          property="og:title"
          content={`Audio opiniones del cantautor de rock subterráneo Jimmy Jazz. Extraídas del blog "in sermo rusticos".`}
        />
        <meta
          property="og:description"
          content={`Audio opiniones del cantautor de rock subterráneo Jimmy Jazz. Extraídas del blog "in sermo rusticos".`}
        />
        <meta
          name="keywords"
          content="cantautor, Rock, subterráneo, Jimmy Jazz"
        />
        <meta
          property="og:url"
          content={`https://punkiesycerebro.com/podcast`}
        />
        <meta
          property="og:type"
          content="Podcast de Jimmy Jazz"
        />
        <meta
          property="og:image"
          content="https://punkiesycerebro.com/punkieslogo.webp"
        />
      </Head>
      <PodcastComponet />
    </div>
  );
}

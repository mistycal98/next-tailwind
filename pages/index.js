import Head from "next/head";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
    </div>
  );
}

import Head from "next/head";

import { getRandomHeadline } from "@tools/RandomHeadline";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>{getRandomHeadline()}</p>
      </main>
    </>
  );
}

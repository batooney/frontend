import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gray-200 px-4 py-4">
      <Head>
        <title>Batooney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center bg-white px-4 py-4">
        <h2>Home page</h2>
      </div>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gray-200">
      <Head>
        <title>Batooney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Home page</p>
    </div>
  );
};

export default Home;

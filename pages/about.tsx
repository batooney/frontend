import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div className="h-screen bg-gray-200">
      <Head>
        <title>Batooney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>About</p>
    </div>
  );
};

export default About;

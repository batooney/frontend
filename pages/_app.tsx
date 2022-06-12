import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  );
}
export default MyApp;

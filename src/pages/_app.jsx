import "~/styles/globals.css";
import "~/i18n";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>roadmap-cc</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

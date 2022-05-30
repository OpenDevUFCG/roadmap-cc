import '~/styles/globals.css';
import '~/i18n';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar/index.js';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>roadmap-cc</title>
      </Head>
      <ChakraProvider>
        <Navbar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp

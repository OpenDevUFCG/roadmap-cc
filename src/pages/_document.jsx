import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Mydocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="content-type" content="text/html" />
          <meta name="distribution" content="web" />
          <meta name="distribution" content="global" />

          <meta name="country" content="BR" />

          <meta httpEquiv="Content-Style-Type" content="text/css" />
          <meta httpEquiv="Content-Script-Type" content="text/javascript" />
          <link rel="manifest" href="/manifest.json"></link>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

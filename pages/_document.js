// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/logo-lernen.ico" />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Plus Jakarta Sans" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

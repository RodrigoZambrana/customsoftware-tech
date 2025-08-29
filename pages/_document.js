// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Favicon (desde /public) */}
        <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-icon" />

        {/* Google Fonts (ideal migrar a next/font más adelante) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* CSS globales – mover desde _app.js a _document.js */}
        <link rel="stylesheet" href="/assets/css/flaticon.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome-5.14.0.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

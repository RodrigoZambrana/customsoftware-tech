// pages/_app.js
import "../styles/globals.css";
import PreLoader from "@/src/layout/PreLoader";
import { Fragment, useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

function App({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <Fragment>
      <DefaultSeo {...SEO} />

      {/* Podés dejar meta básicas y <title>; quitamos <link rel="stylesheet"> */}
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Software Srategy</title>
      </Head>

      {!loaded && <PreLoader />}
      {loaded && <Component {...pageProps} />}
    </Fragment>
  );
}

export default appWithTranslation(App);

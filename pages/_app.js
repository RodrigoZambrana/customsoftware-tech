import '../styles/globals.css';
import PreLoader from '@/src/layout/PreLoader';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import niceSelect from 'react-nice-select';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      niceSelect();
    }, 500);
  });

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <DefaultSeo {...SEO} />

      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>CustomSoftware-Tech</title>
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
        {/* CSS externos */}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>

      {!loaded && <PreLoader />}
      {loaded && <Component {...pageProps} />}
    </Fragment>
  );
}

export default appWithTranslation(App);

// pages/_app.js
import "../styles/globals.css";
import PreLoader from "@/src/layout/PreLoader";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { DefaultSeo, OrganizationJsonLd } from "next-seo";
import SEO from "../next-seo.config";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

function App({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // GTM: pageviews en cambios de ruta y tracking de CTAs con data-cta
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const gtmPush = (data) => {
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(data);
      } catch (_) {}
    };

    const handleRouteChange = (url) => {
      // Evita duplicar page_view del primer load; GTM con trigger All Pages lo emitirá
      const page_location = typeof window !== 'undefined' ? window.location.href : url;
      const page_title = typeof document !== 'undefined' ? document.title : undefined;
      gtmPush({
        event: 'page_view',
        page_location,
        page_path: url,
        page_title,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    const onClick = (e) => {
      const el = e.target.closest('[data-cta]');
      if (!el) return;
      const href = el.getAttribute('href') || '';
      const text = (el.textContent || '').trim();
      const cta = el.getAttribute('data-cta') || '';
      const id = el.getAttribute('id') || '';
      const meta = { ...el.dataset };
      delete meta.cta;
      // Estandariza parámetros económicos
      const currency = (meta.currency || 'USD').toString();
      const value = typeof meta.value !== 'undefined' && !isNaN(Number(meta.value))
        ? Number(meta.value)
        : 0;
      gtmPush({
        event: 'cta_click',
        cta_id: id,
        cta,
        link_url: href,
        link_text: text,
        page_path: (typeof window !== 'undefined' ? window.location.pathname : ''),
        cta_meta: meta,
        value,
        currency,
      });

      // Google Ads-friendly events (custom) for easy GTM mappings
      const pushEvent = (name, params = {}) => gtmPush({ event: name, ...params });

      // Plan click (pricing/comparison/services) -> click_plan
      const isPlanCta = cta.includes('pricing') || cta.includes('comparison') || typeof meta.plan !== 'undefined';
      if (isPlanCta) {
        const plan = (meta.plan || '').toString();
        const price = (meta.price || '').toString();
        pushEvent('click_plan', {
          plan_name: plan,
          plan_price: price,
          currency,
          link_url: href,
          page_path: (typeof window !== 'undefined' ? window.location.pathname : ''),
          value: price && !isNaN(Number(price)) ? Number(price) : value,
        });
      }

      // WhatsApp click -> whatsapp_click
      const isWhatsapp = href.includes('wa.me') || href.includes('api.whatsapp.com') || cta.includes('whatsapp');
      if (isWhatsapp) {
        const phone = (href.match(/(\+?\d{6,15})/) || [,''])[1];
        pushEvent('whatsapp_click', {
          phone,
          link_url: href,
          page_path: (typeof window !== 'undefined' ? window.location.pathname : ''),
          value,
          currency,
        });
      }

      // Email click -> email_click
      if (href.startsWith('mailto:')) {
        pushEvent('email_click', {
          email: href.replace('mailto:', ''),
          link_url: href,
          page_path: (typeof window !== 'undefined' ? window.location.pathname : ''),
          value,
          currency,
        });
      }

      // Phone click -> phone_click
      if (href.startsWith('tel:')) {
        pushEvent('phone_click', {
          phone: href.replace('tel:', ''),
          link_url: href,
          page_path: (typeof window !== 'undefined' ? window.location.pathname : ''),
          value,
          currency,
        });
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      document.removeEventListener('click', onClick);
    };
  }, [router.events]);

  return (
    <Fragment>
      <DefaultSeo {...SEO} />

      {/* Meta básicas (sin <title>; lo maneja next-seo) */}
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      {/* JSON-LD global de Organization */}
      <OrganizationJsonLd
        type="Organization"
        id="https://software-strategy.com/#organization"
        legalName="Software Strategy"
        name="Software Strategy"
        url="https://software-strategy.com/"
        logo="https://software-strategy.com/android-chrome-192x192.png"
        sameAs={[
          "https://www.facebook.com/software.strategy/",
          "https://www.instagram.com/software.strategy/",
        ]}
      />

      {!loaded && <PreLoader />}
      {loaded && <Component {...pageProps} />}
    </Fragment>
  );
}

export default appWithTranslation(App);

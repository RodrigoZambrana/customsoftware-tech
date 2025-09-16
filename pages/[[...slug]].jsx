import fs from "fs";
import path from "path";
import Layout from "@/src/layout/Layout";
import HomePage from "@/src/components/pages/HomePage";
import PricingPage from "@/src/components/pages/PricingPage";
import ServicesPage from "@/src/components/pages/ServicesPage";
import ServiceDetailPage from "@/src/components/pages/ServiceDetailPage";
import MarketingPage from "@/src/components/pages/MarketingPage";
import ContactPage from "@/src/components/pages/ContactPage";

export default function CatchAll({ page, locale, t }) {
  return (
    <Layout dark locale={locale}>
      {page === "home" && <HomePage t={t} locale={locale} />}
      {page === "pricing" && <PricingPage t={t} locale={locale} />}
      {page === "web-development" && <ServiceDetailPage t={t} locale={locale} slug="web-development" />}
      {page === "custom-software" && <ServiceDetailPage t={t} locale={locale} slug="custom-software" />}
      {page === "digital-marketing" && <MarketingPage t={t} locale={locale} />}
      {page === "seo-sem" && <ServiceDetailPage t={t} locale={locale} slug="seo-sem" />}
      {page === "services" && <ServicesPage t={t} locale={locale} />}

      {page === "contact" && <ContactPage t={t} locale={locale} />}
      {/* Fallback simple si no matchea */}
      {!(page === "home" || page === "pricing") && null}
    </Layout>
  );
}

export async function getStaticPaths() {
  // Generamos 2 paths: "/" (ES) y "/en" (EN).
  return {
    paths: [
      { params: { slug: [] } }, // /
      { params: { slug: ["en"] } }, // /en
      { params: { slug: ["pricing"] } }, // /pricing
      { params: { slug: ["en", "pricing"] } }, // /en/pricing
      { params: { slug: ["contact"] } }, // /contact (ES)
      { params: { slug: ["contacto"] } }, // /contacto (ES alias)
      { params: { slug: ["en", "contact"] } }, // /en/contact
      { params: { slug: ["services"] } }, // /services
      { params: { slug: ["en", "services"] } }, // /en/services
      // Service details under /services/{slug}
      { params: { slug: ["services", "web-development"] } }, // /services/web-development
      { params: { slug: ["en", "services", "web-development"] } }, // /en/services/web-development
      { params: { slug: ["services", "custom-software"] } }, // /services/custom-software
      { params: { slug: ["en", "services", "custom-software"] } }, // /en/services/custom-software
      { params: { slug: ["services", "digital-marketing"] } }, // /services/digital-marketing
      { params: { slug: ["en", "services", "digital-marketing"] } }, // /en/services/digital-marketing
      { params: { slug: ["services", "google-seo"] } }, // /services/google-seo (ES)
      { params: { slug: ["en", "services", "google-seo"] } }, // /en/services/google-seo
      // Backwards-compatible top-level service URLs (optional)
      { params: { slug: ["web-development"] } }, // /web-development
      { params: { slug: ["en", "web-development"] } }, // /en/web-development
      { params: { slug: ["custom-software"] } }, // /custom-software
      { params: { slug: ["en", "custom-software"] } }, // /en/custom-software
      { params: { slug: ["marketing-social"] } }, // /marketing-social
      { params: { slug: ["en", "marketing-social"] } }, // /en/marketing-social
      // top-level google-seo removed
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const segments = params?.slug ?? [];
  const first = segments[0];

  // Idioma
  const locale = first === "en" ? "en" : "es";
  const routeRemainder = first === "en" ? segments.slice(1) : segments;

  // Página
  let page = "home";
  if (routeRemainder.length > 0) {
    // Rutas de primer nivel y secciones
    const a = routeRemainder[0];
    const b = routeRemainder[1];

    if (a === "pricing") page = "pricing";
    if (a === "contacto" || a === "contact") page = "contact";

    // Listado de servicios
    if (a === "servicios" || a === "services") page = "services";

    // Detalles de servicios: /services/{slug}
    if ((a === "services" || a === "servicios") && b) {
      if (["web-development", "custom-software", "marketing-social", "digital-marketing", "google-seo"].includes(b)) {
        page = (b === "marketing-social") ? "digital-marketing" : (b === "google-seo" ? "seo-sem" : b);
      }
    }

    // URLs anteriores de nivel raíz (compatibilidad)
    if (["web-development", "custom-software", "marketing-social", "digital-marketing"].includes(a)) {
      page = (a === "marketing-social") ? "digital-marketing" : a;
    }
  }

  // JSON de contenido
  const contentPath = path.join(process.cwd(), "content", locale, `${page}.json`);
  let t = {};
  try {
    const raw = fs.readFileSync(contentPath, "utf8");
    t = JSON.parse(raw);
  } catch (err) {
    console.warn(`No existe JSON para ${page} (${locale}):`, contentPath);
  }

  return {
    props: { page, locale, t },
  };
}

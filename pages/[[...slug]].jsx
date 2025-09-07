import fs from "fs";
import path from "path";
import Layout from "@/src/layout/Layout";
import HomePage from "@/src/components/pages/HomePage";
import PricingPage from "@/src/components/pages/PricingPage";
import WebDevelopmentPage from "@/src/components/pages/WebDevelopmentPage";
import ServicesPage from "@/src/components/pages/ServicesPage";

export default function CatchAll({ page, locale, t }) {
  return (
    <Layout dark locale={locale}>
      {page === "home" && <HomePage t={t} locale={locale} />}
      {page === "pricing" && <PricingPage t={t} locale={locale} />}
      {page === "web-development" && <WebDevelopmentPage t={t} locale={locale} />}
      {page === "services" && <ServicesPage t={t} locale={locale} />}

      {/* TODO: más páginas
         {page === "contact" && <ContactPage t={t} locale={locale} />}
         {page === "services" && <ServicesPage t={t} locale={locale} />}
      */}
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
      { params: { slug: ["web-development"] } }, // /web-development
      { params: { slug: ["en", "web-development"] } }, // /en/web-development
      { params: { slug: ["services"] } }, // /services
      { params: { slug: ["en", "services"] } }, // /en/services
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
    // ej: /pricing o /en/pricing
    const slug = routeRemainder[0];
    if (slug === "pricing") page = "pricing";
    if (slug === "contacto" || slug === "contact") page = "contact";
    if (slug === "servicios" || slug === "services") page = "services";
    if (slug === "web-development") page = "web-development";
    if (slug === "services") page = "services";

    // …aquí podés ir agregando más rutas
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

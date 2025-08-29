import fs from "fs";
import path from "path";
import Layout from "@/src/layout/Layout";
import HomePage from "@/src/components/pages/HomePage";

export default function CatchAll({ page, locale, t }) {
  // Por ahora sólo "home". Podés rutear más páginas aquí según "page".
  if (page === "home") {
    return (
      <Layout dark locale={locale}>
        <HomePage t={t} locale={locale} />
      </Layout>
    );
  }
  // Si quisieras, podrías renderizar un 404 custom aquí.
  return null;
}

export async function getStaticPaths() {
  // Generamos 2 paths: "/" (ES) y "/en" (EN).
  return {
    paths: [
      { params: { slug: [] } }, // /
      { params: { slug: ["en"] } }, // /en
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // params.slug puede ser undefined (para "/") o ["en"] (para "/en")
  const segments = params?.slug ?? [];
  const first = segments[0];

  // Detectamos idioma por el primer segmento
  const locale = first === "en" ? "en" : "es";
  const routeRemainder = first === "en" ? segments.slice(1) : segments;

  // Simple enrutado: si no hay más segmentos => Home
  let page = "home";

  // En el futuro, podrías mapear: contacto/contact -> page="contact"
  // if (routeRemainder[0] === "contacto" || routeRemainder[0] === "contact") page = "contact";

  // Cargamos el JSON correspondiente
  const contentPath = path.join(process.cwd(), "content", locale, `${page}.json`);
  const raw = fs.readFileSync(contentPath, "utf8");
  const t = JSON.parse(raw);

  return {
    props: { page, locale, t },
  };
}

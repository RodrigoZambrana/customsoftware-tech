import Layout from "@/src/layout/Layout";
import HomePage from "@/src/components/pages/HomePage";
import fs from "fs";
import path from "path";
import { enrichHomeWithServiceSlides } from "@/src/lib/contentUtils";

export default function EnHome({ t }) {
  return (
    <Layout dark locale="en">
      <HomePage t={t} locale="en" />
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "en", "home.json");
  let t = {};
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    t = JSON.parse(raw);
  } catch (err) {
    console.warn(`[en/home] No se pudo cargar ${filePath}.`);
  }
  // Append service sliders to home slider (shared util)
  enrichHomeWithServiceSlides(t, "en");
  return { props: { t } };
}

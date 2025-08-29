import Layout from "@/src/layout/Layout";
import HomePage from "@/src/components/pages/HomePage";
import t from "@/content/es/home.json";

export default function IndexEn() {
  return (
    <Layout dark>
      <HomePage t={t} locale="es" />
    </Layout>
  );
}

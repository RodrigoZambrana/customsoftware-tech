import Layout from "@/src/layout/Layout";
import { NextSeo } from "next-seo";
import DefaultSEO from "@/next-seo.config";
import Link from "next/link";
import PageBanner from "@/src/components/PageBanner";

const About = () => {
  return (
    <Layout dark locale="es">
      <NextSeo
        title="Sobre Nosotros"
        description="Conocé nuestra misión, cómo trabajamos y servicios."
        canonical={`${(DefaultSEO?.canonical || 'https://www.software-strategy.com/').replace(/\/$/, '')}/about`}
        languageAlternates={[
          { hrefLang: 'es', href: `${(DefaultSEO?.canonical || 'https://www.software-strategy.com/').replace(/\/$/, '')}/about` },
          { hrefLang: 'en', href: `${(DefaultSEO?.canonical || 'https://www.software-strategy.com/').replace(/\/$/, '')}/en/about` },
          { hrefLang: 'x-default', href: `${(DefaultSEO?.canonical || 'https://www.software-strategy.com/').replace(/\/$/, '')}/about` },
        ]}
      />
      <PageBanner pageName="Sobre Nosotros" homeLabel="Inicio" homeHref="/" />

      <section className="why-choose-area pt-100 rpt-80 pb-80 rpb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="row">
                <div className="col-xl-11">
                  <div className="why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s">
                    <div className="section-title mb-40">
                      <span className="sub-title mb-15">Sobre la empresa</span>
                      <h2>Nuestros servicios y soluciones</h2>
                    </div>
                    <h5>Misión</h5>
                    <p>
                      Diseñamos y desarrollamos experiencias digitales con foco en performance, SEO y conversión. Combinamos tecnología,
                      diseño y estrategia para generar resultados medibles.
                    </p>
                    <br />
                    <h5>Cómo trabajamos</h5>
                    <p>
                      Priorizamos entregas iterativas, métricas claras y decisiones guiadas por datos. Acompañamos con soporte cercano y
                      evolución continua.
                    </p>
                    <div className="mt-35 d-flex gap-3 flex-wrap">
                      <Link legacyBehavior href="/services">
                        <a className="theme-btn style-two" data-cta="about-services">
                          Ver servicios <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a className="theme-btn" data-cta="about-contact">
                          Hablemos <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="service-item wow fadeInRight delay-0-2s">
                    <div className="icon"><i className="fal fa-laptop-code" /></div>
                    <h5>
                      <Link legacyBehavior href="/services/web-development">
                        <a>Desarrollo Web</a>
                      </Link>
                    </h5>
                    <p>Sitios rápidos, seguros y orientados a conversión. Listos para SEO y campañas.</p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-3s">
                    <div className="icon"><i className="fal fa-bullhorn" /></div>
                    <h5>
                      <Link legacyBehavior href="/services/digital-marketing">
                        <a>Marketing Digital</a>
                      </Link>
                    </h5>
                    <p>Estrategias en Google y redes sociales con medición de resultados.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item mt-30 wow fadeInRight delay-0-4s">
                    <div className="icon"><i className="fal fa-search" /></div>
                    <h5>
                      <Link legacyBehavior href="/services/google-seo">
                        <a>Posicionamiento en Google (SEO)</a>
                      </Link>
                    </h5>
                    <p>SEO técnico y de contenidos para aumentar visibilidad orgánica.</p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-5s">
                    <div className="icon"><i className="fal fa-cogs" /></div>
                    <h5>
                      <Link legacyBehavior href="/services/custom-software">
                        <a>Software a Medida</a>
                      </Link>
                    </h5>
                    <p>Integraciones, automatización y paneles a medida para escalar tu operación.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-are-area pt-20 rpt-0 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row gap-90">
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header"><i className="flaticon-optimization-1" /><h5>Performance y SEO</h5></div>
                <p>Core Web Vitals, indexación y estructura para maximizar visibilidad y conversión.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-3s">
                <div className="why-choose-header"><i className="flaticon-mobile-banking" /><h5>Medición y datos</h5></div>
                <p>GA4, eventos y dashboards para decisiones informadas y mejora continua.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header"><i className="flaticon-creativity" /><h5>Equipo senior</h5></div>
                <p>Procesos claros, entregas iterativas y soporte cercano en cada etapa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

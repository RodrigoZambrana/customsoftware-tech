import PageBanner from "@/src/components/PageBanner";
import { NextSeo } from "next-seo";
import DefaultSEO from "@/next-seo.config";
import Link from "next/link";

export default function ServicesPage({ t, locale = "es" }) {
  const isEn = locale === "en";
  const withLang = (href) => {
    if (!href) return "/";
    if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
    const path = href.startsWith("/") ? href : `/${href}`;
    if (isEn) {
      if (path === "/en" || path.startsWith("/en/")) return path;
      return `/en${path}`;
    }
    return path.startsWith("/en/") || path === "/en" ? (path.replace(/^\/en/, "") || "/") : path;
  };

  return (
    <>
      <NextSeo
        title={t?.seo?.title || (isEn ? "Services" : "Servicios")}
        description={t?.seo?.description || (isEn ? "Explore our services: web development, custom software, SEO/SEM and digital marketing." : "Conocé nuestros servicios: desarrollo web, software a medida, SEO/SEM y marketing digital.")}
        canonical={`${(DefaultSEO?.canonical || "https://software-strategy.com/").replace(/\/$/, "")}${isEn ? "/en/services" : "/services"}`}
        languageAlternates={[
          { hrefLang: "es", href: `${(DefaultSEO?.canonical || "https://software-strategy.com/").replace(/\/$/, "")}/services` },
          { hrefLang: "en", href: `${(DefaultSEO?.canonical || "https://software-strategy.com/").replace(/\/$/, "")}/en/services` },
          { hrefLang: "x-default", href: `${(DefaultSEO?.canonical || "https://software-strategy.com/").replace(/\/$/, "")}/services` },
        ]}
      />
      {/* Page Banner */}
      <PageBanner pageName={t.pageBanner} />

      {/* Services List Area (estructura basada en project-list) */}
      <section className="project-list-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container">
          {t.items?.map((svc, idx) => {
            const even = idx % 2 === 0;
            return (
              <div className="project-item style-two" key={svc.title}>
                {/* Imagen izquierda si even, derecha si odd */}
                {even && (
                  <div className="image wow fadeInLeft delay-0-2s">
                    <img src={svc.image} alt={svc.imageAlt || svc.title} loading="lazy" decoding="async" />
                    {svc.href && (
                      <Link legacyBehavior href={withLang(svc.href)}>
                        <a className="project-btn" aria-label={isEn ? 'View service details' : 'Ver detalle del servicio'}>
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    )}
                  </div>
                )}

                <div className={`content wow ${even ? "fadeInRight" : "fadeInLeft"} delay-0-2s`}>
                  {svc.category && (
                    <Link legacyBehavior href={withLang(svc.href || "/services")}>
                      <a className="category">{svc.category}</a>
                    </Link>
                  )}
                  <h2>
                    <Link legacyBehavior href={withLang(svc.href || "/services")}>
                      <a>
                        {svc.titlePrefix} <i>{svc.titleEmphasis}</i>
                      </a>
                    </Link>
                  </h2>
                  <hr />
                  <p>{svc.description}</p>
                  <Link legacyBehavior href={withLang(svc.href || "/contact")}>
                    <a className="read-more" data-cta="services-read-more" data-service={(svc.href || svc.title || '').toString()}>
                      {t.ctaReadMore} <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>

                {!even && (
                  <div className="image wow fadeInRight delay-0-2s">
                    <img src={svc.image} alt={svc.imageAlt || svc.title} loading="lazy" decoding="async" />
                    {svc.href && (
                      <Link legacyBehavior href={withLang(svc.href)}>
                        <a className="project-btn" aria-label={isEn ? 'View service details' : 'Ver detalle del servicio'}>
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA final (mismo bloque del template) */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">{t.workWithUs.subtitle}</span>
                <h2>{t.workWithUs.title}</h2>
                <Link legacyBehavior href={withLang("/contact")}>
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" /> <span>{t.workWithUs.cta}</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">{t.workWithUs.bigText}</span>
      </section>
    </>
  );
}

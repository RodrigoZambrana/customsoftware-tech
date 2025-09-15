import Link from "next/link";
import { NextSeo } from "next-seo";
import DefaultSEO from "@/next-seo.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/sliderProps";
import Home5Slider from "@/src/components/sliders/Home5Slider";

export default function MarketingPage({ t, locale = "es" }) {
  const isEn = locale === "en";
  const withLang = (href) => {
    if (!href) return "/";
    if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
    const path = href.startsWith("/") ? href : `/${href}`;
    return isEn ? `/en${path === "/en" ? "" : path}` : path;
  };

  const siteBase = (DefaultSEO?.canonical || "https://www.software-strategy.com/").replace(/\/$/, "");
  const canonicalPath = isEn ? "/en/services/digital-marketing" : "/services/digital-marketing";
  const canonicalUrl = `${siteBase}${canonicalPath}`;

  return (
    <>
      <NextSeo
        title={t?.seo?.title || (isEn ? "Digital Marketing" : "Marketing Digital")}
        description={t?.seo?.description || (isEn ? "Strategies, content and campaigns to grow." : "Estrategias, contenidos y campañas para crecer.")}
        canonical={canonicalUrl}
      />

      {/* Slider (from index5) */}
      {t.slider && (
        <Home5Slider
          slides={(t.slider.slides || []).map((s) => ({
            bg: s.bg,
            subtitle: s.subtitle,
            titleHtml: s.titleHtml,
            ratingLabel: s.ratingLabel,
            primary: s.primary ? { href: withLang(s.primary.href), text: s.primary.text } : null,
            secondary: s.secondary ? { href: withLang(s.secondary.href), text: s.secondary.text } : null,
          }))}
        />
      )}

      {/* Client Logo Two (from index5) */}
      {t.clientLogos?.length > 0 && (
        <div className="client-logo-area pt-120 pb-90 rpt-100 rpb-70">
          <div className="container">
            <div className="client-logo-wrap">
              {t.clientLogos.map((logo, i) => (
                <Link className="client-logo-item wow fadeInUp delay-0-2s" href={withLang("/contact")} key={`logo-${i}`}>
                  <img src={logo} alt="Client Logo" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* What We Offer (from index5) */}
      {t.offer && (
        <section className="what-we-offer pb-90 rpb-70">
          <div className="container container-1290">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              {t.offer.subtitle && <span className="sub-title mb-20">{t.offer.subtitle}</span>}
              {t.offer.title && <h2>{t.offer.title}</h2>}
            </div>
            <div className="row justify-content-center">
              {t.offer.items?.map((it, idx) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={`${it.title}-${idx}`}>
                  <div className="service-item style-three wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className={it.icon || "flaticon-optimization"} />
                    </div>
                    {it.number && <div className="number">{it.number}</div>}
                    <h4>
                      {it.href ? (
                        <Link href={withLang(it.href)}>{it.title}</Link>
                      ) : (
                        it.title
                      )}
                    </h4>
                    {it.href && (
                      <Link href={withLang(it.href)} className="more">
                        <i className="far fa-arrow-right" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Company (from index5) */}
      {t.about5 && (
        <section className="about-area-five py-130 rpy-100 rel z-1">
          <div className="container container-1290">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="about-content-five">
                  <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                    <span className="sub-title mb-15">{t.about5.subtitle}</span>
                    <h2>{t.about5.title}</h2>
                  </div>
                  <p>{t.about5.text}</p>
                  {t.about5.authorsText && (
                    <div className="authors-text mt-45 pt-50">
                      {(t.about5.authorsImages || []).map((src, i) => (
                        <img key={i} src={src} alt="Author" />
                      ))}
                      <span className="text" dangerouslySetInnerHTML={{ __html: t.about5.authorsText }} />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="about-five-images rmt-50 wow fadeInRight delay-0-2s">
                  <div className="image-one">
                    <img src={t.about5.image1 || "/assets/images/about/about-five1.jpg"} alt={t.about5.imageAlt || "About"} />
                  </div>
                  <div className="about-five-shape">
                    <img src={t.about5.bg || "/assets/images/about/about-five-bg.png"} alt="About Five Shape" />
                  </div>
                  <div className="image-two mt-30">
                    <img src={t.about5.image2 || "/assets/images/about/about-five2.jpg"} alt={t.about5.imageAlt || "About"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Work Gallery (from index5) */}
      {t.gallery && (
        <section className="work-gallery-area py-130 rpy-100">
          <div className="container container-1290">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-20">{t.gallery.subtitle}</span>
                  <h2>{t.gallery.title}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <Swiper {...sliderProps.galleryFiveActive} className="gallery-five-active">
              {(t.gallery.items || []).map((g, i) => (
                <SwiperSlide key={`${g.title}-${i}`}>
                  <div className="project-item style-five wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img src={g.image} alt="Work Gallery" />
                      <Link href={withLang(g.detailsHref || g.href || "/project-details")} className="project-btn">
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href={withLang(g.categoryHref || "/projects")} className="category">
                        {g.category || (isEn ? "Marketing, Branding" : "Marketing, Branding")}
                      </Link>
                      <h4>
                        <Link href={withLang(g.detailsHref || g.href || "/project-details")}>{g.title}</Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="work-gallery-controls">
              <button className="work-gallery-prev slick-arrow">
                <i className="far fa-chevron-left" />
              </button>
              <div className="work-gallery-dots slick-dots" />
              <button className="work-gallery-next slick-arrow">
                <i className="far fa-chevron-right" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Work Process (exact structure like index5-onepage, translated) */}
      {t.process && (
        <section className="work-process-five-area pt-130 pb-90 rpt-100 rpb-60 rel z-1">
          <div className="container container-1290">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-20">{t.process.subtitle || (isEn ? "Working Process" : "Proceso de trabajo")}</span>
                  <h2>{t.process.title || (isEn ? "Simple Step Follow To Complete Work, How It Work" : "Pasos simples para completar el trabajo, cómo funciona")}</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {(t.process.items || []).slice(0, 3).map((p, i) => (
                <div className="col-lg-4 col-md-6" key={`${p.title}-${i}`}>
                  <div className={`work-process-five wow fadeInUp delay-0-${2 + i * 2}s`}>
                    <div className="icon-title">
                      <i className={p.icon || "flaticon-optimization"} />
                      <h4>{p.title}</h4>
                    </div>
                    <div className="content">
                      <p>{p.text}</p>
                      <Link className="read-more" href={withLang(p.href || "/services/digital-marketing")}>
                        {isEn ? "Learn More" : "Ver más"} <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Plans (custom module before Work With Us) */}
      {t.plans?.items?.length > 0 && (
        <section className="pricing-area-three pb-85 rpb-55" style={{ backgroundImage: "url(/assets/images/background/pricing-bg-dot-shape.png)" }}>
          <div className="container container-1290">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  {t.plans.subtitle && <span className="sub-title mb-20">{t.plans.subtitle}</span>}
                  {t.plans.title && <h2>{t.plans.title}</h2>}
                </div>
              </div>
            </div>
            <div className="row">
              {t.plans.items.slice(0, 3).map((plan, i) => (
                <div className="col-xl-4 col-md-6" key={plan.name}>
                  <div className={`pricing-plan-item wow fadeInUp delay-0-${2 + i * 2}s ${i === 1 ? "style-two" : ""}`}>
                    {plan.badge && (
                      <span className="badge">
                        <i className="fas fa-star-of-life" />
                        <i className="fas fa-star-of-life" />
                        {plan.badge}
                        <i className="fas fa-star-of-life" />
                        <i className="fas fa-star-of-life" />
                      </span>
                    )}
                    <div className={i === 1 ? "icon-title-price" : "icon-title"}>
                      <div className="icon">
                        <i className="flaticon-abstract" />
                      </div>
                      <div className={i === 1 ? "right-part" : ""}>
                        <h5>{plan.name}</h5>
                        {plan.price && (
                          <span className="price-text">
                            <span className="before">$</span>
                            <span className="price">{plan.price}</span> <span className="after">{plan.unit}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className={`list-style-one ${i === 1 ? "two-column" : ""}`}>
                      {plan.features?.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <Link legacyBehavior href={withLang("/contact")}>
                      <a className="theme-btn w-100">
                        {plan.cta || (isEn ? "Get started" : "Empezar")} <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Work With Us (from index5) */}
      {t.workWithUs && (
        <section className="work-with-us-area rel z-1">
          <div className="container container-1290">
            <div className="row no-gap">
              <div className="col-xl-5 align-self-center">
                <div className="work-with-image wow fadeInUp delay-0-2s">
                  <img src={t.workWithUs.image || "/assets/images/about/work-with-us.jpg"} alt="About" />
                </div>
              </div>
              <div className="col-xl-7 wow fadeInUp delay-0-4s">
                <div className="work-with-content" style={{ backgroundImage: `url(${t.workWithUs.bg || "/assets/images/about/work-with-us-bg.jpg"})` }}>
                  <div className="section-title mb-10">
                    <span className="sub-title mb-15">{t.workWithUs.subtitle}</span>
                    <h2>{t.workWithUs.title}</h2>
                  </div>
                  <p>{t.workWithUs.text || (isEn ? "Let's talk about your project." : "Hablemos de tu proyecto.")}</p>
                  <Link href={withLang("/contact")} className="theme-btn mt-15">
                    {isEn ? "Let’s Work Together" : "Trabajemos Juntos"} <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";
import DefaultSEO from "@/next-seo.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/sliderProps";
import Home5Slider from "@/src/components/sliders/Home5Slider";
import YgencyAccordionLite from "@/src/components/YgencyAccordionLite";
import PageBanner from "@/src/components/PageBanner";

export default function MarketingPage({ t, locale = "es" }) {
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

  const siteBase = (DefaultSEO?.canonical || "https://software-strategy.com/").replace(/\/$/, "");
  const canonicalPath = isEn ? "/en/services/digital-marketing" : "/services/digital-marketing";
  const canonicalUrl = `${siteBase}${canonicalPath}`;

  return (
    <>
      <NextSeo
        title={t?.seo?.title || (isEn ? "Digital Marketing" : "Marketing Digital")}
        description={t?.seo?.description || (isEn ? "Strategies, content and campaigns to grow." : "Estrategias, contenidos y campañas para crecer.")}
        canonical={canonicalUrl}
        languageAlternates={[
          { hrefLang: "es", href: `${siteBase}/services/digital-marketing` },
          { hrefLang: "en", href: `${siteBase}/en/services/digital-marketing` },
          { hrefLang: "x-default", href: `${siteBase}/services/digital-marketing` },
        ]}
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

      {/* Breadcrumb banner */}
      <PageBanner
        pageName={t.pageBanner || (isEn ? 'Digital Marketing' : 'Marketing Digital')}
        homeLabel={isEn ? 'Home' : 'Inicio'}
        homeHref={withLang('/')}
        parentLabel={isEn ? 'Services' : 'Servicios'}
        parentHref={withLang('/services')}
      />

      {/* Client Logo Two (from index5) */}
      {false && t.clientLogos?.length > 0 && (
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
              {t.offer.description && <p className="mt-10">{t.offer.description}</p>}
            </div>
            <div className="row justify-content-center">
              {t.offer.items?.map((it, idx) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={`${it.title}-${idx}`}>
                  <div className="service-item style-three wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className={it.icon || "flaticon-optimization"} />
                    </div>
                    {it.number && <div className="number">{it.number}</div>}
                    <h4>{it.title}</h4>
                    {it.desc && <p className="mt-10">{it.desc}</p>}
                    {Array.isArray(it.bullets) && it.bullets.length > 0 && (
                      <ul className="list-style-one mt-10">
                        {it.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD: ItemList of services for SEO */}
      {t.offer?.items?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: isEn ? 'Digital Marketing Services' : 'Servicios de Marketing Digital',
              itemListElement: (t.offer.items || []).slice(0, 3).map((it, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: {
                  '@type': 'Service',
                  name: it.title,
                  description: it.desc || '',
                  areaServed: it.areaServed || (isEn ? 'LatAm' : 'LatAm'),
                  provider: it.provider || 'Software Strategy',
                  url: `${(DefaultSEO?.canonical || 'https://software-strategy.com/').replace(/\/$/, '')}${isEn ? '/en/services/digital-marketing' : '/services/digital-marketing'}`,
                },
              })),
            }),
          }}
        />
      )}

      {/* About Company (from index5) */}
      {t.about5 && (
        <section className="about-area-five py-130 rpy-100 rel z-1" aria-label={isEn ? 'About Software Strategy' : 'Sobre Software Strategy'}>
          <div className="container container-1290">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="about-content-five">
                  <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                    <span className="sub-title mb-15">{t.about5.subtitle}</span>
                    <h2>{t.about5.title}</h2>
                  </div>
                  {t.about5.textHtml ? (
                    <p dangerouslySetInnerHTML={{ __html: t.about5.textHtml }} />
                  ) : (
                    <p>{t.about5.text}</p>
                  )}
                  {t.about5.authorsText && (
                    <div className="authors-text mt-45 pt-50">
                      {(t.about5.authorsImages || []).map((src, i) => (
                    <img key={i} src={src} alt="Author" loading="lazy" decoding="async" />
                      ))}
                      <span className="text" dangerouslySetInnerHTML={{ __html: t.about5.authorsText }} />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="about-five-images rmt-50 wow fadeInRight delay-0-2s">
                  <div className="image-one">
                    <img src={t.about5.image1 || "/assets/images/about/about-five1.jpg"} alt={t.about5.imageAlt || (isEn ? 'About us' : 'Sobre nosotros')} loading="lazy" decoding="async" />
                  </div>
                  <div className="about-five-shape">
                    <img src={t.about5.bg || "/assets/images/about/about-five-bg.png"} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  </div>
                  <div className="image-two mt-30">
                    <img src={t.about5.image2 || "/assets/images/about/about-five2.jpg"} alt={t.about5.imageAlt || (isEn ? 'About us' : 'Sobre nosotros')} loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Work Gallery (removed per requirements) */}
      {false && t.gallery && (
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
                      <img src={g.image} alt="Work Gallery" loading="lazy" decoding="async" />
                      <Link href={withLang(g.detailsHref || g.href || "/project-details")} className="project-btn" aria-label={isEn ? 'View details' : 'Ver detalles'}>
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
        <section className="work-process-five-area pt-130 pb-90 rpt-100 rpb-60 rel z-1" aria-label={isEn ? 'Digital marketing work process' : 'Proceso de trabajo en marketing digital'}>
          <div className="container container-1290">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-20">{t.process.subtitle || (isEn ? "Working Process" : "Proceso de trabajo")}</span>
                  <h2>{t.process.title || (isEn ? "From research to measurable results" : "De la investigación a resultados medibles")}</h2>
                  {t.process.description && <p className="mt-10">{t.process.description}</p>}
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs (before plans/pricing) */}
      {t.faqs?.items?.length > 0 && (
        <section className="faq-area py-100 rpy-70 rel z-1" aria-label={isEn ? "Digital marketing FAQs" : "Preguntas frecuentes de marketing digital, Google Ads y redes sociales"}>
          <div className="container container-1290">
            <div className="section-title text-center mb-50">
              <span className="sub-title mb-15">{t.faqs?.subtitle || (isEn ? 'FAQs' : 'Preguntas Frecuentes')}</span>
              <h2>{t.faqs?.title || (isEn ? 'Frequently Asked Questions' : 'Preguntas frecuentes sobre marketing digital')}</h2>
              {t.faqs?.description && <p className="mt-10">{t.faqs.description}</p>}
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <MarketingFaqAccordion items={t.faqs.items} />
                <div className="text-center mt-40">
          <Link href={withLang('/services/digital-marketing')} className="theme-btn" data-cta="faq">
            {isEn ? 'See digital marketing services' : 'Ver servicios de marketing digital'} <i className="far fa-arrow-right" />
          </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SEO: FAQPage JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: (t.faqs.items || []).map((it) => ({
                  '@type': 'Question',
                  name: it.q,
                  acceptedAnswer: { '@type': 'Answer', text: it.a },
                })),
              }),
            }}
          />
        </section>
      )}

      {/* Plans (custom module before Work With Us) */}
      {t.plans?.items?.length > 0 && (
        <section
          className="pricing-area-three pb-85 rpb-55"
          style={{ backgroundImage: "url(/assets/images/background/pricing-bg-dot-shape.png)" }}
          aria-label={isEn ? 'Digital marketing plans' : 'Planes de marketing digital'}
        >
          <div className="container container-1290">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  {t.plans.subtitle && <span className="sub-title mb-20">{t.plans.subtitle}</span>}
                  {t.plans.title && <h2>{t.plans.title}</h2>}
                  {t.plans.description && <p className="mt-10">{t.plans.description}</p>}
                </div>
              </div>
            </div>
            <div className="row">
              {t.plans.items.slice(0, 3).map((plan, i) => (
                <div className="col-xl-4 col-md-6" key={plan.name}>
                  <article
                    className={`pricing-plan-item wow fadeInUp delay-0-${2 + i * 2}s ${i === 1 ? "style-two" : ""}`}
                    itemScope
                    itemType="https://schema.org/Product"
                  >
                    {plan.badge && (
                      <span className="badge">
                        <i className="fas fa-star-of-life" />
                        {plan.badge} <i className="fas fa-star-of-life" />
                      </span>
                    )}
                    <div className={i === 1 ? "icon-title-price" : "icon-title"}>
                      <div className="icon">
                        <i className="flaticon-abstract" />
                      </div>
                      <div className={i === 1 ? "right-part" : ""}>
                        <h5 itemProp="name">{plan.name}</h5>
                        {plan.price && (
                          <span className="price-text" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <meta itemProp="priceCurrency" content="USD" />
                            <span className="before">$</span>
                            <span className="price" itemProp="price">{plan.price}</span> <span className="after">{plan.unit}</span>
                            <link itemProp="availability" href="https://schema.org/InStock" />
                          </span>
                        )}
                      </div>
                    </div>
                    {plan.description && (
                      <p className="mt-10" itemProp="description">{plan.description}</p>
                    )}
                    <ul className={`list-style-one ${plan.twoColumn || i === 1 ? "two-column" : ""}`}>
                      {plan.features?.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <Link legacyBehavior href={withLang("/contact")}>
                      <a
                        className="theme-btn w-100"
                        data-cta="pricing"
                        data-plan={(plan.slug || plan.name || '').toString().toLowerCase().replace(/\s+/g, '-')}
                        data-price={plan.price}
                        aria-label={(isEn ? 'Get started with ' : 'Empezar con ') + plan.name}
                      >
                        {plan.cta || (isEn ? "Get started" : "Empezar")} <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing comparison table (below plans) */}
      {t.plansComparison && (
        <section className="pricing-comparison-area py-80 rpy-60" aria-label={isEn ? 'Digital marketing plans comparison' : 'Comparativa de planes de marketing digital'}>
          <div className="container container-1290">
            <div className="section-title text-center mb-50">
              <h2>{t.plansComparison.title}</h2>
              {t.plansComparison.description && <p className="mt-10">{t.plansComparison.description}</p>}
            </div>

            <div className="table-responsive">
              <table className="table table-bordered pricing-comparison text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th>{t.plansComparison.featuresLabel || (isEn ? 'Features' : 'Características')}</th>
                    <th>
                      {t.plansComparison.starterLabel || 'Starter'}<br />
                      <span className="text-muted">${t.plansComparison.starterPrice} {isEn ? 'USD/mo' : 'USD/mes'}</span>
                    </th>
                    <th className="bg-light">
                      {t.plansComparison.growthLabel || 'Growth'} {t.plansComparison.growthBadge || '⭐'}<br />
                      <span className="text-muted">${t.plansComparison.growthPrice} {isEn ? 'USD/mo' : 'USD/mes'}</span>
                    </th>
                    <th>
                      {t.plansComparison.proLabel || 'Pro'}<br />
                      <span className="text-muted">${t.plansComparison.proPrice} {isEn ? 'USD/mo' : 'USD/mes'}</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(t.plansComparison.rows || []).map((r, idx) => (
                    <tr key={`cmp-${idx}`}>
                      <td className="text-start"><strong>{r.feature}</strong></td>
                      <td>{r.starter}</td>
                      <td className="bg-light">{r.growth}</td>
                      <td>{r.pro}</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td>
                      <Link href={withLang('/contact')} className="theme-btn w-100 mt-2" data-cta="comparison" data-plan="starter" data-price={t.plansComparison.starterPrice}>
                        {t.plansComparison.ctaStarter || (isEn ? 'Choose Starter' : 'Elegir Starter')} <i className="far fa-arrow-right" />
                      </Link>
                    </td>
                    <td className="bg-light">
                      <Link href={withLang('/contact')} className="theme-btn w-100 mt-2" data-cta="comparison" data-plan="growth" data-price={t.plansComparison.growthPrice}>
                        {t.plansComparison.ctaGrowth || (isEn ? 'Choose Growth' : 'Elegir Growth')} <i className="far fa-arrow-right" />
                      </Link>
                    </td>
                    <td>
                      <Link href={withLang('/contact')} className="theme-btn w-100 mt-2" data-cta="comparison" data-plan="pro" data-price={t.plansComparison.proPrice}>
                        {t.plansComparison.ctaPro || (isEn ? 'Choose Pro' : 'Elegir Pro')} <i className="far fa-arrow-right" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {t.plansComparison.note && (
              <p className="text-center small text-muted mt-20">{t.plansComparison.note}</p>
            )}
          </div>
        </section>
      )}

      {/* JSON-LD for plans */}
      {t.plans?.items?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': t.plans.items.slice(0, 3).map((p) => ({
                '@type': 'Product',
                name: p.name,
                description: p.description || '',
                offers: {
                  '@type': 'Offer',
                  price: `${p.price}`,
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
              })),
            }),
          }}
        />
      )}

      {/* Work With Us (from index5) */}
      {t.workWithUs && (
        <section className="work-with-us-area rel z-1">
          <div className="container container-1290">
            <div className="row no-gap">
              <div className="col-xl-5 align-self-center">
                <div className="work-with-image wow fadeInUp delay-0-2s">
                  <img src={t.workWithUs.image || "/assets/images/about/work-with-us.jpg"} alt="About" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="col-xl-7 wow fadeInUp delay-0-4s">
                <div className="work-with-content" style={{ backgroundImage: `url(${t.workWithUs.bg || "/assets/images/about/work-with-us-bg.jpg"})` }}>
                  <div className="section-title mb-10">
                    <span className="sub-title mb-15">{t.workWithUs.subtitle}</span>
                    <h2>{t.workWithUs.title}</h2>
                  </div>
                  <p>{t.workWithUs.text || (isEn ? "Let's talk about your project." : "Hablemos de tu proyecto.")}</p>
                  <Link href={withLang("/contact")} className="theme-btn mt-15" data-cta="work-with-us">
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

function MarketingFaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="accordion" id="faqMarketing">
      {items.map((item, i) => (
        <YgencyAccordionLite
          key={`mkt-faq-${i}`}
          title={item.q}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        >
          <p>{item.a}</p>
        </YgencyAccordionLite>
      ))}
    </div>
  );
}

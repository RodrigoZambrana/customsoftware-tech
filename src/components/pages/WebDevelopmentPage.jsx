import PageBanner from "@/src/components/PageBanner";
import Link from "next/link";
import { useState } from "react";
import YgencyAccordionLite from "@/src/components/YgencyAccordionLite";

export default function WebDevelopmentPage({ t, locale = "es" }) {
  const isEn = locale === "en";
  const withLang = (href) => {
    if (!href) return "/";
    if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
    const path = href.startsWith("/") ? href : `/${href}`;
    return isEn ? `/en${path === "/en" ? "" : path}` : path;
  };

  const planIcons = ["flaticon-abstract", "flaticon-liquid", "flaticon-petals"];

  return (
    <>
      {/* Banner */}
      <PageBanner pageName={t.pageBanner} />

      {/* About / Qué ofrecemos */}
      <section className="why-choose-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row align-items-center">
            {/* Texto */}
            <div className="col-xl-5">
              <div className="row">
                <div className="col-xl-11">
                  <div className="why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s">
                    <div className="section-title mb-50">
                      <span className="sub-title mb-15">{t.about?.subtitle}</span>
                      <h2>{t.about?.title}</h2>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="list-style-one">
                          {t.about?.featuresCol1?.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="list-style-one">
                          {t.about?.featuresCol2?.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link legacyBehavior href={withLang("/contact")}>
                      <a className="theme-btn style-two mt-35">
                        {t?.ctaPrimary ?? (isEn ? "Request a quote" : "Pedir cotización")} <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="col-xl-7">
              <div className="row">
                <div className="col-12">
                  <div className="image wow zoomIn delay-0-2s text-center">
                    <img src="/assets/images/banner/banner-bg.jpg" alt={t.about?.imageAlt || "Web Development"} style={{ maxWidth: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
            </div>
            {/* /Imagen */}
          </div>
        </div>
      </section>
      {/* /About */}

      {/* What we do */}
      <section className="about-area pb-100 rpb-70">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-8">
              <div className="section-title wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">{t.whatWeDo?.subtitle}</span>
                <h2>{t.whatWeDo?.title}</h2>
                <p className="mt-20">{t.whatWeDo?.text}</p>
              </div>
            </div>
            <div className="col-xl-4 text-xl-end mt-25 rmt-15">
              <Link legacyBehavior href={withLang("/pricing")}>
                <a className="explore-more">
                  <i className="fas fa-arrow-right" /> <span>{t?.ctaSecondary ?? (isEn ? "View plans" : "Ver planes")}</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /What we do */}

      {/* Pricing dentro del servicio */}
      <section className="pricing-area-three pb-85 rpb-55" style={{ backgroundImage: "url(/assets/images/background/pricing-bg-dot-shape.png)" }}>
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">{t.pricingSection?.subtitle}</span>
                <h2>{t.pricingSection?.title}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {t.pricingSection?.plans?.slice(0, 3).map((plan, i) => (
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
                      <i className={planIcons[i % planIcons.length]} />
                    </div>
                    <div className={i === 1 ? "right-part" : ""}>
                      <h5>{plan.name}</h5>
                      <span className="price-text">
                        <span className="before">$</span>
                        <span className="price">{plan.price}</span> <span className="after">{plan.unit}</span>
                      </span>
                    </div>
                  </div>

                  <ul className={`list-style-one ${i === 1 ? "two-column" : ""}`}>
                    {plan.features?.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <Link legacyBehavior href={withLang("/contact")}>
                    <a className="theme-btn w-100">
                      {plan.cta} <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Pricing */}
      {/* FAQ's Area start */}
      <section className="faq-area pt-90 rpt-55 pb-130 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            {/* Imagen izquierda */}
            <div className="col-lg-5">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src={t.faqs?.image || "/assets/images/faqs/faq-two.jpg"} alt={t.faqs?.imageAlt || "FAQs"} />
              </div>
            </div>

            {/* Acordeón derecha */}
            <div className="col-lg-7">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">{t.faqs?.subtitle}</span>
                  <h2>{t.faqs?.title}</h2>
                </div>

                {/* Estado del acordeón */}
                <AccordionLite items={t.faqs?.items || []} />
              </div>
            </div>
          </div>
        </div>

        {/* Shapes decorativos */}
        <div className="faq-shapes">
          <img className="shape left" src="/assets/images/shapes/ellipse-left.png" alt="Shape" />
          <img className="shape right" src="/assets/images/shapes/ellipse-right.png" alt="Shape" />
        </div>
      </section>
      {/* FAQ's Area end */}

      {/* CTA final */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">{t.workWithUs?.subtitle}</span>
                <h2>{t.workWithUs?.title}</h2>
                <Link legacyBehavior href={withLang("/contact")}>
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" /> <span>{t.workWithUs?.cta}</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <span className="big-text light-opacity">{t.workWithUs?.bigText}</span>
      </section>
      {/* /CTA final */}
    </>
  );
}

function AccordionLite({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="accordion" id="faq-accordion-two">
      {items.map((item, i) => (
        <YgencyAccordionLite key={`faq-${i}`} title={item.q} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}>
          <p>{item.a}</p>
        </YgencyAccordionLite>
      ))}
    </div>
  );
}

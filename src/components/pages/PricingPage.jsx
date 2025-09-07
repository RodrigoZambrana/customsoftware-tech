// src/components/pages/PricingPage.jsx
import PageBanner from "@/src/components/PageBanner";
import Link from "next/link";
import esPricing from "@/content/es/pricing.json";
import enPricing from "@/content/en/pricing.json";

export default function PricingPage({ t, locale = "es" }) {
  const isEn = locale === "en";
  const withLang = (href) => {
    if (!href) return "/";
    if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
    const path = href.startsWith("/") ? href : `/${href}`;
    return isEn ? `/en${path === "/en" ? "" : path}` : path;
  };

  // Iconitos para los 3 planes (mantengo el look & feel del template)
  const planIcons = ["flaticon-abstract", "flaticon-liquid", "flaticon-petals"];

  return (
    <>
      {/* Page Banner */}
      <PageBanner pageName={t.pageBanner} />

      {/* Why Choose */}
      <section className="why-choose-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row align-items-center">
            {/* Texto principal */}
            <div className="col-xl-5">
              <div className="row">
                <div className="col-xl-11">
                  <div className="why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s">
                    <div className="section-title mb-50">
                      <span className="sub-title mb-15">{t.whyChoose.subtitle}</span>
                      <h2>{t.whyChoose.title}</h2>
                    </div>

                    <h5>{t.whyChoose.missionTitle}</h5>
                    <p>{t.whyChoose.missionText}</p>

                    <br />

                    <h5>{t.whyChoose.visionTitle}</h5>
                    <p>{t.whyChoose.visionText}</p>

                    <Link legacyBehavior href={withLang("/about")}>
                      <a className="theme-btn style-two mt-35">
                        {t.whyChoose.cta} <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de beneficios */}
            <div className="col-xl-7">
              <div className="row">
                {t.services?.slice(0, 4).map((s, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className={`service-item ${idx > 1 ? "mt-30" : ""} wow fadeInRight delay-0-2s`}>
                      <div className="icon">
                        <i className={s.icon} />
                      </div>
                      <h5>
                        <Link legacyBehavior href={withLang("/service-details")}>
                          <a>{s.title}</a>
                        </Link>
                      </h5>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* /Grid beneficios */}
          </div>
        </div>
      </section>
      {/* /Why Choose */}

      {/* Pricing (3 planes) */}
      <section className="pricing-area-three pb-85 rpb-55" style={{ backgroundImage: "url(/assets/images/background/pricing-bg-dot-shape.png)" }}>
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">{t.pricingSection.subtitle}</span>
                <h2>{t.pricingSection.title}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {t.pricingSection?.plans?.slice(0, 3).map((plan, i) => (
              <div className="col-xl-4 col-md-6" key={plan.name}>
                <div className={`pricing-plan-item wow fadeInUp delay-0-${2 + i * 2}s ${i === 1 ? "style-two" : ""}`}>
                  {/* Badge opcional (ej: “Popular Package”) */}
                  {plan.badge && (
                    <span className="badge">
                      <i className="fas fa-star-of-life" />
                      <i className="fas fa-star-of-life" />
                      {plan.badge}
                      <i className="fas fa-star-of-life" />
                      <i className="fas fa-star-of-life" />
                    </span>
                  )}

                  {/* Icono + título + precio */}
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

                  {/* Features */}
                  <ul className={`list-style-one ${i === 1 ? "two-column" : ""}`}>
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link legacyBehavior href={withLang("/pricing")}>
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

      {/* CTA final */}
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
      {/* /CTA final */}
    </>
  );
}

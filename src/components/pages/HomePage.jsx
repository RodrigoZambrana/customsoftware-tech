import Link from "next/link";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/sliderProps";

const Counter = dynamic(() => import("@/src/components/Counter"), { ssr: false });

export default function HomePage({ t, locale }) {
  const isEn = locale === "en";

  return (
    <>
      <NextSeo
        title={t.seoTitle}
        description={t.seoDescription}
        canonical={isEn ? "https://www.software-strategy.com/en/" : "https://www.software-strategy.com/"}
        openGraph={{
          type: "website",
          locale: isEn ? "en_US" : "es_ES",
          url: isEn ? "https://www.software-strategy.com/en/" : "https://www.software-strategy.com/",
          siteName: "CustomSoftware-Tech",
          images: [{ url: "https://www.software-strategy.com/og-image.jpg", width: 1200, height: 630, alt: "CustomSoftware-Tech" }],
        }}
      />

      {/* Hero */}
      <section className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                  {t.heroTitle} <span>{t.heroHighlight}</span> <i>{t.heroItalic}</i>
                </h1>
                <p className="mt-25">{t.heroDescription}</p>
                <Link legacyBehavior href={isEn ? "/en/contact" : "/contacto"}>
                  <a className="theme-btn mt-25">
                    {t.heroCtaText} <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
                <img src="/assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="/assets/images/hero/hero.jpg" alt="Hero" />
          </div>
        </div>
        <div className="hero-bg">
          <img src="/assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>

      {/* About */}
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                <img src="/assets/images/about/circle-text.svg" alt="Circle Text" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">{t.aboutSubtitle}</span>
                  <h2>{t.aboutTitle}</h2>
                </div>
                <div className="content">
                  <p>{t.aboutText}</p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      {t.aboutCtaText} <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">{t.whatSubtitle}</span>
                  <h2>{t.whatTitle}</h2>
                </div>

                {t.whatItems.map((item, idx) => (
                  <div className={`what-we-do-item wow fadeInUp delay-0-${3 + idx * 2}s`} key={item.title}>
                    <div className="number">
                      <span>{item.number}</span>
                    </div>
                    <div className="content">
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                      <Link legacyBehavior href={item.href}>
                        <a className="read-more style-two">
                          <span>{item.cta}</span> <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img src="/assets/images/services/what-we-do.jpg" alt="What We Do" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="statistics-area pt-75 rpt-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            {t.stats.map((s, i) => (
              <div className="col-xl-2 col-lg-3 col-6" key={s.label}>
                <div className={`counter-item counter-text-wrap wow fadeInUp delay-0-${2 + i}s`}>
                  <i className="fal fa-check-circle" />
                  <Counter end={s.value} />
                  <span className="counter-title">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="service-three-area pt-70 rpt-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">{t.servicesSubtitle}</span>
                <h2>{t.servicesTitle}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {t.services.map((card, i) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={card.title}>
                <div className={`service-three-item wow ${i % 2 ? "fadeInDown" : "fadeInUp"} delay-0-2s`}>
                  <div className="title-icon">
                    <h5>
                      <Link legacyBehavior href={card.href}>
                        <a>{card.title}</a>
                      </Link>
                    </h5>
                    <img src="/assets/images/services/icon1.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <p>{card.text}</p>
                    <Link legacyBehavior href={card.href}>
                      <a className="read-more style-two">
                        <span>{isEn ? "Read more" : "Leer más"}</span> <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (banner + 2 planes) */}
      <section className="pricing-area-three pt-85">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">{t.pricingSubtitle}</span>
                <h2>{t.pricingTitle}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-2s">
              <div className="pricing-banner" style={{ backgroundImage: "url(/assets/images/background/pricing-banner-bg.jpg)" }}>
                <span className="join-us">{isEn ? "Work with us" : "Trabajemos juntos"}</span>
                <h4>{t.pricingBannerTitle}</h4>
                <Link legacyBehavior href="/pricing">
                  <a className="details-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <div className="hand-shape">
                  <img src="/assets/images/shapes/pricing-banner-hand-shape.png" alt="Pricing Banner Shape" />
                </div>
              </div>
            </div>

            {t.pricingPlans.map((plan, idx) => (
              <div className={`col-xl-4 col-md-6 wow fadeInUp delay-0-${4 + idx * 2}s`} key={plan.name}>
                <div className="pricing-plan-item style-three" style={{ backgroundImage: "url(/assets/images/shapes/pricing-plan-bg.png)" }}>
                  <div className="icon-title">
                    <div className="icon">
                      <img src="/assets/images/icons/price.svg" alt="Icon" />
                    </div>
                    <h5>{plan.name}</h5>
                  </div>
                  <p>{plan.desc}</p>
                  <ul className="list-style-one">
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="price-offer">
                    <span className="price-text">
                      <span className="before">$</span>
                      <span className="price">—</span>
                    </span>
                    <img src="/assets/images/shapes/right-arrow.png" alt="Arrow" />
                    <span className="offer-text">{plan.priceNote}</span>
                  </div>
                  <Link legacyBehavior href={plan.href}>
                    <a className="theme-btn w-100">
                      {isEn ? "See details" : "Ver detalles"} <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-area pt-90 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7">
              <div className="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s">
                <img src="/assets/images/services/why-choose-left.jpg" alt="Why Choose" />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="why-choose-two-wrap">
                <div className="section-title mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">{t.whySubtitle}</span>
                  <h2>{t.whyTitle}</h2>
                </div>

                {t.whyItems.map((w, i) => (
                  <div className={`why-choose-item-two wow fadeInUp delay-0-${3 + i * 2}s`} key={w.title}>
                    <div className="icon">
                      <i className="fas fa-check" />
                      <span className="icon-bottom-shape" />
                    </div>
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href={w.href}>
                          <a>{w.title}</a>
                        </Link>
                      </h4>
                      <p>{w.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      {/* <section className="blog-area-two pt-125 rpt-100 pb-70 rpb-40">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">{t.blogSubtitle}</span>
                <h2>{t.blogTitle}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {t.blogItems.map((b, i) => (
              <div className={`col-xl-4 col-md-6 wow fadeInUp delay-0-${2 + i * 2}s`} key={b.title}>
                <div className="blog-item">
                  <div className="image">
                    <img src={`/assets/images/blog/blog${i + 1}.jpg`} alt="Blog" />
                  </div>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" /> <a href="#">{b.date}</a>
                    </li>
                    <li>
                      <i className="far fa-comments" /> <a href="#">—</a>
                    </li>
                  </ul>
                  <hr />
                  <h4>
                    <Link legacyBehavior href={b.href}>
                      <a>{b.title}</a>
                    </Link>
                  </h4>
                  <Link legacyBehavior href={b.href}>
                    <a className="read-more">
                      {isEn ? "Read more" : "Leer más"} <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

import Layout from "@/src/layout/Layout";
import { NextSeo } from "next-seo";
import DefaultSEO from "@/next-seo.config";
import Link from "next/link";
import PageBanner from "@/src/components/PageBanner";

const About = () => {
  return (
    <Layout dark locale="en">
      <NextSeo
        title="About Us"
        description="Learn about our mission, how we work and services."
        canonical={`${(DefaultSEO?.canonical || 'https://software-strategy.com/').replace(/\/$/, '')}/en/about`}
        languageAlternates={[
          { hrefLang: 'es', href: `${(DefaultSEO?.canonical || 'https://software-strategy.com/').replace(/\/$/, '')}/about` },
          { hrefLang: 'en', href: `${(DefaultSEO?.canonical || 'https://software-strategy.com/').replace(/\/$/, '')}/en/about` },
          { hrefLang: 'x-default', href: `${(DefaultSEO?.canonical || 'https://software-strategy.com/').replace(/\/$/, '')}/about` },
        ]}
      />
      <PageBanner pageName="About Us" homeLabel="Home" homeHref="/en" />

      <section className="why-choose-area pt-100 rpt-80 pb-80 rpb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="row">
                <div className="col-xl-11">
                  <div className="why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s">
                    <div className="section-title mb-40">
                      <span className="sub-title mb-15">About the Company</span>
                      <h2>Our services and solutions</h2>
                    </div>
                    <h5>Mission</h5>
                    <p>
                      We design and build digital experiences focused on performance, SEO and conversion. We combine technology,
                      design and strategy to deliver measurable results.
                    </p>
                    <br />
                    <h5>How we work</h5>
                    <p>
                      We prioritize iterative deliveries, clear metrics and data‑driven decisions. We support you with close collaboration and
                      continuous improvement.
                    </p>
                    <div className="mt-35 d-flex gap-3 flex-wrap">
                      <Link legacyBehavior href="/en/services">
                        <a className="theme-btn style-two" data-cta="about-services">
                          View services <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                      <Link legacyBehavior href="/en/contact">
                        <a className="theme-btn" data-cta="about-contact">
                          Let’s talk <i className="far fa-arrow-right" />
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
                      <Link legacyBehavior href="/en/services/web-development">
                        <a>Web Development</a>
                      </Link>
                    </h5>
                    <p>Fast, secure, conversion‑oriented websites. Ready for SEO and campaigns.</p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-3s">
                    <div className="icon"><i className="fal fa-bullhorn" /></div>
                    <h5>
                      <Link legacyBehavior href="/en/services/digital-marketing">
                        <a>Digital Marketing</a>
                      </Link>
                    </h5>
                    <p>Strategies on Google and social media with measurable results.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item mt-30 wow fadeInRight delay-0-4s">
                    <div className="icon"><i className="fal fa-search" /></div>
                    <h5>
                      <Link legacyBehavior href="/en/services/google-seo">
                        <a>Google SEO</a>
                      </Link>
                    </h5>
                    <p>Technical and content SEO to increase organic visibility.</p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-5s">
                    <div className="icon"><i className="fal fa-cogs" /></div>
                    <h5>
                      <Link legacyBehavior href="/en/services/custom-software">
                        <a>Custom Software</a>
                      </Link>
                    </h5>
                    <p>Integrations, automation and tailored dashboards to scale operations.</p>
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
                <div className="why-choose-header"><i className="flaticon-optimization-1" /><h5>Performance & SEO</h5></div>
                <p>Core Web Vitals, indexation and structure to maximize visibility and conversion.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-3s">
                <div className="why-choose-header"><i className="flaticon-mobile-banking" /><h5>Measurement & data</h5></div>
                <p>GA4, events and dashboards for informed decisions and continuous improvement.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header"><i className="flaticon-creativity" /><h5>Senior team</h5></div>
                <p>Clear processes, iterative deliveries and close support at every stage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

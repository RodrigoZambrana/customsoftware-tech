import Link from "next/link";

const PageBanner = ({ pageName, homeLabel = "Home", homeHref = "/", parentLabel, parentHref }) => {
  return (
    <section
      className="page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
      style={{ backgroundImage: "url(/assets/images/banner/banner-bg.jpg)" }}
    >
      <div className="container">
        <div className="banner-inner rpt-10">
          <h1 className="page-title wow fadeInUp delay-0-2s">{pageName}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link legacyBehavior href={homeHref}>
                  <a>{homeLabel}</a>
                </Link>
              </li>
              {parentLabel && parentHref && (
                <li className="breadcrumb-item">
                  <Link legacyBehavior href={parentHref}>
                    <a>{parentLabel}</a>
                  </Link>
                </li>
              )}
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;

import Link from "next/link";

import { Fragment, useState } from "react";
const Menu = ({ singleMenu, variant, locale }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          {variant === 'minimal' ? (
            <>
              <MinimalDesktop locale={locale} />
              <MinimalMobile locale={locale} />
            </>
          ) : (
            <>
              <DaskTopMenu locale={locale} />
              <MobileMenuSimple locale={locale} />
            </>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;

const DaskTopMenu = ({ locale }) => {
  const isEn = locale === 'en';
  const withLang = (href) => {
    if (!href) return '/';
    if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')) return href;
    const path = href.startsWith('/') ? href : `/${href}`;
    return isEn ? `/en${path === '/en' ? '' : path}` : path;
  };
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
      <li>
        <Link legacyBehavior href={withLang('/')}>{isEn ? 'Home' : 'Inicio'}</Link>
      </li>
      <li className="dropdown">
        <a href="#">{isEn ? 'Services' : 'Servicios'}</a>
        <ul>
          <li>
            <Link legacyBehavior href={withLang('services')}>
              {isEn ? 'Our Services' : 'Nuestros Servicios'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/web-development')}>
              {isEn ? 'Web Development' : 'Desarrollo Web'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/custom-software')}>
              {isEn ? 'Custom Software' : 'Software a medida'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/digital-marketing')}>
              {isEn ? 'Digital Marketing' : 'Marketing Digital'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/seo-sem')}>
              {isEn ? 'SEO & SEM' : 'SEO & SEM'}
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="far fa-plus" />
        </div>
      </li>
      <li>
        <Link legacyBehavior href={withLang('faqs')}>{isEn ? 'FAQs' : 'FAQs'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('about')}>{isEn ? 'About Us' : 'Sobre Nosotros'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('contact')}>{isEn ? 'Contact' : 'Contacto'}</Link>
      </li>
    </ul>
  );
};

const MobileMenu = ({ locale }) => {
  const isEn = locale === 'en';
  const withLang = (href) => {
    if (!href) return '/';
    if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')) return href;
    const path = href.startsWith('/') ? href : `/${href}`;
    return isEn ? `/en${path === '/en' ? '' : path}` : path;
  };
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li className="dropdown">
        <a href="#">Home</a>
        <ul style={activeLi("home")}>
          <li className="dropdown">
            <a href="#">MultiPage</a>
            <ul style={multiMenuActiveLi("multiPage")}>
              <li>
                <Link legacyBehavior href="/">
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index2">
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index3">
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index4">
                  Web Developer
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index5">
                  Marketing Agency
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index6">
                  Creative Agency
                </Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => multiMenuSet("multiPage")}
            >
              <span className="far fa-plus" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">OnePage</a>
            <ul style={multiMenuActiveLi("OnePage")}>
              <li>
                <Link legacyBehavior href="index1-onepage">
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index2-onepage">
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index3-onepage">
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index4-onepage">
                  Web Developer
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index5-onepage">
                  Marketing Agency
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="index6-onepage">
                  Creative Agency
                </Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => multiMenuSet("OnePage")}
            >
              <span className="far fa-plus" />
            </div>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("home")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li>
        <Link legacyBehavior href="about">
          About Us
        </Link>
      </li>
      <li className="dropdown">
        <a href="#">pages</a>
        <ul style={activeLi("pages")}>
          <li>
            <Link legacyBehavior href="faqs">
              faqs
            </Link>
          </li>
          <li className="dropdown">
            <a href="#">Products</a>
            <ul style={multiMenuActiveLi("Products")}>
              <li>
                <Link legacyBehavior href="shop">
                  our Products
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="product-details">
                  Product Details
                </Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => multiMenuSet("Products")}
            >
              <span className="far fa-plus" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Team</a>
            <ul style={multiMenuActiveLi("Team")}>
              <li>
                <Link legacyBehavior href="team">
                  Team Members
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="team-details">
                  Team Details
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => multiMenuSet("Team")}>
              <span className="far fa-plus" />
            </div>
          </li>
          <li>
            <Link legacyBehavior href="contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="pricing">
              Pricing Plan
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="404">
              404 error
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("pages")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">{isEn ? 'Services' : 'Servicios'}</a>
        <ul style={activeLi("Services")}>
          <li>
            <Link legacyBehavior href={withLang('services')}>
              {isEn ? 'Our Services' : 'Nuestros Servicios'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/web-development')}>
              {isEn ? 'Web Development' : 'Desarrollo Web'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/custom-software')}>
              {isEn ? 'Custom Software' : 'Software a medida'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/digital-marketing')}>
              {isEn ? 'Digital Marketing' : 'Marketing Digital'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/seo-sem')}>
              {isEn ? 'SEO & SEM' : 'SEO & SEM'}
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Services")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Projects</a>
        <ul style={activeLi("Projects")}>
          <li>
            <Link legacyBehavior href="projects">
              Project Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="project-list">
              Project List
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="project-details">
              Project Details
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("Projects")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">blog</a>
        <ul style={activeLi("blog")}>
          <li>
            <Link legacyBehavior href="blog">
              blog Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="blog-standard">
              blog standard
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="blog-details">
              blog details
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("blog")}>
          <span className="far fa-plus" />
        </div>
      </li>
    </ul>
  );
};

const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#projects">project</a>
      </li>
      <li>
        <a href="#pricing">pricing</a>
      </li>
      <li>
        <a href="#news">news</a>
      </li>
    </ul>
  );
};

const MobileMenuSimple = ({ locale }) => {
  const isEn = locale === 'en';
  const withLang = (href) => {
    if (!href) return '/';
    if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')) return href;
    const path = href.startsWith('/') ? href : `/${href}`;
    return isEn ? `/en${path === '/en' ? '' : path}` : path;
  };
  const [activeMenu, setActiveMenu] = useState('');
  const activeMenuSet = (value) => setActiveMenu(activeMenu === value ? '' : value);
  const activeLi = (value) => (value === activeMenu ? { display: 'block' } : { display: 'none' });
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li>
        <Link legacyBehavior href={withLang('/')}>{isEn ? 'Home' : 'Inicio'}</Link>
      </li>
      <li className="dropdown">
        <a href="#">{isEn ? 'Services' : 'Servicios'}</a>
        <ul style={activeLi('Services')}>
          <li>
            <Link legacyBehavior href={withLang('services')}>
              {isEn ? 'Our Services' : 'Nuestros Servicios'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/web-development')}>
              {isEn ? 'Web Development' : 'Desarrollo Web'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/custom-software')}>
              {isEn ? 'Custom Software' : 'Software a medida'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/digital-marketing')}>
              {isEn ? 'Digital Marketing' : 'Marketing Digital'}
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={withLang('services/seo-sem')}>
              {isEn ? 'SEO & SEM' : 'SEO & SEM'}
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet('Services')}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li>
        <Link legacyBehavior href={withLang('faqs')}>{isEn ? 'FAQs' : 'FAQs'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('about')}>{isEn ? 'About Us' : 'Sobre Nosotros'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('contact')}>{isEn ? 'Contact' : 'Contacto'}</Link>
      </li>
    </ul>
  );
};

const MinimalDesktop = ({ locale }) => {
  const isEn = locale === 'en';
  const withLang = (href) => {
    if (!href) return '/';
    if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')) return href;
    const path = href.startsWith('/') ? href : `/${href}`;
    return isEn ? `/en${path === '/en' ? '' : path}` : path;
  };
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
      <li>
        <Link legacyBehavior href={withLang('/')}>{isEn ? 'Home' : 'Inicio'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('/services')}>{isEn ? 'Services' : 'Servicios'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('/contact')}>{isEn ? 'Contact' : 'Contacto'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('/faqs')}>{isEn ? 'FAQs' : 'Preguntas'}</Link>
      </li>
    </ul>
  );
};

const MinimalMobile = ({ locale }) => {
  const isEn = locale === 'en';
  const withLang = (href) => {
    if (!href) return '/';
    if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')) return href;
    const path = href.startsWith('/') ? href : `/${href}`;
    return isEn ? `/en${path === '/en' ? '' : path}` : path;
  };
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li>
        <Link legacyBehavior href={withLang('/')}>{isEn ? 'Home' : 'Inicio'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('/services')}>{isEn ? 'Services' : 'Servicios'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('/contact')}>{isEn ? 'Contact' : 'Contacto'}</Link>
      </li>
      <li>
        <Link legacyBehavior href={withLang('/faqs')}>{isEn ? 'FAQs' : 'Preguntas'}</Link>
      </li>
    </ul>
  );
};

import Link from "next/link";
import { useState } from "react";

export default function MobileSlideMenu({ locale = "es" }) {
  const isEn = locale === "en";
  const withLang = (href) => {
    if (!href) return "/";
    if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
    const path = href.startsWith("/") ? href : `/${href}`;
    return isEn ? `/en${path === "/en" ? "" : path}` : path;
  };

  const [open, setOpen] = useState({ services: true, pages: false, blog: false });

  const seoHref = withLang("/services/google-seo");

  return (
    <div className="slide-panel-content">
      <div className="slide-panel-logo mb-20">
        <img src="/assets/images/logos/logo-and-text.png" alt="Logo" style={{ maxWidth: 160, height: "auto" }} />
      </div>
      {/* Replicar estructura de navbar original para heredar estilos */}
      <div className="main-menu">
        <div className="navbar-collapse clearfix collapse show">
        {/* Lista desktop (no visible en panel, pero mantiene estructura) */}
        <ul className="navigation d-none d-lg-flex desktop-menu">
          <li>
            <Link legacyBehavior href={withLang("/")}> 
              <a>{isEn ? "Home" : "Inicio"}</a>
            </Link>
          </li>
          <li className="dropdown">
            <a href="#">{isEn ? "Services" : "Servicios"}</a>
            <ul>
              <li><Link legacyBehavior href={withLang("/services/web-development")}><a>{isEn ? "Web Development" : "Desarrollo Web"}</a></Link></li>
              <li><Link legacyBehavior href={withLang("/services/digital-marketing")}><a>{isEn ? "Digital Marketing" : "Marketing Digital"}</a></Link></li>
              <li><Link legacyBehavior href={withLang("/services/custom-software")}><a>{isEn ? "Custom Software" : "Software a medida"}</a></Link></li>
              <li><Link legacyBehavior href={seoHref}><a>{isEn ? "Google SEO" : "Posicionamiento en Google (SEO)"}</a></Link></li>
              <li><Link legacyBehavior href={withLang("/services")}><a>{isEn ? "All Services" : "Todos los servicios"}</a></Link></li>
            </ul>
            <div className="dropdown-btn"><span className="far fa-plus"></span></div>
          </li>
          <li><Link legacyBehavior href={withLang("/faqs")}><a>{isEn ? "FAQs" : "FAQs"}</a></Link></li>
          <li><Link legacyBehavior href={withLang("/about")}><a>{isEn ? "About Us" : "Sobre Nosotros"}</a></Link></li>
          <li><Link legacyBehavior href={withLang("/contact")}><a>{isEn ? "Contact" : "Contacto"}</a></Link></li>
        </ul>
        {/* Lista móvil igual a la original */}
        <ul className="navigation d-block d-lg-none mobile-menu">
          <li>
            <Link legacyBehavior href={withLang("/")}>
              <a>{isEn ? "Home" : "Inicio"}</a>
            </Link>
          </li>
          <li className="dropdown">
            <a href="#">{isEn ? "Services" : "Servicios"}</a>
            <ul style={{ display: open.services ? "block" : "none" }}>
              <li><Link legacyBehavior href={withLang("/services/web-development")}><a>{isEn ? "Web Development" : "Desarrollo Web"}</a></Link></li>
              <li><Link legacyBehavior href={withLang("/services/digital-marketing")}><a>{isEn ? "Digital Marketing" : "Marketing Digital"}</a></Link></li>
              <li><Link legacyBehavior href={withLang("/services/custom-software")}><a>{isEn ? "Custom Software" : "Software a medida"}</a></Link></li>
              <li><Link legacyBehavior href={seoHref}><a>{isEn ? "Google SEO" : "Posicionamiento en Google (SEO)"}</a></Link></li>
              <li><Link legacyBehavior href={withLang("/services")}><a>{isEn ? "All Services" : "Todos los servicios"}</a></Link></li>
            </ul>
            <div className="dropdown-btn" onClick={() => setOpen({ ...open, services: !open.services })}>
              <span className="far fa-plus"></span>
            </div>
          </li>
          <li><Link legacyBehavior href={withLang("/faqs")}><a>{isEn ? "FAQs" : "FAQs"}</a></Link></li>
          <li><Link legacyBehavior href={withLang("/about")}><a>{isEn ? "About Us" : "Sobre Nosotros"}</a></Link></li>
          <li><Link legacyBehavior href={withLang("/contact")}><a>{isEn ? "Contact" : "Contacto"}</a></Link></li>
        </ul>
        </div>
      </div>
      <style jsx>{`
        .slide-panel-content { text-align: left; }
        .slide-panel-close { cursor: pointer; margin-bottom: 10px; }
        .slide-panel-menu ul { list-style: none; padding-left: 0; }
        .slide-panel-menu a { color: white; display: block; padding: 10px 0; }
        .mobile-menu .dropdown { position: relative; }
        .mobile-menu .dropdown .dropdown-btn { position: absolute; right: 0; top: 8px; cursor: pointer; }
        .sub-menu { padding-left: 15px; }
        .menu-item-has-children.open > a .submenu-toggler i { transform: rotate(180deg); }
      `}</style>
    </div>
  );
}

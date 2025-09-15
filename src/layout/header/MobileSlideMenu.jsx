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

  const [open, setOpen] = useState({ services: false, pages: false, blog: false });

  return (
    <div className="slide-panel-content">
      <div className="slide-panel-close" onClick={() => document.body.classList.remove("side-content-visible")}>
        <i className="fal fa-times"></i>
      </div>
      <div className="slide-panel-logo mb-20">
        <img src="/assets/images/logos/noBgColor.png" alt="Logo" style={{ maxWidth: 160, height: "auto" }} />
      </div>
      <nav className="slide-panel-menu">
        <ul className="primary-menu">
          <li>
            <Link href={withLang("/")}> <span className="link-text">{isEn ? "Home" : "Inicio"}</span> </Link>
          </li>
          <li className={`menu-item-has-children ${open.services ? "open" : ""}`}>
            <a onClick={() => setOpen({ ...open, services: !open.services })}>
              <span className="link-text">{isEn ? "Services" : "Servicios"}</span>
              <span className="submenu-toggler"><i className="far fa-angle-down"></i></span>
            </a>
            {open.services && (
              <ul className="sub-menu">
                <li><Link href={withLang("/services")}><span className="link-text">{isEn ? "Our Services" : "Nuestros Servicios"}</span></Link></li>
                <li><Link href={withLang("/services/web-development")}><span className="link-text">{isEn ? "Web Development" : "Desarrollo Web"}</span></Link></li>
                <li><Link href={withLang("/services/custom-software")}><span className="link-text">{isEn ? "Custom Software" : "Software a Medida"}</span></Link></li>
                <li><Link href={withLang("/services/digital-marketing")}><span className="link-text">{isEn ? "Digital Marketing" : "Marketing Digital"}</span></Link></li>
                <li><Link href={withLang("/services/seo-sem")}><span className="link-text">SEO &amp; SEM</span></Link></li>
              </ul>
            )}
          </li>
          <li><Link href={withLang("/faqs")}><span className="link-text">{isEn ? "FAQs" : "Preguntas"}</span></Link></li>
          <li><Link href={withLang("/about")}><span className="link-text">{isEn ? "About" : "Nosotros"}</span></Link></li>
          <li><Link href={withLang("/contact")}><span className="link-text">{isEn ? "Contact" : "Contacto"}</span></Link></li>
        </ul>
      </nav>
      <style jsx>{`
        .slide-panel-content { text-align: left; }
        .slide-panel-close { cursor: pointer; margin-bottom: 10px; }
        .slide-panel-menu ul { list-style: none; padding-left: 0; }
        .slide-panel-menu a { color: white; display: flex; justify-content: space-between; align-items: center; padding: 10px 0; }
        .sub-menu { padding-left: 10px; }
        .menu-item-has-children.open > a .submenu-toggler i { transform: rotate(180deg); }
      `}</style>
    </div>
  );
}


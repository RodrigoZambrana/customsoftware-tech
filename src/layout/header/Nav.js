import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

const Nav = ({ singleMenu, variant, locale }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="main-menu navbar-expand-lg">
      <div className="navbar-header py-10">
        <div className="mobile-logo">
          <Link legacyBehavior href="/">
            <a>
              <img
                src="/assets/images/logos/noBgColor.png"
                alt="Logo"
                title="Logo"
              />
            </a>
          </Link>
        </div>
        {/* Toggle Button (no react-bootstrap to avoid findDOMNode) */}
        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className={`navbar-collapse clearfix collapse${open ? ' show' : ''}`}>
        <Menu singleMenu={singleMenu} variant={variant} locale={locale} />
      </div>
    </nav>
  );
};
export default Nav;

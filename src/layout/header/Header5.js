import Link from "next/link";
import LanguageSelect from "./LanguageSelect";
import Nav from "./Nav"; // navBarOriginal (referencia)
import NavSearch from "./NavSearch";

const Header5 = ({ singleMenu, dark, locale }) => {
  return (
    <header className="main-header menu-absolute header-two">
      <div className="header-upper">
      <div className="header-top bgc-primary">
        <div className="container container-1620">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="top-right">
              <LanguageSelect />
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "/assets/images/logos/noBgColor.png"
                          : "/assets/images/logos/noBgColor.png"
                      }
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-lg-auto clearfix">
              {/* Main Menu - original style */}
              <Nav singleMenu={singleMenu} locale={locale} />
            </div>
            {/* Nav Search */}
            <NavSearch />
            {/* Menu Button */}
            <div className="menu-btns">
              <button>
                <i className="far fa-shopping-basket" />
              </button>
              <div className="call-anytime">
                <div className="icon">
                  <i className="fas fa-comments-alt" />
                </div>
                <div className="content">
                  <span>Call Anytime</span>
                  <a href="callto:985236425288">98 523 642 5288</a>
                </div>
              </div>
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button>
                  <img
                    src="/assets/images/icons/toggler-white.svg"
                    alt="Toggler"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header5;

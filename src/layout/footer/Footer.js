import DefaultFooter from "./DefaultFooter";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import Footer5 from "./Footer5";
import Footer6 from "./Footer6";
const Footer = ({ footer, dark,locale, t}) => {

  switch (footer) {
    case 1:
      return  <DefaultFooter dark={dark} locale={locale} t={t} />
    case 2:
      return <Footer2 dark={dark} locale={locale} t={t}/>;
    case 3:
      return <Footer3 dark={dark} locale={locale} t={t}/>;
    case 4:
      return <Footer4 dark={dark} locale={locale} t={t}/>;
    case 5:
      return <Footer5 dark={dark} locale={locale} t={t}/>;
    case 6:
      return <Footer6 dark={dark} locale={locale} t={t}/>;
    default:
      return   <DefaultFooter dark={dark} locale={locale} t={t} />
  }
};
export default Footer;

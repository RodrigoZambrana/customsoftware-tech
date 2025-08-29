import { Fragment, useEffect, useMemo } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import ScrollTop from "./ScrollTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideBar from "./header/SideBar";
import esFooter from "@/content/es/footer.json";
import enFooter from "@/content/en/footer.json";
import { animation, sidebarClick, stickyNav, scrollTopFun } from "@/src/utils";

const Layout = ({ children, header, footer, singleMenu, dark, locale}) => {
  const t = useMemo(() => (locale === "en" ? enFooter : esFooter), [locale]);



useEffect(() => {
  const offWow = animation();
  const offSidebar = sidebarClick();
  const offSticky = stickyNav();
  const offScrollTop = scrollTopFun();

  return () => {
    offWow?.();
    offSidebar?.();
    offSticky?.();
    offScrollTop?.();
  };
}, []);


  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} singleMenu={singleMenu} dark={dark} />
        <SideBar />
        {children}
        <Footer footer={footer} dark={dark} locale={locale} t={t} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;

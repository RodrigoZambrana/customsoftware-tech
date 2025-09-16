// utils.js

/** WOW/animaciones seguras en SSR (con fallback) */
export const animation = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return () => {};

  // Si el entorno no soporta MutationObserver, evitamos inicializar WOW
  const hasMO = typeof window.MutationObserver !== "undefined";
  let wowInstance = null;

  try {
    const WOWLib = require("wowjs");
    if (hasMO && WOWLib?.WOW) {
      // live:false evita observers adicionales y reduce glitches
      wowInstance = new WOWLib.WOW({ live: false });
      wowInstance.init();
    } else {
      // Fallback: marcar elementos .wow como "animados" para que no queden sin estilos
      document.querySelectorAll(".wow").forEach((el) => {
        el.classList.add("animated");
      });
      if (!hasMO) {
        console.warn("MutationObserver no disponible; WOW deshabilitado");
      }
    }
  } catch (e) {
    console.warn("WOW.js no pudo inicializarse:", e);
  }

  // WOW.js no expone destroy de forma fiable; retornamos noop
  return () => {};
};

/** Sticky header con cleanup */
export const stickyNav = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return () => {};

  const headers = Array.from(document.querySelectorAll(".main-header"));
  if (!headers.length) return () => {};

  const onScroll = () => {
    const offset = window.scrollY || 0;
    headers.forEach((el) => {
      if (!el) return;
      if (offset > 10) el.classList.add("fixed-header");
      else el.classList.remove("fixed-header");
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  // Ejecuta una vez para aplicar estado inicial
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
};

/** Sidebar open/close con null-checks y cleanup */
export const sidebarClick = () => {
  if (typeof document === "undefined") return () => {};

  const buttons = Array.from(document.querySelectorAll(".menu-sidebar button"));
  const backDrop = document.querySelector(".form-back-drop");
  const crossIcon = document.querySelector(".cross-icon");

  const open = () => document.body.classList.add("side-content-visible");
  const close = () => document.body.classList.remove("side-content-visible");

  buttons.forEach((btn) => btn.addEventListener("click", open));
  backDrop?.addEventListener("click", close);
  crossIcon?.addEventListener("click", close);

  // Close sidebar when clicking on any menu link inside the hidden bar
  const sideLinks = Array.from(document.querySelectorAll(".hidden-bar .slide-panel-content a"));
  sideLinks.forEach((a) => a.addEventListener("click", close));

  return () => {
    buttons.forEach((btn) => btn.removeEventListener("click", open));
    backDrop?.removeEventListener("click", close);
    crossIcon?.removeEventListener("click", close);
    sideLinks.forEach((a) => a.removeEventListener("click", close));
  };
};

/** Botón scroll-top con cleanup y null-checks */
export const scrollTopFun = () => {
  if (typeof window === "undefined" || typeof document === "undefined") return () => {};

  const scrollUp = document.querySelector(".scroll-top");
  if (!scrollUp) return () => {};

  const onScroll = () => {
    const st = window.scrollY || 0;
    scrollUp.style.display = st > 110 ? "block" : "none";
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
};

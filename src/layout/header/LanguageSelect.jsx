// components/LanguageSelect.jsx
import { useEffect, useMemo, useRef, useState } from "react";

export default function LanguageSelect() {
  const selectRef = useRef(null);
  const [pathname, setPathname] = useState("/");

  // Al montar, tomamos el path actual del browser (evita SSR issues con window)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname || "/");
    }
  }, []);

  // ¿Estamos en inglés?
  const isEnglish = useMemo(() => pathname.startsWith("/en"), [pathname]);

  // Construcción de URLs destino
  const toEs = useMemo(() => {
    const p = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    return p;
  }, [pathname]);

  const toEn = useMemo(() => {
    const p = pathname === "/" ? "" : pathname; // conserva el resto del path
    return `/en${p}`;
  }, [pathname]);

  // Listener nativo en captura (gana prioridad frente a plugins que hijackean eventos)
  useEffect(() => {
    const el = selectRef.current;
    if (!el) return;

    const onChange = (e) => {
      const val = e.target.value; // "es" | "en"
      const href = val === "en" ? toEn : toEs;

      try {
        // Redirección dura para evitar interferencias de plugins
        window.location.assign(href);
      } catch {
        window.location.href = href;
      }
    };

    // Fase de captura = true
    el.addEventListener("change", onChange, { capture: true });

    // Limpieza
    return () => el.removeEventListener("change", onChange, { capture: true });
  }, [toEn, toEs]);

  return (
    <div className="lang-select">
      <select
        // MUY IMPORTANTE: no permitir que un plugin lo tome
        data-nice="false"
        ref={selectRef}
        name="language"
        id="language"
        value={isEnglish ? "en" : "es"}
        onChange={() => {
          /* manejado por listener nativo */
        }}
        aria-label="Language"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

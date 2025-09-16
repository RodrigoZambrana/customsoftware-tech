import { useRef } from "react";

/**
 * Acordeón ligero compatible con StrictMode.
 * Props:
 * - title: string
 * - isOpen: boolean
 * - onToggle: () => void
 * - children: contenido de la respuesta
 *
 * Mantiene clases similares para no romper el look & feel del template.
 */
export default function YgencyAccordionLite({ title, isOpen, onToggle, children }) {
  const bodyRef = useRef(null);

  const maxHeight = isOpen && bodyRef.current
    ? bodyRef.current.scrollHeight
    : 0;

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <button
        type="button"
        className="accordion-button d-flex align-items-center justify-content-between w-100"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`acc-panel-${title}`}
      >
        <span className="accordion-title">{title}</span>
      </button>

      <div
        id={`acc-panel-${title}`}
        className="accordion-collapse"
        style={{
          overflow: "hidden",
          maxHeight,
          transition: "max-height 300ms ease"
        }}
      >
        <div ref={bodyRef} className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
}

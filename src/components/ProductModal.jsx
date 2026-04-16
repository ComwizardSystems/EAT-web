import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

/**
 * ProductModal – a reusable overlay for browsing a list of products
 * (fruits or vegetables) and viewing detailed information about each one.
 *
 * Props
 * -----
 * @param {boolean} open           - Whether the modal is visible.
 * @param {Function} onClose       - Callback to close the modal.
 * @param {string} title           - The modal heading, e.g. "Fresh Fruits".
 * @param {string} image           - Header image src.
 * @param {string} imageAlt        - Alt text for the header image.
 * @param {string[]} items         - Ordered list of product names.
 * @param {Object} infoMap         - Map of product name → product info object.
 * @param {string} accentColor     - Tailwind colour key: "emerald" | "amber" | "rose", etc.
 * @param {string} listBg          - Background class for the list panel, e.g. "bg-rose-50".
 * @param {string} detailBgFrom    - Gradient-from class for the detail panel.
 * @param {string} detailBgTo      - Gradient-to class for the detail panel.
 */
export default function ProductModal({
  open,
  onClose,
  title,
  image,
  imageAlt = "",
  items,
  infoMap,
  listBg = "bg-emerald-50",
  detailBgFrom = "from-emerald-50",
  detailBgTo = "to-lime-50",
  accentHover = "hover:text-emerald-700",
}) {
  const [selected, setSelected] = useState(null);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape key handler
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, handleKeyDown]);

  if (!open) return null;

  const detail = selected ? infoMap[selected] : null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} details`}
      className="fixed inset-0 z-60 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="
          relative bg-white rounded-2xl w-full max-w-2xl
          max-h-[85vh] overflow-hidden shadow-2xl
          animate-[scaleIn_250ms_ease-out]
          flex flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-8 pt-8 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-4">
            {image && (
              <img
                src={image}
                alt={imageAlt}
                className="w-14 h-14 rounded-xl object-cover shadow-sm"
              />
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {selected && (
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="
                  text-sm font-medium text-slate-500 hover:text-emerald-700
                  transition-colors duration-200
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 rounded
                "
              >
                ← Back to list
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="
                w-10 h-10 rounded-xl flex items-center justify-center
                text-slate-400 hover:text-slate-700 hover:bg-slate-100
                transition-colors duration-200
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600
              "
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {/* Item list */}
          {!selected && (
            <div className={`p-5 rounded-xl ${listBg} border border-slate-100`}>
              <ul className="space-y-1">
                {items.map((item, index) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => setSelected(item)}
                      className={`
                        w-full text-left px-4 py-2.5 rounded-lg text-slate-700
                        transition-all duration-200
                        hover:bg-white/80 hover:shadow-sm
                        ${accentHover} hover:font-semibold
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600
                      `}
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      <span className="inline-block w-5 text-slate-400 text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Detail view */}
          {selected && detail && (
            <div
              className={`
                p-6 rounded-xl border border-slate-200
                bg-linear-to-br ${detailBgFrom} ${detailBgTo}
                animate-[fadeIn_250ms_ease-out]
              `}
            >
              <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                {selected}
              </h4>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-5">
                {detail.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <DetailField label="Origin" value={detail.origin} />
                <DetailField label="Season" value={detail.season} />
                <DetailField label="Grade" value={detail.grade} />
                <DetailField label="Packaging" value={detail.packaging} />
                <DetailField label="Varieties" value={detail.varieties} span />
                <DetailField label="Shipping" value={detail.shipping} span />
                <DetailField label="Shelf Life" value={detail.shelfLife} span />
              </div>
            </div>
          )}

          {/* Prompt */}
          {!selected && (
            <p className="mt-5 text-center text-sm font-medium text-slate-500 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
              Click on any item above to view detailed information.
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* ---- Internal helper ---- */
function DetailField({ label, value, span = false }) {
  return (
    <div
      className={`
        bg-white/80 backdrop-blur-sm p-3 rounded-lg
        ${span ? "sm:col-span-2" : ""}
      `}
    >
      <span className="font-semibold text-slate-500 text-xs uppercase tracking-wider">
        {label}
      </span>
      <p className="text-slate-700 mt-0.5">{value}</p>
    </div>
  );
}

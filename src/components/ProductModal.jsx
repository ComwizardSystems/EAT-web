import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

/**
 * ProductModal – a beautiful overlay for browsing a list of products
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
 * @param {string} listBg          - Background class for the list panel, e.g. "bg-rose-50".
 * @param {string} detailBgFrom    - Gradient-from class for the detail panel.
 * @param {string} detailBgTo      - Gradient-to class for the detail panel.
 * @param {string} accentHover     - Hover text color, e.g. "hover:text-rose-700".
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
      {/* Animated backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-md animate-[fadeIn_250ms_ease-out]"
        onClick={onClose}
      />

      {/* Decorative background blobs */}
      <div
        className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
        aria-hidden="true"
      />

      {/* Main panel */}
      <div
        className="
          relative bg-white/95 backdrop-blur-xl rounded-3xl w-full max-w-2xl
          max-h-[85vh] overflow-hidden shadow-2xl
          animate-[scaleIn_300ms_ease-out]
          flex flex-col border border-white/60
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-8 pt-8 pb-6 border-b border-slate-100/80 bg-linear-to-b from-white to-slate-50/50">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {image && (
                <div className="relative group">
                  <div
                    className="absolute inset-0 bg-linear-to-br from-emerald-500 to-amber-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                    aria-hidden="true"
                  />
                  <img
                    src={image}
                    alt={imageAlt}
                    className="relative w-16 h-16 rounded-2xl object-cover shadow-lg shadow-slate-200/50 group-hover:shadow-xl group-hover:shadow-emerald-500/20 transition-all duration-300"
                  />
                </div>
              )}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {items.length} items available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {selected && (
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="
                    hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl
                    bg-slate-100 text-slate-700 text-sm font-semibold
                    hover:bg-emerald-50 hover:text-emerald-700
                    transition-all duration-300 hover:-translate-y-0.5
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                  "
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="
                  group flex items-center justify-center w-10 h-10 rounded-xl
                  bg-slate-100 text-slate-500
                  hover:bg-emerald-500 hover:text-white
                  transition-all duration-300 hover:rotate-90
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
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
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {/* Item list */}
          {!selected && (
            <div
              className={`
                p-6 rounded-2xl ${listBg} border border-slate-200/60
                backdrop-blur-sm shadow-sm
              `}
            >
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => setSelected(item)}
                      className={`
                        w-full text-left px-5 py-3.5 rounded-xl text-slate-700
                        transition-all duration-300
                        hover:bg-white/90 hover:shadow-md
                        ${accentHover} hover:font-semibold
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                        group flex items-center gap-4
                      `}
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/60 text-slate-400 text-xs font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{item}</span>
                      <svg
                        className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
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
                relative p-8 rounded-2xl border border-slate-200/60
                bg-linear-to-br ${detailBgFrom} ${detailBgTo}
                animate-[fadeIn_250ms_ease-out]
                backdrop-blur-sm
              `}
            >
              {/* Decorative header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {selected}
                  </h4>
                  <p className="text-sm text-slate-600 font-medium">
                    Premium Quality Product
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8 pb-6 border-b border-slate-300/50">
                {detail.description}
              </p>

              {/* Detail fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <DetailField label="Origin" value={detail.origin} icon="🌍" />
                <DetailField label="Season" value={detail.season} icon="📅" />
                <DetailField label="Grade" value={detail.grade} icon="⭐" />
                <DetailField
                  label="Packaging"
                  value={detail.packaging}
                  icon="📦"
                />
                <DetailField
                  label="Varieties"
                  value={detail.varieties}
                  span
                  icon="🍃"
                />
                <DetailField
                  label="Shipping"
                  value={detail.shipping}
                  span
                  icon="🚢"
                />
                <DetailField
                  label="Shelf Life"
                  value={detail.shelfLife}
                  span
                  icon="⏰"
                />
              </div>
            </div>
          )}

          {/* Prompt */}
          {!selected && (
            <div className="mt-6 text-center">
              <div className="relative inline-block">
                <div
                  className="absolute inset-0 bg-linear-to-r from-emerald-500 to-amber-500 opacity-10 blur-xl"
                  aria-hidden="true"
                />
                <p className="relative text-sm font-semibold text-slate-600 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/60 shadow-sm">
                  Click on any item above to view detailed information
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-slate-100/80 bg-linear-to-b from-slate-50/50 to-white flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Showing {selected ? "1" : items.length} item
            {items.length !== 1 && "s"}
          </p>
          {!selected && (
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg px-3 py-1.5"
            >
              Close
            </button>
          )}
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 opacity-10">
          <svg viewBox="0 0 32 32" className="w-full h-full text-emerald-500">
            <path
              d="M2 2 L14 2 L2 14"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute bottom-4 right-4 w-8 h-8 opacity-10">
          <svg viewBox="0 0 32 32" className="w-full h-full text-amber-500">
            <path
              d="M30 30 L18 30 L30 18"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* ---- Internal helper ---- */
function DetailField({ label, value, span = false, icon }) {
  return (
    <div
      className={`
        relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl
        shadow-sm hover:shadow-md transition-all duration-300
        ${span ? "sm:col-span-2" : ""}
        group
      `}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
            {label}
          </span>
          <p className="text-slate-700 font-medium leading-snug wrap-break-words group-hover:text-emerald-700 transition-colors duration-300">
            {value}
          </p>
        </div>
      </div>
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-8 bg-linear-to-r from-emerald-500 to-amber-500 rounded-full transition-all duration-500" />
    </div>
  );
}

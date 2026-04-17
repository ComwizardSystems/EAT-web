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
        <div className="relative px-5 sm:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6 border-b border-slate-100/80 bg-linear-to-b from-white to-slate-50/50">
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
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
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight truncate">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {items.length} items available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
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
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-5 sm:py-6">
          {/* Item list */}
          {!selected && (
            <div
              className={`
                p-4 sm:p-6 rounded-2xl ${listBg} border border-slate-200/60
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
                        w-full text-left px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-slate-700 text-sm sm:text-base
                        transition-all duration-300
                        hover:bg-white/90 hover:shadow-md
                        ${accentHover} hover:font-semibold
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                        group flex items-center gap-3 sm:gap-4
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
                relative p-5 sm:p-8 rounded-2xl border border-slate-200/60
                bg-linear-to-br ${detailBgFrom} ${detailBgTo}
                animate-[fadeIn_250ms_ease-out]
                backdrop-blur-sm
              `}
            >
              {/* Decorative header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
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
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <DetailField
                  label="Origin"
                  value={detail.origin}
                  icon={
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 0012 21c1.273 0 2.485-.236 3.584-.664"
                      />
                    </svg>
                  }
                />
                <DetailField
                  label="Season"
                  value={detail.season}
                  icon={
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 19.5h.008v.008H9.75v-.008zm0-2.25h.008v.008H9.75v-.008zm0-2.25h.008v.008H9.75v-.008zm-3 4.5h.008v.008H6.75v-.008zm0-2.25h.008v.008H6.75v-.008zm0-2.25h.008v.008H6.75v-.008zm0-2.25h.008v.008H6.75V9.75z"
                      />
                    </svg>
                  }
                />
                <DetailField
                  label="Grade"
                  value={detail.grade}
                  icon={
                    <svg
                      className="w-6 h-6 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
                <DetailField
                  label="Packaging"
                  value={detail.packaging}
                  icon={
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  }
                />
                <DetailField
                  label="Varieties"
                  value={detail.varieties}
                  span
                  icon={
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67"
                      />
                    </svg>
                  }
                />
                <DetailField
                  label="Shipping"
                  value={detail.shipping}
                  span
                  icon={
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                  }
                />
                <DetailField
                  label="Shelf Life"
                  value={detail.shelfLife}
                  span
                  icon={
                    <svg
                      className="w-6 h-6 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
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
        <div className="px-5 sm:px-8 py-3 sm:py-4 border-t border-slate-100/80 bg-linear-to-b from-slate-50/50 to-white flex items-center justify-between">
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
        <div className="shrink-0">{icon}</div>
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

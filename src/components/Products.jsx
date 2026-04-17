import { useState, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import ProductModal from "./ProductModal";
import {
  fruitInfo,
  fruitList,
  vegetableInfo,
  vegetableList,
} from "../data/products";
import Mango from "../assets/kesari.png";
import cabbage from "../assets/cabbage1.png";
import textile from "../assets/textile.png";
import footwear from "../assets/footwear.png";
import jewelry from "../assets/jewelry.png";
import export1 from "../assets/export.png";

const PRODUCT_CARDS = [
  {
    id: "fruits",
    title: "Fresh Fruits",
    subtitle: "Premium Quality",
    description:
      "Wide variety of premium quality fruits sourced from the finest farms across India",
    image: Mango,
    clickable: true,
    modalKey: "fruits",
  },
  {
    id: "vegetables",
    title: "Fresh Vegetables",
    subtitle: "Farm Fresh",
    description:
      "Farm-fresh vegetables with strict quality control and proper handling",
    image: cabbage,
    clickable: true,
    modalKey: "vegetables",
  },
  {
    id: "textiles",
    title: "Readymade Garments & Textiles",
    subtitle: "Premium Fabrics",
    description:
      "Trend-driven apparel and high-quality fabrics tailored to global markets",
    image: textile,
    clickable: false,
  },
  {
    id: "footwear",
    title: "Footwear",
    subtitle: "Durable & Stylish",
    description: "Stylish, durable, and cost-effective footwear solutions",
    image: footwear,
    clickable: false,
  },
  {
    id: "jewelry",
    title: "Imitation Jewellery",
    subtitle: "Elegant Designs",
    description:
      "Elegant and contemporary designs crafted to meet international fashion trends",
    image: jewelry,
    clickable: false,
  },
  {
    id: "export",
    title: "Global Export",
    subtitle: "Worldwide Delivery",
    description:
      "Seamless export services with expertise in international trade regulations",
    image: export1,
    clickable: false,
  },
];

export default function Products() {
  const [activeModal, setActiveModal] = useState(null);
  const [modalKey, setModalKey] = useState(0);

  const openModal = useCallback((key) => {
    setModalKey((k) => k + 1);
    setActiveModal(key);
  }, []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  const handleCardClick = useCallback(
    (card) => {
      if (card.clickable) openModal(card.modalKey);
    },
    [openModal],
  );

  return (
    <section id="products" className="relative bg-slate-900 overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(234,179,8,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <AnimatedSection animation="fade-up" delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              Products & Industries
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              We specialize in sourcing and exporting a diverse range of premium
              quality products from India
            </p>
          </div>
        </AnimatedSection>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CARDS.map((card, index) => (
            <AnimatedSection
              key={card.id}
              animation="fade-up"
              delay={index * 100}
            >
              <div
                role={card.clickable ? "button" : undefined}
                tabIndex={card.clickable ? 0 : undefined}
                aria-label={
                  card.clickable ? "View " + card.title + " details" : undefined
                }
                onClick={() => handleCardClick(card)}
                onKeyDown={(e) => {
                  if (card.clickable && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    handleCardClick(card);
                  }
                }}
                className={
                  "group relative h-full rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 " +
                  (card.clickable
                    ? "cursor-pointer hover:border-emerald-500/30 hover:-translate-y-2"
                    : "hover:border-white/10 hover:-translate-y-1")
                }
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/95 via-slate-900/70 to-slate-900/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 sm:p-8 min-h-56 sm:min-h-72 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-4">
                      {card.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {card.clickable ? (
                    <div className="mt-6 flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      LEARN MORE
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  ) : null}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <p className="mt-8 sm:mt-12 text-center text-slate-400 text-base sm:text-lg">
            And more &mdash; we continuously expand our portfolio based on
            market demand and client requirements.
          </p>
        </AnimatedSection>
      </div>

      {/* Modals */}
      <ProductModal
        key={"fruits-" + modalKey}
        open={activeModal === "fruits"}
        onClose={closeModal}
        title="Fresh Fruits"
        image={Mango}
        imageAlt="Fresh mango"
        items={fruitList}
        infoMap={fruitInfo}
        listBg="bg-rose-50"
        detailBgFrom="from-rose-50"
        detailBgTo="to-orange-50"
        accentHover="hover:text-rose-700"
      />
      <ProductModal
        key={"vegetables-" + modalKey}
        open={activeModal === "vegetables"}
        onClose={closeModal}
        title="Fresh Vegetables"
        image={cabbage}
        imageAlt="Fresh cabbage"
        items={vegetableList}
        infoMap={vegetableInfo}
        listBg="bg-emerald-50"
        detailBgFrom="from-emerald-50"
        detailBgTo="to-lime-50"
        accentHover="hover:text-emerald-700"
      />
    </section>
  );
}

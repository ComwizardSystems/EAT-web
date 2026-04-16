import { useState, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
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
    description:
      "Wide variety of premium quality fruits sourced from the finest farms across India",
    image: Mango,
    clickable: true,
    modalKey: "fruits",
  },
  {
    id: "vegetables",
    title: "Fresh Vegetables",
    description:
      "Farm-fresh vegetables with strict quality control and proper handling",
    image: cabbage,
    clickable: true,
    modalKey: "vegetables",
  },
  {
    id: "textiles",
    title: "Readymade Garments & Textiles",
    description:
      "Trend-driven apparel and high-quality fabrics tailored to global markets",
    image: textile,
    clickable: false,
  },
  {
    id: "footwear",
    title: "Footwear",
    description: "Stylish, durable, and cost-effective footwear solutions",
    image: footwear,
    clickable: false,
  },
  {
    id: "jewelry",
    title: "Imitation Jewellery",
    description:
      "Elegant and contemporary designs crafted to meet international fashion trends",
    image: jewelry,
    clickable: false,
  },
  {
    id: "export",
    title: "Global Export",
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
    <section id="services" className="py-24 md:py-32 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Our Product Portfolio"
          subtitle="We Specialize In Sourcing And Exporting"
        />

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_CARDS.map((card, index) => (
            <AnimatedSection
              key={card.id}
              animation="fade-up"
              delay={index * 80}
            >
              <div
                role={card.clickable ? "button" : undefined}
                tabIndex={card.clickable ? 0 : undefined}
                aria-label={
                  card.clickable ? `View ${card.title} details` : undefined
                }
                onClick={() => handleCardClick(card)}
                onKeyDown={(e) => {
                  if (card.clickable && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    handleCardClick(card);
                  }
                }}
                className={`
                  group relative overflow-hidden rounded-2xl
                  border border-slate-200/80 shadow-sm
                  transition-all duration-300
                  ${
                    card.clickable
                      ? "cursor-pointer hover:shadow-xl hover:shadow-emerald-100/50 hover:-translate-y-2"
                      : "hover:shadow-lg hover:-translate-y-1"
                  }
                `}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* White overlay */}
                <div className="absolute inset-0 bg-white/82 group-hover:bg-white/75 transition-colors duration-300" />

                {/* Top accent line for clickable cards */}
                {card.clickable && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                )}

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {card.description}
                  </p>

                  {card.clickable && (
                    <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-emerald-700 group-hover:gap-2.5 transition-all duration-300">
                      View details
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
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer note */}
        <AnimatedSection animation="fade-up" delay={500}>
          <p className="mt-10 text-center text-lg text-slate-500 italic">
            And more — we continuously expand our portfolio based on market
            demand and client requirements.
          </p>
        </AnimatedSection>
      </div>

      {/* Fruit modal */}
      <ProductModal
        key={`fruits-${modalKey}`}
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

      {/* Vegetable modal */}
      <ProductModal
        key={`vegetables-${modalKey}`}
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

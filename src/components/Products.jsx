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
    subtitle: "Premium Quality",
    description:
      "Wide variety of premium quality fruits sourced from the finest farms across India",
    image: Mango,
    imageAlt: "Fresh mango",
    clickable: true,
    modalKey: "fruits",
    icon: "",
    badge: "Best Seller",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    id: "vegetables",
    title: "Fresh Vegetables",
    subtitle: "Farm Fresh",
    description:
      "Farm-fresh vegetables with strict quality control and proper handling",
    image: cabbage,
    imageAlt: "Fresh cabbage",
    clickable: true,
    modalKey: "vegetables",
    icon: "",
    badge: "Organic",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "textiles",
    title: "Readymade Garments & Textiles",
    subtitle: "Premium Fabrics",
    description:
      "Trend-driven apparel and high-quality fabrics tailored to global markets",
    image: textile,
    imageAlt: "Textile fabrics",
    clickable: false,
    icon: "",
    badge: "New Arrival",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "footwear",
    title: "Footwear",
    subtitle: "Durable & Stylish",
    description: "Stylish, durable, and cost-effective footwear solutions",
    image: footwear,
    imageAlt: "Footwear collection",
    clickable: false,
    icon: "",
    badge: "Popular",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "jewelry",
    title: "Imitation Jewellery",
    subtitle: "Elegant Designs",
    description:
      "Elegant and contemporary designs crafted to meet international fashion trends",
    image: jewelry,
    imageAlt: "Jewelry collection",
    clickable: false,
    icon: "",
    badge: "Trending",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "export",
    title: "Global Export",
    subtitle: "Worldwide Delivery",
    description:
      "Seamless export services with expertise in international trade regulations",
    image: export1,
    imageAlt: "Global export",
    clickable: false,
    icon: "",
    badge: "Trusted",
    gradient: "from-cyan-500 to-blue-600",
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
    <section
      id="services"
      className="relative p-6 bg-linear-to-b from-slate-50/60 to-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <AnimatedSection animation="fade" delay={0} duration={1000}>
        <div
          className="absolute top-40 left-0 w-150 h-150 rounded-full opacity-10"
          style={{
            background:
              "radial-linear(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade" delay={200} duration={1000}>
        <div
          className="absolute bottom-40 right-0 w-125 h-125 rounded-full opacity-10"
          style={{
            background:
              "radial-linear(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Our Product Portfolio"
          subtitle="We Specialize In Sourcing And Exporting"
          description="Discover our wide range of premium quality products"
        />

        {/* Beautiful card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  group relative h-full rounded-3xl overflow-hidden
                  border border-white/60 shadow-xl shadow-slate-200/50
                  transition-all duration-500
                  ${
                    card.clickable
                      ? "cursor-pointer hover:shadow-2xl hover:shadow-emerald-100/50 hover:-translate-y-3"
                      : "hover:shadow-xl hover:-translate-y-2"
                  }
                `}
              >
                {/* Background image with linear overlay */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/60 to-slate-900/40" />
                  <div className="absolute inset-0 bg-linear-to-br from-white/15 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-80">
                  <div>
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {card.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
                      {card.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-base text-slate-200 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom section */}
                  {card.clickable ? (
                    <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                      View details
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

                {/* linear border on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-3xl
                    bg-linear-to-br ${card.linear}
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  `}
                  style={{ zIndex: -1 }}
                />

                {/* Shine effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Beautiful footer note */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-16 text-center">
            <div className="relative inline-block">
              <div
                className="absolute inset-0 bg-linear-to-r from-emerald-500 to-amber-500 opacity-20 blur-2xl"
                aria-hidden="true"
              />
              <p className="relative text-lg md:text-xl text-slate-600 italic font-medium">
                And more — we continuously expand our portfolio based on market
                demand and client requirements.
              </p>
            </div>
          </div>
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

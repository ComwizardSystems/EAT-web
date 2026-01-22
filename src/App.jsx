import { useState, useEffect } from "react";
import LOGO from "./assets/EAT_LOGO.png";
import grapes from "./assets/grapes.jpg";
import Mango from "./assets/kesar.png";
import cabbage from "./assets/cabbage.png";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [selectedVegetable, setSelectedVegetable] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fruitInfo = {
    Mangoes: {
      description:
        "Mango is the King of fruits. India is the largest producer and exporter of Mangoes in the world. India produces some 10 million tonnes of mangoes annually accounting for 52 per cent of the world output. India grows the finest mangoes in the world. Although more than a thousand varieties exist, only around 20 varieties are grown on commercial scale. Most popular Mango varieties are Banganpalli, Neelam, Dusheri, Totapuri, Kesar and delicious Alphonso Mango.",
      origin:
        "Alphonso from Ratnagiri, Kesar from Gujarat, Totapuri from South India",
      season: "April to July (Alphonso), February to April (Kesar)",
      grade: "Export Grade A",
      varieties:
        "Banganpalli, Neelam, Dusheri, Totapuri, Kesar and Alphonso Mango",
      packaging: "Corrugated Boxes of 1 dozen or 2 Dozens",
      shipping: "By Air or Sea",
      shelfLife: "10-14 days at room temperature",
    },
    Bananas: {
      description:
        "Indian Bananas are quite unlike those found anywhere else. They come in many different varieties both large and small. The colour of the skin varies and may be bright green to golden yellow. The fruit is yellowish in colour with a slight greenish tinge and is highly nutritious. The fruits appear in a bunch consisting of a number of halfspirals of fruit, which are clearly separated from each other. The skin is easily peeled off to reveal the edible flesh.",
      origin: "India",
      season: "Year-round availability",
      grade: "Premium Export Quality",
      varieties: "Cavendish, Robusta, Red Banana, Poovan",
      packaging: "Ventilated cartons",
      shipping: "By Air or Sea",
      shelfLife: "5-7 days at room temperature",
    },
    Chikoo: {
      description:
        "Chikoo, also known as Sapodilla, is a tropical fruit with a sweet, malty flavor. The fruit has a grainy texture similar to a pear. It is rich in vitamins and minerals.",
      origin: "India",
      season: "Year-round, peak winter months",
      grade: "Premium Export",
      varieties: "Kalipatti, Cricket Ball",
      packaging: "Corrugated boxes with cushioning",
      shipping: "By Air",
      shelfLife: "7-10 days at room temperature",
    },
    "Custard Apples": {
      description:
        "Custard apples, also known as Sitaphal, have a creamy, sweet flesh with a custard-like consistency. The fruit is rich in antioxidants and Vitamin C.",
      origin: "India",
      season: "August to November",
      grade: "Premium Export",
      varieties: "Washington, Balanagar, Red Sitaphal",
      packaging: "Corrugated boxes with individual padding",
      shipping: "By Air",
      shelfLife: "5-7 days at room temperature",
    },
    Grapes: {
      description:
        "Premium quality grapes from India's finest vineyards. Known for their sweetness, crispness, and excellent shelf life. India is a major exporter of table grapes.",
      origin: "Maharashtra, Karnataka, Andhra Pradesh",
      season: "January to April",
      grade: "Export Premium",
      varieties: "Thompson Seedless, Flame Seedless, Bangalore Blue",
      packaging: "Ventilated cartons with padding",
      shipping: "By Air or Sea",
      shelfLife: "4-6 weeks refrigerated",
    },
    Jujube: {
      description:
        "Jujube, also known as Indian Ber or Bor, is a small sweet fruit with a crisp texture. It is highly nutritious and used in traditional medicine.",
      origin: "India",
      season: "September to December",
      grade: "Premium Export",
      varieties: "Wild and cultivated varieties",
      packaging: "Corrugated boxes",
      shipping: "By Air",
      shelfLife: "7-10 days at room temperature",
    },
    Papayas: {
      description:
        "Tropical delight packed with vitamins, minerals, and enzymes. Great for health-conscious consumers.",
      origin: "Karnataka, Andhra Pradesh, Maharashtra",
      season: "Year-round, peak August-October",
      grade: "Export Premium",
      varieties: "Red Lady, Pusa Dwarf, Solo",
      packaging: "3kg, 5kg net boxes with tissue paper",
      shipping: "By Air",
      shelfLife: "10-14 days refrigerated",
    },
    Pomegranate: {
      description:
        "Premium pomegranates with juicy, ruby-red arils. Known for their sweet-tart flavor and high antioxidant content. India is a leading producer and exporter.",
      origin: "Maharashtra, Karnataka, Gujarat",
      season: "August to February",
      grade: "Export Grade A",
      varieties: "Bhagwa, Kesar, Ganesh, Mridula",
      packaging: "Corrugated boxes with foam padding",
      shipping: "By Air",
      shelfLife: "6-8 weeks refrigerated",
    },
  };

  const vegetableInfo = {
    "French Beans": {
      description:
        "A practical slim podded variety, favoured by gourmet restaurants because they are tasty, tender and needs no slicing and other preparations. Beans can be picked at 9cm (4in) in bunches, but can be left to grow to attain maturity at 15-18cm (6-7in) when it will still be stringless and relatively slender (approx. 5/16 to 3/8in thick) in comparison with most varieties. It is always best to pick pods on the young side when flavour and tenderness are at their best.",
      origin: "India",
      season: "Year-round",
      grade: "Premium Export",
      packaging:
        "Packed in corrugated boxes of 5kgs to 10 Kgs as per requirement",
      varieties: "Slim podded gourmet variety",
      shipping: "By Air",
      shelfLife: "7-10 days refrigerated",
    },
    Okra: {
      description:
        "Indian okra, also called 'Ladyfinger' and 'Bhindi' in Hindi. Indian variety of Okra has become very popular in markets for its high quality. Plants are medium tall, vigorous and prolific. Pods are thin, and very tender. Okra is a rich source of many nutrients, including fiber, vitamin B6 and folic acid.",
      origin: "India",
      season: "Year-round",
      grade: "Premium Export",
      packaging:
        "Packed in corrugated boxes of 5kgs to 10 Kgs as per requirement",
      varieties: "Indian Ladyfinger/Bhindi",
      shipping: "By Air",
      shelfLife: "5-7 days refrigerated",
    },
    Eggplant: {
      description:
        "Small egg plants are only about 30 grams (1 Oz.) in weight with bright red purple color. High quality fruits are very popular for making various stuffed food in India and Southern Asia.",
      origin: "India",
      season: "Year-round",
      grade: "Premium Export",
      packaging:
        "Packed in corrugated boxes of 5 Kg to 10 Kg as per requirement",
      varieties: "Small purple variety",
      shipping: "By Air",
      shelfLife: "7-10 days refrigerated",
    },
    "Bitter Gourd": {
      description:
        "This is a typical variety of Indian Bitter Gourds and is very popular for Indian cuisines. An unique appearance of Indian Bitter Gourds is teeth on the fruit skin. This variety produces long green skin fruits, 8-12 inches in length and about 1/4 Lb. in weight. The plant grows vigorously in warm climates and bears lot of fruits for a long time. Bitter Gourd has excellent medicinal virtues. It is antidotal, antipyretic tonic, appetizing, stomachic, antibilious and laxative. The bitter Gourd is also used in native medicines of Asia and Africa.",
      origin: "India",
      season: "Year-round, peak in warm climates",
      grade: "Premium Export",
      packaging:
        "Packed in corrugated boxes of 5 Kg to 10 Kg as per requirement",
      varieties: "Indian variety with teeth on fruit skin",
      shipping: "By Air",
      shelfLife: "7-10 days refrigerated",
    },
    "Snake Gourd": {
      description:
        "A long and curved fruits that appear like snakes hanging on supports or ground. This subtropical plant grows very fast in warm climates.",
      origin: "India",
      season: "Year-round in warm climates",
      grade: "Premium Export",
      packaging:
        "Packed in corrugated boxes of 5 Kg to 10 Kg as per requirement",
      varieties: "Long curved snake-like variety",
      shipping: "By Air",
      shelfLife: "7-10 days refrigerated",
    },
    Chilli: {
      description:
        "Chilli is a tropical and sub-tropical crop grown all over the country in India. India has advantage of producing about 40 varieties of chillies possessing different range of pungency, colour, size and shape.",
      origin: "India",
      season: "Year-round",
      grade: "Premium Export",
      packaging:
        "Packed in corrugated boxes of 5 Kg to 10 Kg as per requirement",
      varieties: "40 varieties with different pungency, colour, size and shape",
      shipping: "By Air",
      shelfLife: "2-3 weeks refrigerated",
    },
    "Bottle Gourd": {
      description:
        "Various types are available depending upon their appearances i.e bottle shaped, trumpet shaped etc. The fruits are large and come in different shapes with numerous long white seeds.",
      origin: "India",
      season: "Year-round",
      grade: "Premium Export",
      packaging:
        "Packed in corrugated boxes of 5 Kg to 10 Kg as per requirement",
      varieties: "Bottle shaped, trumpet shaped",
      shipping: "By Air",
      shelfLife: "7-10 days refrigerated",
    },
    Cabbage: {
      description:
        "Cabbage is one of the oldest vegetable cultivated in the world, believed to be since 2500 BC by Greeks and Romans. In India, it was introduced by the Moghuls and popularised by the British. Cabbage is mostly grown as a winter crop in the plains in India.",
      origin: "India",
      season: "Winter crop in plains",
      grade: "Premium Export",
      packaging: "In corrugated boxes exported by airfreight or sea freight",
      varieties: "Various cultivated varieties",
      shipping: "By Air or sea freight",
      shelfLife: "4-6 weeks refrigerated",
    },
    Lemongrass: {
      description:
        "This tropical perennial grass is grown as an annual and makes a very handsome ornamental edible. The fibrous leaves have a very strong lemon aroma and are source of lemongrass oil that is used to flavour candy, ice cream and pastries. Made into a tea, it can help with digestive problems.",
      origin: "Southern India, Sri Lanka",
      season: "Year-round",
      grade: "Premium Export",
      packaging: "Export grade packaging",
      varieties: "Southern Indian variety",
      shipping: "By Air",
      shelfLife: "7-10 days refrigerated",
    },
    "Cape Gooseberry": {
      description:
        "A delicious and easy to grow dessert member of tomato family, producing orange berries up to 3cm (1in) across which are a tangy sweet mixture of pineapple and strawberry. Each fruit is enclosed in a papery Chinese lantern-like casing. Delicious on their own, topped with fresh cream, or made into jams, pie fillings etc.",
      origin: "India",
      season: "Year-round, best in sunny sheltered sites or cool greenhouses",
      grade: "Premium Export",
      packaging: "Export grade packaging",
      varieties: "Orange berry variety",
      shipping: "By Air or sea",
      shelfLife: "7-10 days refrigerated",
    },
    Potatoes: {
      description:
        "Potatoes are classified as long, round whites, round reds or sweet. Round whites are usually large, round or oval with light to medium skin. The flesh is white or yellow. Sweet potatoes have sweet-tasting orange flesh with reddish skin.",
      origin: "India",
      season: "Year-round (stored)",
      grade: "Premium Export",
      packaging: "Corrugated boxes",
      varieties: "Long, Round Whites, Round Reds, Sweet Potatoes",
      shipping: "By Air or Sea",
      shelfLife: "4-6 months in proper storage",
    },
    Onions: {
      description:
        "The onion originated in Asia, first written record appeared in Mesopotamia (now part of Iraq) dated 2400 BC. It spread throughout world and was for centuries regarded as a poor person's fare, eaten raw with a chunk of bread. Popular varieties are of cooking onions and are available all year round, thanks to modern storage methods. Fat-free, Saturated fat-free, Sodium-free, Cholesterol-free, Low in calories, A good source of vitamin C.",
      origin: "India",
      season: "Year-round",
      grade: "Premium Export",
      packaging: "Corrugated boxes",
      varieties: "Cooking onions",
      shipping: "By Air or Sea",
      shelfLife: "6-8 months in proper storage",
    },
  };

  return (
    <div className="min-h-screen font-sans bg-white/15">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/15 backdrop-blur-md shadow-lg rounded-lg"
            : "bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-full mx-auto px-8 flex justify-between items-center">
          <div>
            <img src={LOGO} className=" flex w-full h-full" />
          </div>

          {/* Hamburger menu button for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-10">
            {["home", "about", "services", "why-us", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className="text-gray-700 font-medium text-base relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:text-blue-700"
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1).replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile dropdown menu */}
          <div
            className={`md:hidden absolute top-full right-0 bg-white shadow-xl rounded-b-lg z-40 transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col">
              {["home", "about", "services", "why-us", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item);
                        setMobileMenuOpen(false);
                      }}
                      className="block px-8 py-3 text-gray-700 font-medium text-base hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                    >
                      {item.charAt(0).toUpperCase() +
                        item.slice(1).replace("-", " ")}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-7xl flex flex-col justify-center items-center bg-slate-50 py-32 px-4 md:px-8 relative overflow-hidden"
      >
        <div className="absolute top-[-50%] right-[-50%] w-full h-[200%] bg-blue-700/3 rounded-full animate-pulse-slow"></div>
        <div className="text-center max-w-4xl z-10 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 leading-tight tracking-tight">
            Fresh Fruits & Vegetables
            <span className="text-blue-700 block mt-2">
              With Import and Export Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-normal">
            Two decades of experience delivering quality, consistency, and
            reliability to global markets from India
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 text-base font-semibold text-blue-700 rounded-full bg-white border-2 border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 animate-fade-in-up hover:-translate-y-1"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3.5 text-base font-semibold text-blue-700 rounded-full bg-white border-2 border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 animate-fade-in-up hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex gap-8 justify-center flex-wrap z-10 animate-fade-in-up">
          {[
            { number: "20+", label: "Years Experience" },
            { number: "100%", label: "Quality Assured" },
            { number: "Global", label: "Reach" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/90 backdrop-blur p-6 rounded-2xl text-center min-w-64 shadow-md border border-slate-200 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-4xl font-extrabold text-blue-700 mb-2 leading-none">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              About Us
            </h2>
            <p className="text-amber-700 font-semibold text-base tracking-widest uppercase">
              Trusted Excellence Since 2002
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600">
                East Asia Trading is one of the most reputed exporters and
                importers of fresh fruits and vegetables from India, serving
                global markets for more than two decades.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                With our extensive experience and deep industry knowledge, we've
                built lasting relationships with organizations worldwide who
                value quality, consistency, and reliability.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                We are constantly striving towards customer satisfaction through
                in-house R&D, ensuring that we stay at the forefront of the
                industry while maintaining our commitment to excellence.
              </p>
              <div className="space-y-3 mt-8">
                {[
                  "Quality Assurance",
                  "Consistent Supply",
                  "Global Standards",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 font-medium text-base"
                  >
                    <span className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-slate-50 rounded-2xl p-12 flex items-center justify-center aspect-4/3 shadow-2xl shadow-slate-200/50">
                <div className="text-center">
                  <div className="text-7xl mb-4">
                    <img src={grapes} className=" flex w-full   h-full" />
                  </div>
                  <p className="text-blue-700 font-semibold text-xl">
                    Fresh from Farm to You
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Our Products
            </h2>
            <p className="text-amber-700 font-semibold text-base tracking-widest uppercase">
              Premium Quality Exports
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "mango",
                title: "Fresh Fruits",
                desc: "Wide variety of premium quality fruits sourced from the finest farms across India",
                clickable: true,
              },
              {
                icon: "cabbage",
                title: "Fresh Vegetables",
                desc: "Farm-fresh vegetables with strict quality control and proper handling",
                clickable: true,
              },
              {
                icon: "🌍",
                title: "Global Export",
                desc: "Seamless export services with expertise in international trade regulations",
              },
              // {
              //   icon: "📦",
              //   title: "Packaging & Logistics",
              //   desc: "Professional packaging ensuring optimal freshness during transit",
              // },
            ].map((service) => (
              <div
                key={service.title}
                className={`bg-white p-10 rounded-2xl text-center transition-all duration-300 border border-slate-200 ${
                  service.clickable
                    ? "cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50"
                    : ""
                }`}
                onClick={() =>
                  service.clickable && setActiveProduct(service.title)
                }
              >
                <div className="text-5xl mb-6">
                  {service.icon === "mango" ? (
                    <img
                      src={Mango}
                      className="w-20 h-20 mx-auto"
                      alt="Mango"
                    />
                  ) : service.icon === "cabbage" ? (
                    <img
                      src={cabbage}
                      className="w-20 h-20 mx-auto"
                      alt="Cabbage"
                    />
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {service.desc}
                </p>
                {service.clickable && (
                  <p className="text-sm text-blue-700 font-semibold mt-4">
                    Click to view details →
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Overlay Menu - Fresh Fruits */}
      {activeProduct === "Fresh Fruits" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <img src={Mango} className="w-16 h-16" alt="Mango" />
                  <h3 className="text-3xl font-bold text-slate-800">
                    Fresh Fruits
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  {selectedFruit && (
                    <button
                      onClick={() => setSelectedFruit(null)}
                      className="text-sm text-blue-700 hover:text-blue-800 font-medium"
                    >
                      ← Back to list
                    </button>
                  )}
                  <button
                    onClick={() => setActiveProduct(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                {!selectedFruit && (
                  <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                    <ul className="space-y-2 text-gray-700">
                      {[
                        "Mangoes",
                        "Bananas",
                        "Chikoo",
                        "Custard Apples",
                        "Grapes",
                        "Jujube",
                        "Papayas",
                        "Pomegranate",
                      ].map((item) => (
                        <li
                          key={item}
                          onClick={() => setSelectedFruit(item)}
                          className="cursor-pointer hover:text-red-700 hover:font-semibold transition-colors"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedFruit && fruitInfo[selectedFruit] && (
                  <div className="p-6 bg-linear-to-r from-red-50 to-orange-50 rounded-xl border-2 border-blue-200 animate-fade-in">
                    <h4 className="text-2xl font-bold text-slate-800 mb-3">
                      {selectedFruit}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {fruitInfo[selectedFruit].description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Origin:
                        </span>{" "}
                        {fruitInfo[selectedFruit].origin}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Season:
                        </span>{" "}
                        {fruitInfo[selectedFruit].season}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Grade:
                        </span>{" "}
                        {fruitInfo[selectedFruit].grade}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Packaging:
                        </span>{" "}
                        {fruitInfo[selectedFruit].packaging}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg md:col-span-2">
                        <span className="font-semibold text-gray-600">
                          Varieties:
                        </span>{" "}
                        {fruitInfo[selectedFruit].varieties}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg md:col-span-2">
                        <span className="font-semibold text-gray-600">
                          Shipping:
                        </span>{" "}
                        {fruitInfo[selectedFruit].shipping}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg md:col-span-2">
                        <span className="font-semibold text-gray-600">
                          Shelf Life:
                        </span>{" "}
                        {fruitInfo[selectedFruit].shelfLife}
                      </div>
                    </div>
                  </div>
                )}
                {!selectedFruit && (
                  <p className="text-center text-blue-700 font-semibold p-4 bg-blue-50 rounded-xl border border-blue-100">
                    Click on any fruit to view detailed information!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Overlay Menu - Fresh Vegetables */}
      {activeProduct === "Fresh Vegetables" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <img src={cabbage} className="w-16 h-16" alt="Cabbage" />
                  <h3 className="text-3xl font-bold text-slate-800">
                    Fresh Vegetables
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  {selectedVegetable && (
                    <button
                      onClick={() => setSelectedVegetable(null)}
                      className="text-sm text-blue-700 hover:text-blue-800 font-medium"
                    >
                      ← Back to list
                    </button>
                  )}
                  <button
                    onClick={() => setActiveProduct(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                {!selectedVegetable && (
                  <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                    <ul className="space-y-2 text-gray-700">
                      {[
                        "French Beans",
                        "Okra",
                        "Eggplant",
                        "Bitter Gourd",
                        "Snake Gourd",
                        "Chilli",
                        "Bottle Gourd",
                        "Cabbage",
                        "Lemongrass",
                        "Cape Gooseberry",
                        "Potatoes",
                        "Onions",
                      ].map((item) => (
                        <li
                          key={item}
                          onClick={() => setSelectedVegetable(item)}
                          className="cursor-pointer hover:text-green-700 hover:font-semibold transition-colors"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedVegetable && vegetableInfo[selectedVegetable] && (
                  <div className="p-6 bg-linear-to-r from-green-50 to-lime-50 rounded-xl border-2 border-blue-200 animate-fade-in">
                    <h4 className="text-2xl font-bold text-slate-800 mb-3">
                      {selectedVegetable}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {vegetableInfo[selectedVegetable].description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Origin:
                        </span>{" "}
                        {vegetableInfo[selectedVegetable].origin}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Season:
                        </span>{" "}
                        {vegetableInfo[selectedVegetable].season}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Grade:
                        </span>{" "}
                        {vegetableInfo[selectedVegetable].grade}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <span className="font-semibold text-gray-600">
                          Packaging:
                        </span>{" "}
                        {vegetableInfo[selectedVegetable].packaging}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg md:col-span-2">
                        <span className="font-semibold text-gray-600">
                          Varieties:
                        </span>{" "}
                        {vegetableInfo[selectedVegetable].varieties}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg md:col-span-2">
                        <span className="font-semibold text-gray-600">
                          Shipping:
                        </span>{" "}
                        {vegetableInfo[selectedVegetable].shipping}
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg md:col-span-2">
                        <span className="font-semibold text-gray-600">
                          Shelf Life:
                        </span>{" "}
                        {vegetableInfo[selectedVegetable].shelfLife}
                      </div>
                    </div>
                  </div>
                )}
                {!selectedVegetable && (
                  <p className="text-center text-blue-700 font-semibold p-4 bg-blue-50 rounded-xl border border-blue-100">
                    Click on any vegetable to view detailed information!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-amber-700 font-semibold text-base tracking-widest uppercase">
              The East Asia Advantage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Extensive Experience",
                desc: "Over 20 years in the industry with proven track record",
              },
              {
                number: "02",
                title: "Quality Commitment",
                desc: "Strict quality control measures at every stage",
              },
              {
                number: "03",
                title: "Innovation",
                desc: "Continuous R&D to improve packaging and product transport",
              },
              {
                number: "04",
                title: "Compliant",
                desc: "Follow strict standards to ensure top quality",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6">
                <div className="text-5xl font-extrabold text-blue-700/10 leading-none min-w-15">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-amber-700 font-semibold text-base tracking-widest uppercase">
              Let's Build a Connection
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                {
                  icon: "📍",
                  title: "Location",
                  content:
                    "1st Floor, 50 Manish Market, Mata Ramabai Ambedkar Marg (Palton Road), Mumbai 400 001. INDIA",
                },
                {
                  icon: "📧",
                  title: "Email",
                  content: (
                    <>
                      <a
                        href="mailto:eat@eastasiatrading.com"
                        className="text-blue-700 hover:underline"
                      >
                        eat@eastasiatrading.com
                      </a>{" "}
                      and{" "}
                      <a
                        href="mailto:eat@vsnl.com"
                        className="text-blue-700 hover:underline"
                      >
                        eat@vsnl.com
                      </a>
                    </>
                  ),
                },
                {
                  icon: "📞",
                  title: "Phone",
                  content: (
                    <a
                      href="tel:+91-22-22641122"
                      className="text-blue-700 hover:underline"
                    >
                      +91-22-2264 1122
                    </a>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div className="text-4xl bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-base leading-relaxed text-slate-600">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base font-medium focus:outline-none focus:border-blue-700 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base font-medium focus:outline-none focus:border-blue-700 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base font-medium focus:outline-none focus:border-blue-700 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-xl text-base font-medium focus:outline-none focus:border-blue-700 transition-colors resize-vertical min-h-30"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 text-base font-semibold text-white rounded-full bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-1 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">East Asia Trading</h3>
              <p className="text-slate-400 leading-relaxed">
                Your trusted partner for premium fresh fruits and vegetables
                export since 2002.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-500 text-base">
              © 2026 East Asia Trading, Mumbai, India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

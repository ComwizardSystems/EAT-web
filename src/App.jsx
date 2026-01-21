import { useState, useEffect } from "react";
import LOGO from "./assets/EAT_LOGO.png";

function App() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className="min-h-screen font-sans">
      {/* bg-green-700 ">*/}
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg rounded-lg"
            : "bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-full mx-auto px-8 flex justify-between items-center">
          <div>
            {/* <h2 className="text-2xl font-bold text-primary-500 tracking-tight">
              East Asia Trading
            </h2>*/}
            <img src={LOGO} className=" flex w-full   h-full" />
          </div>
          <ul className="hidden md:flex gap-10">
            {["home", "about", "services", "why-us", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className="text-gray-700 font-medium text-base relative after:content-[''] after:absolute after:bottom-1.25 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:text-primary-500 hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1).replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-primary-50 via-white to-accent-50 py-32 px-4 md:px-8 relative overflow-hidden"
      >
        <div className="absolute top-[-50%] right-[-50%] w-full h-[200%] bg-primary-500/3 rounded-full animate-pulse-slow"></div>
        <div className="text-center max-w-4xl z-10 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 leading-tight tracking-tight">
            Fresh Fruits & Vegetables
            <span className="text-primary-500 block mt-2">
              Import and Export Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-normal">
            Two decades of experience delivering quality, consistency, and
            reliability to global markets from India
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 text-base font-semibold text-primary-500 bg-white rounded-full bg-linear-to-r from-primary-500 to-primary-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3.5 text-base font-semibold text-primary-500 bg-white rounded-full bg-linear-to-r from-primary-500 to-primary-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
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
              className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl text-center min-w-37.5 shadow-md border border-primary-500/10 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-4xl font-extrabold text-primary-500 mb-2 leading-none">
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
            <p className="text-accent-500 font-semibold text-base tracking-widest uppercase">
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
                    <span className="w-8 h-8 bg-linear-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-3xl p-12 flex items-center justify-center aspect-4/3 shadow-2xl shadow-primary-500/10">
                <div className="text-center">
                  <div className="text-7xl mb-4">🌱</div>
                  <p className="text-primary-600 font-semibold text-xl">
                    Fresh from Farm to You
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-linear-to-br from-primary-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Our Products
            </h2>
            <p className="text-accent-500 font-semibold text-base tracking-widest uppercase">
              Premium Quality Exports
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🍎",
                title: "Fresh Fruits",
                desc: "Wide variety of premium quality fruits sourced from the finest farms across India",
              },
              {
                icon: "🥬",
                title: "Fresh Vegetables",
                desc: "Farm-fresh vegetables with strict quality control and proper handling",
              },
              {
                icon: "🌍",
                title: "Global Export",
                desc: "Seamless export services with expertise in international trade regulations",
              },
              {
                icon: "📦",
                title: "Packaging & Logistics",
                desc: "Professional packaging ensuring optimal freshness during transit",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-10 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/15 border border-primary-500/10"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-accent-500 font-semibold text-base tracking-widest uppercase">
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
                <div className="text-5xl font-extrabold text-primary-500/10 leading-none min-w-15">
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
      <section
        id="contact"
        className="py-24 bg-linear-to-br from-primary-50 to-accent-50 via-white"
      >
        <div className="max-w-7xl mx-auto px-8 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-accent-500 font-semibold text-base tracking-widest uppercase">
              Let's Build a Partnership
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
                        className="text-primary-500 hover:underline"
                      >
                        eat@eastasiatrading.com
                      </a>{" "}
                      and{" "}
                      <a
                        href="mailto:eat@vsnl.com"
                        className="text-primary-500 hover:underline"
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
                      className="text-primary-500 hover:underline"
                    >
                      +91-22-2264 1122
                    </a>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div className="text-4xl bg-linear-to-br from-primary-500 to-primary-600 text-white w-14 h-14 rounded-full flex items-center justify-center shrink-0">
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
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-500/5">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base font-medium focus:outline-none focus:border-primary-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base font-medium focus:outline-none focus:border-primary-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base font-medium focus:outline-none focus:border-primary-500 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base font-medium focus:outline-none focus:border-primary-500 transition-colors resize-vertical min-h-30"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 text-base font-semibold text-white rounded-full bg-linear-to-r from-primary-500 to-primary-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
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

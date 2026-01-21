import { useState, useEffect } from "react";
import "./App.css";

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
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>East Asia Trading</h2>
          </div>
          <ul className="nav-menu">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("why-us");
                }}
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Fresh Fruits & Vegetables
            <span className="hero-title-accent">
              {" "}
              Import and Export Excellence
            </span>
          </h1>
          <p className="hero-subtitle">
            Two decades of experience delivering quality, consistency, and
            reliability to global markets from India
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-number">20+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Quality Assured</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Global</div>
            <div className="stat-label">Reach</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">Trusted Excellence Since 2002</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                East Asia Trading is one of the most reputed exporters and
                importers of fresh fruits and vegetables from India, serving
                global markets for more than two decades.
              </p>
              <p>
                With our extensive experience and deep industry knowledge, we've
                built lasting relationships with organizations worldwide who
                value quality, consistency, and reliability.
              </p>
              <p>
                We are constantly striving towards customer satisfaction through
                in-house R&D, ensuring that we stay at the forefront of the
                industry while maintaining our commitment to excellence.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Quality Assurance</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Consistent Supply</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Global Standards</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">🌱</div>
                  <p>Fresh from Farm to You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">Premium Quality Exports</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🍎</div>
              <h3>Fresh Fruits</h3>
              <p>
                Wide variety of premium quality fruits sourced from the finest
                farms across India
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🥬</div>
              <h3>Fresh Vegetables</h3>
              <p>
                Farm-fresh vegetables with strict quality control and proper
                handling
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌍</div>
              <h3>Global Export</h3>
              <p>
                Seamless export services with expertise in international trade
                regulations
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📦</div>
              <h3>Packaging & Logistics</h3>
              <p>
                Professional packaging ensuring optimal freshness during transit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">The East Asia Advantage</p>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-number">01</div>
              <div className="why-content">
                <h3>Extensive Experience</h3>
                <p>Over 20 years in the industry with proven track record</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">02</div>
              <div className="why-content">
                <h3>Quality Commitment</h3>
                <p>Strict quality control measures at every stage</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">03</div>
              <div className="why-content">
                <h3>Innovation</h3>
                <p>Continuous R&D to improve packaging and product transport</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">04</div>
              <div className="why-content">
                <h3>Compliant</h3>
                <p>Follow strict standards to ensure top quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's Build a Partnership</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>
                    1st Floor, 50 Manish Market, Mata Ramabai Ambedkar Marg
                    (Palton Road), Mumbai 400 001. INDIA
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:eat@eastasiatrading.com">
                      eat@eastasiatrading.com
                    </a>{" "}
                    and <a href="mailto:eat@vsnl.com">eat@vsnl.com</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+91-22-2264 1122">+91-22-2264 1122</a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-input"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="form-input form-textarea"
                ></textarea>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>East Asia Trading</h3>
              <p>
                Your trusted partner for premium fresh fruits and vegetables
                export since 2002.
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>*/}
          </div>
          <div className="footer-bottom">
            <p>© 2024 East Asia Trading, Mumbai, India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

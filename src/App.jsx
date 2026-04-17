import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Capabilities from "./components/Capabilities";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Capabilities />
        <WhyChooseUs />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

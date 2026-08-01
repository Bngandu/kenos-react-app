import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import BooksCarousel from "./components/BooksCarousel";
import Hofmann from "./components/Hofmann";
import Mission from "./components/Mission";
import EndTimeSign from "./components/EndTimeSign";
import About from "./components/About";
import Timeline from "./components/Timeline";
import KIOFM from "./components/KIOFM";
import MOYGA from "./components/MOYGA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <Welcome />
        <BooksCarousel />
        <Hofmann />
        <Mission />
        <EndTimeSign />
        <About />
        <Timeline />
        <KIOFM />
        <MOYGA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

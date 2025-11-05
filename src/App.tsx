import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Products from "./pages/Products";

export default function App() {
  return (
    <main className="bg-gray-100 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact/>
      <Footer />
    </main>
  );
}

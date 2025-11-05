import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    { label: "Beranda", link: "#home", id: "home" },
    { label: "Tentang Kami", link: "#about", id: "about" },
    { label: "Produk", link: "#products", id: "products" },
    { label: "Kontak", link: "#contact", id: "contact" },
    { label: "Hubungi Kami", link: "#footer", id: "footer" },
  ];

  // Detect scroll active section
  useEffect(() => {
    const sections = menuItems.map(item => document.querySelector(item.link));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(sec => sec && observer.observe(sec));
    return () => sections.forEach(sec => sec && observer.unobserve(sec));
  });

  return (
    <nav className="fixed w-full bg-[#FAF7F2]/70 backdrop-blur-xl shadow-sm z-50 border-b border-[#e7e0d7]">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">

        <h1 className="text-3xl font-serif font-semibold text-[#3B2F2F] tracking-wide">
          Thermiara <span className="text-[#C08261]">Coffee</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[17px] font-medium">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className={`relative tracking-wide group ${
                active === item.id ? "text-[#C08261]" : "text-[#3B2F2F]"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#C08261] transition-all duration-300 ${
                  active === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        <button className="md:hidden text-[#3B2F2F]" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-[#FAF7F2] border-t border-[#e7e0d7] px-6 py-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              onClick={() => setOpen(false)}
              className={`py-2 px-3 rounded-md font-medium tracking-wide transition-all duration-300 
                ${active === item.id 
                  ? "bg-[#C08261] text-white" 
                  : "text-[#3B2F2F] hover:bg-[#C08261] hover:text-white"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

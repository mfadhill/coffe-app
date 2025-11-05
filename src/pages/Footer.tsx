import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaShoppingBag } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#3B2F2F] py-6">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 px-6 mx-auto md:flex-row">

        {/* Brand */}
        <h2 className="text-xl font-serif font-semibold text-[#FAF7F2]">
          Thermiara <span className="text-[#C08261]">Coffee</span>
        </h2>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-[#FAF7F2] text-xl">
          <a href="https://facebook.com" target="_blank" className="hover:text-[#C08261] transition">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-[#C08261] transition">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-[#C08261] transition">
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/6281279120953"
            target="_blank"
            className="hover:text-[#C08261] transition"
          >
            <FaWhatsapp />
          </a>
          <a href="https://shopee.co.id" target="_blank" className="hover:text-[#C08261] transition">
            <FaShoppingBag />
          </a>
        </div>

      </div>

      {/* Garis & Copyright */}
      <div className="border-t border-[#C08261]/30 mt-4 pt-3 text-center text-xs text-[#FAF7F2]/70">
        © {new Date().getFullYear()} Thermiara Coffee
      </div>
    </footer>
  );
}

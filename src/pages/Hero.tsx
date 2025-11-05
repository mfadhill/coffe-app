import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center h-screen px-6 bg-gray-200"
    >
      <div className="grid items-center max-w-6xl gap-10 mx-auto md:grid-cols-2">

        {/* TEXT LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#3B2F2F] leading-tight mb-5">
            Nikmati <span className="text-[#C08261]">Kopi Gayo</span> Terbaik
          </h1>

          <p className="text-lg md:text-xl text-[#5A4A42] max-w-md leading-relaxed mb-8">
           Kami adalah usaha kopi lokal yang berdedikasi untuk menyajikan kopi berkualitas tinggi, langsung dari perkebunan terbaik di dataran tinggi gayo. Dengan proses roasting yang cermat, kami memastikan setiap biji kopi menghasilkan aroma dan rasa yang istimewa.
          </p>

          <a
            href="#products"
            className="inline-block px-8 py-3 bg-[#C08261] text-white rounded-lg text-lg shadow-md hover:bg-[#b07353] hover:shadow-xl transition-all"
          >
            Lihat Produk
          </a>
        </motion.div>

        {/* IMAGE RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/images/3.jpg"
            alt="Coffee Beans"
            className="w-[260px] md:w-[420px] lg:w-[500px] select-none drop-shadow-[0_12px_35px_rgba(0,0,0,0.25)] rounded-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

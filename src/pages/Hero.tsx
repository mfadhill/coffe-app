import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen px-6 bg-gray-200"
    >
      <div className="grid items-center max-w-6xl mx-auto gap-30 md:grid-cols-2">

        

        {/* TEXT BELOW on Mobile */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 text-center md:text-left md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#3B2F2F] leading-tight mb-5">
            Nikmati <span className="text-[#C08261]">Kopi Gayo</span> Terbaik
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#5A4A42] max-w-md mx-auto md:mx-0 leading-relaxed mb-8">
            Kami adalah usaha kopi lokal yang berdedikasi untuk menyajikan kopi berkualitas tinggi, langsung dari perkebunan terbaik di dataran tinggi Gayo.
          </p>

          <a
            href="#products"
            className="inline-block px-10 py-3 bg-[#C08261] text-white rounded-lg text-lg shadow-md hover:bg-[#b07353] hover:shadow-xl transition-all"
          >
            Lihat Produk
          </a>
        </motion.div>
        {/* IMAGE TOP on Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center order-1 md:order-2"
        >
          <img
            src="/images/3.jpg"
            alt="Coffee Beans"
            className="w-[320px] sm:w-[380px] md:w-[430px] lg:w-[500px] select-none drop-shadow-[0_12px_35px_rgba(0,0,0,0.25)] rounded-xl"
          />
        </motion.div> 

      </div>
    </section>
  );
}

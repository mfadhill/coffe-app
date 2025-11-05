import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAF7F2]">
      <div className="grid items-center max-w-6xl px-6 mx-auto gap-14 md:grid-cols-2">

        {/* Image */}
      <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex flex-col items-center gap-6"
>
  <img
    src="/images/1.jpg"
    alt="Kopi Gayo"
    className="object-cover w-full max-w-md shadow-lg rounded-xl"
  />
  
  <img
    src="/images/2.jpg"
    alt="Kebun Kopi Gayo"
    className="object-cover w-full max-w-md shadow-lg rounded-xl"
  />
</motion.div>


        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif font-bold text-[#3B2F2F] mb-6">
            Tentang <span className="text-[#C08261]">Thermiara Coffee</span>
          </h2>

          {/* Sejarah */}
          <p className="mb-6 text-[#5A4A42] leading-relaxed">
            Didirikan pada tahun 2018 oleh <span className="font-semibold">Bapak Agusdi, S.P</span>,
            Thermiara Coffee berawal dari kecintaan mendalam terhadap kopi dan keinginan untuk
            memperkenalkan cita rasa kopi Gayo yang autentik kepada dunia.
          </p>
          <p className="mb-10 text-[#5A4A42] leading-relaxed">
            Sejak saat itu, Thermiara Coffee telah menjadi bagian dari perjalanan kopi para pecinta kopi di Aceh,
            dengan komitmen untuk menyajikan kopi berkualitas tinggi dari petani lokal.
          </p>

          {/* Visi */}
          <h3 className="text-2xl font-serif font-semibold text-[#3B2F2F] mb-3">
            Visi
          </h3>
          <p className="text-[#5A4A42] mb-8 leading-relaxed">
            Menjadi kedai kopi pilihan utama di Aceh yang dikenal karena kualitas kopi terbaik,
            pelayanan yang ramah, dan kontribusi positif bagi komunitas lokal.
          </p>

          {/* Misi */}
          <h3 className="text-2xl font-serif font-semibold text-[#3B2F2F] mb-3">
            Misi
          </h3>
          <ul className="space-y-3 text-[#5A4A42] leading-relaxed">
            <li>• Menyajikan kopi berkualitas tinggi dari perkebunan berkelanjutan di Gayo.</li>
            <li>• Memberikan pengalaman kopi yang tak terlupakan bagi setiap pelanggan.</li>
            <li>• Mendukung petani kopi lokal dan mempromosikan praktik pertanian bertanggung jawab.</li>
            <li>• Menciptakan suasana kedai yang nyaman dan ramah bagi semua kalangan.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

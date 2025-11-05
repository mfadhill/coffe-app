import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      name: "Arabica Gayo (Umum)",
      desc: "Kopi Arabica dari dataran tinggi Gayo, aroma floral dan rasa kompleks dengan sentuhan buah.",
      img: "/images/3.jpg",
    },
    {
      name: "Arabica Gayo Semi Wash",
      desc: "Keasaman sedang dengan rasa yang bersih dan lembut.",
      img: "/images/3.jpg",
    },
    {
      name: "Arabica Gayo Full Wash",
      desc: "Rasa ringan dan segar dengan tingkat acidity yang lebih tinggi.",
      img: "/images/3.jpg",
    },
    {
      name: "Arabica Gayo Natural",
      desc: "Proses natural menghasilkan rasa manis kuat dengan aroma fruity kaya.",
      img: "/images/3.jpg",
    },
    {
      name: "Arabica Gayo Honey",
      desc: "Tekstur lembut dengan manis alami yang seimbang.",
      img: "/images/3.jpg",
    },
    {
      name: "Arabica Gayo Luwak Liar",
      desc: "Kopi langka dengan rasa yang sangat kompleks dan lembut.",
      img: "/images/3.jpg",
    },
    {
      name: "Arabica Gayo Wine",
      desc: "Karakter fermentasi unik seperti wine dengan aroma mendalam.",
      img: "/images/3.jpg",
    },
    {
      name: "Arabica Gayo Pea Berry",
      desc: "Biji tunggal dengan rasa lebih intens dan aroma yang kuat.",
      img: "/images/3.jpg",
    },
  ];

  return (
   <section id="products" className="py-20 bg-gray-200">
  <div className="max-w-6xl px-6 mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-12 text-4xl font-serif font-bold text-[#3B2F2F]"
    >
      Pilihan Kopi Gayo Kami
    </motion.h2>

    {/* Grid List (Vertical) */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {products.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-5 border border-[#e7e0d7] hover:shadow-xl transition cursor-pointer"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-[220px] object-cover rounded-lg mb-4 shadow"
          />

          <h3 className="text-xl font-semibold text-[#3B2F2F] font-serif mb-2">
            {item.name}
          </h3>

          <p className="text-[#5A4A42] text-sm leading-relaxed mb-4">
            {item.desc}
          </p>

          <button className="w-full px-4 py-2 bg-[#C08261] rounded-lg text-white hover:bg-[#b07353] transition shadow-md">
            Pesan Sekarang
          </button>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}

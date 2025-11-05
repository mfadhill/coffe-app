export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl px-6 mx-auto">

        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3B2F2F] mb-4">
            Hubungi <span className="text-[#C08261]">Kami</span>
          </h2>
          <p className="text-[#5A4A42] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Kami siap membantu Anda untuk menemukan kopi terbaik sesuai selera.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-start gap-12 md:grid-cols-2">
          
          {/* Info Kontak */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-[#3B2F2F] mb-6">
              Informasi Kontak
            </h3>
            <p className="text-[#5A4A42] mb-6 leading-relaxed">
              Hubungi kami untuk pemesanan, kerjasama, atau informasi lebih lanjut mengenai kopi Gayo kami.
            </p>

            <div className="space-y-4 text-[#3B2F2F]">
              <p>
                📱 WhatsApp:{" "}
                <a
                  href="https://wa.me/6281279120953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C08261] font-semibold hover:underline"
                >
                  0812 7912 0953
                </a>
              </p>
              <p>📍 Kedai Thermiara Coffee, Gayo, Aceh</p>
            </div>

            <a
              href="https://wa.me/6281279120953"
              target="_blank"
              className="inline-block mt-8 px-6 py-3 bg-[#C08261] text-white rounded-lg text-lg shadow-md hover:bg-[#a96c51] transition"
            >
              Chat via WhatsApp ☕
            </a>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-[#3B2F2F] mb-6">
              Lokasi Kami
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#e7e0d7]">
              <iframe
                title="Thermiara Coffee Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3986.269946054264!2d96.7983085461993!3d4.5992312714863015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1696234567890!5m2!1sid!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import Button from "../component/Button";
import TemanCanggih from "../assets/TemanCanggih.jpeg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="bg-[#0F172A] min-h-screen lg:py-10 px-6 py-8">
        {/* Hero Section */}
        <section className="min-h-screen text-white flex flex-col justify-center gap-8 md:gap-12 items-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-30">
            About Us
          </h1>
          <p>
        <span className="font-semibold text-slate-100">Teman Canggih</span> adalah perusahaan teknologi yang didirikan pada tahun 2026 dengan visi utama menjadi <span className="font-semibold text-slate-100">mitra IT Consultant yang inovatif, solutif, dan terpercaya</span>. Kami hadir untuk mendampingi individu, bisnis, dan perusahaan dalam menavigasi era digital yang bergerak dinamis dan semakin kompleks.
      </p>

      <p>
        Lebih dari sekadar pengembang perangkat lunak, peran kami sebagai <span className="font-semibold text-slate-100">IT Consultant</span> berfokus pada penyelesaian masalah nyata. Kami membantu klien memetakan bagaimana solusi digital dapat meningkatkan efisiensi operasional, menyederhanakan alur kerja, dan membuka peluang baru melalui transformasi digital yang terarah.
      </p>

      <p>
        Setiap inisiatif bermula dari pemahaman mendalam terhadap ekosistem dan permasalahan bisnis klien. Kami siap mendampingi mulai dari tahap analisis proses bisnis, identifikasi kebutuhan, perancangan sistem, hingga implementasi dan pemeliharaan berkelanjutan. Layanan komprehensif kami mencakup:
      </p>

      <ul className="list-disc list-inside space-y-2 pl-4 text-slate-200">
        <li><span className="font-semibold text-slate-100">Digital Transformation & Business Process Digitalization</span></li>
        <li><span className="font-semibold text-slate-100">Custom Software, Website & Application Development</span></li>
        <li><span className="font-semibold text-slate-100">IT Infrastructure & System Integration</span></li>
      </ul>

      <p>
        Kami percaya bahwa setiap bisnis memiliki karakteristik dan tantangannya masing-masing. Oleh karena itu, kami tidak menawarkan solusi <span className="italic">one-size-fits-all</span>. Melalui pendekatan <span className="font-semibold text-slate-100">custom dan problem-oriented</span>, kami memastikan setiap teknologi yang diimplementasikan presisi dan relevan dengan objektif bisnis klien.
      </p>

      <p>
        Setiap eksekusi proyek kami berpegang pada tiga pilar utama: <span className="font-semibold text-slate-100">pemahaman bisnis, ketepatan teknologi, dan nilai tambah yang dihasilkan</span>. Tujuannya adalah memastikan setiap investasi IT Anda tidak sekadar melahirkan sistem yang fungsional, tetapi juga memberikan dampak signifikan terhadap produktivitas, akurasi pengambilan keputusan, dan akselerasi pertumbuhan bisnis.
      </p>

      <p>
        Didorong oleh tim yang adaptif, inovatif, dan terus berkembang, Teman Canggih berkomitmen menjadi partner strategis jangka panjang dalam perjalanan transformasi digital Anda.
      </p>

      <blockquote className="mt-8 p-6 bg-slate-800/50 border-l-4 border-blue-500 rounded-r-xl">
        <p className="text-lg text-center font-medium italic text-slate-200">
          "Bagi kami, teknologi bukan sekadar alat. Teknologi adalah teman yang mendampingi bisnis Anda bekerja lebih cerdas, lebih cepat, dan lebih efektif."
        </p>
      </blockquote>

      <p className="text-xl font-bold text-center text-slate-100 mt-12 pt-8 border-t border-slate-700">
        Teman Canggih — Your Technology Partner.
      </p>
          <a href="/contact">
            <Button
              variant="hero"
              className="bg-[#06B6D4]! text-white!"
            >
              Contact Us
            </Button>
          </a>
        </section>

        <section className="flex items-center justify-center -mt-10 py-15 px-6">
          <div className="relative group max-w-4xl">
            <div className="absolute rounded-4xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-[#1E293B] p-3 md:p-4 rounded-4xl shadow-2xl overflow-hidden border border-slate-700">
              <img
                src={TemanCanggih}
                className="lg:w-full h-auto rounded-3xl object-cover grayscale-20 hover:grayscale-0 transition duration-700"
                alt="Teman Canggih Team Members"
              />

              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                <p className="text-white font-medium text-lg">
                  The Minds Behind Teman Canggih
                </p>
                <p className="text-slate-300 text-sm">
                  Innovating together since 2026.
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#06B6D4]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;

import Button from "../component/Button";
import TemanCanggih from "../assets/TemanCanggih.jpeg";
import { Link } from "react-router-dom";
import ImageLoader from "../component/ImageLoader";
import AbsensiImg from "../assets/projects/Absensi.png";
import MenuPageImg from "../assets/projects/MenuPage.png";
import SystemMonitoringImg from "../assets/projects/SystemMonitoring.png";

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
              <ImageLoader
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

        {/* Portfolio Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Our Portfolio
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Beberapa hasil karya dan proyek yang telah kami kerjakan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dummy 1 */}
            <div className="bg-[#1E293B] rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:border-[#06B6D4]/50 transition-colors duration-300">
              <div className="aspect-video bg-slate-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#06B6D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <ImageLoader
                  src={AbsensiImg}
                  alt="Aplikasi Absensi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">Aplikasi Absensi</h3>
              </div>
            </div>

            {/* Dummy 2 */}
            <div className="bg-[#1E293B] rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:border-[#06B6D4]/50 transition-colors duration-300">
              <div className="aspect-video bg-slate-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#06B6D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <ImageLoader
                  src={MenuPageImg}
                  alt="Menu Page System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">Menu Page System</h3>
              </div>
            </div>

            {/* Dummy 3 */}
            <div className="bg-[#1E293B] rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:border-[#06B6D4]/50 transition-colors duration-300">
              <div className="aspect-video bg-slate-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#06B6D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <ImageLoader
                  src={SystemMonitoringImg}
                  alt="System Monitoring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">System Monitoring</h3>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;

import Button from "../component/Button";
import TemanCanggih from "../assets/TemanCanggih.jpeg";

function About() {
  return (
    <>
      <section className="bg-[#0F172A] min-h-screen lg:py-10 px-6 py-8">
        {/* Hero Section */}
        <section className="min-h-screen text-white flex flex-col justify-center gap-8 md:gap-12 items-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            About Us
          </h1>
          <p className="max-w-4xl text-center text-sm md:text-base leading-relaxed text-slate-300">
            Teman Canggih adalah perusahaan yang didirikan pada tahun 2026
            dengan visi untuk menjadi mitra teknologi yang inovatif, solutif,
            dan terpercaya. Kami hadir untuk membantu individu maupun bisnis
            dalam menghadapi perkembangan teknologi yang semakin cepat dan
            kompleks.
            <br />
            <br />
            Dengan mengedepankan kreativitas dan efisiensi, Teman Canggih
            berfokus pada pengembangan solusi digital yang modern dan relevan
            dengan kebutuhan masa kini. Kami percaya bahwa teknologi bukan hanya
            alat, tetapi juga “teman” yang mampu mempermudah kehidupan dan
            meningkatkan produktivitas.
            <br />
            <br />
            Tim kami terdiri dari individu yang memiliki semangat tinggi dalam
            berinovasi dan terus belajar, sehingga mampu menghadirkan layanan
            dan produk yang berkualitas. Kami berkomitmen untuk memberikan
            solusi yang tidak hanya canggih secara teknologi, tetapi juga mudah
            digunakan dan memberikan nilai nyata bagi pengguna.
          </p>
          <Button
            variant="hero"
            className="bg-[#06B6D4]! text-white!"
          >
            Contact Us
          </Button>
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

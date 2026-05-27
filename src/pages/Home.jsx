import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assets
import HeroImg from '../assets/Hero-Image.png';
import Outlines from '../assets/outlines.png';
import NathanImg from '../assets/Nathan.png';
import SyafiqImg from '../assets/Syafiq.png';
import DaffaImg from '../assets/daffa.png';
import NathanaelImg from '../assets/natanael.png';
import ZeeshanImg from '../assets/zeeshan.png';
import NaufalImg from '../assets/naufal.jpeg';
import DimasImg from '../assets/Dimas.png';
import AfghanImg from '../assets/Afgan.png';
import ChestaImg from '../assets/chesta.png';

// Components
import Button from '../component/Button';
import TeamCard from '../component/TeamCard';
import Accordion from '../component/Accordion';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: 'ease-out-cubic',
            offset: 100,
        });
    }, []);

    const teamData = [
        {
            name: "Syafiq Saputra",
            role: "Founder | CEO",
            desc: "A visionary dedicated to bridging innovation with real-world solutions.",
            image: SyafiqImg,
            socials: { ig: "syafiqyuu", linkedin: "https://www.linkedin.com/in/syafiq-saputra-5412893b2/" }
        },
        {
            name: "Nathan Chandra",
            role: "Co-Founder | COO | PM",
            desc: "Building with precision and executing with discipline.",
            image: NathanImg,
            socials: { ig: "nathnycr", linkedin: "https://www.linkedin.com/in/nathan-chandra-34992334b/" }
        },
        {
            name: "Daffa Taufiq",
            role: "Chief Technology Officer",
            desc: "Orchestrating scalable and efficient technology ecosystems.",
            image: DaffaImg,
            socials: { ig: "dfatq_", linkedin: "https://www.linkedin.com/in/daffa-taufiqurrahman-05a3b9332/" }
        },
        {
            name: "Nathanael",
            role: "Head Product",
            desc: "Aligning user needs with business objectives.",
            image: NathanaelImg,
            socials: { ig: "fransiskus_sinulingga" }
        },
        {
            name: "Muhammad Zeeshan",
            role: "UI/UX Designer",
            desc: "Creating aesthetic and functional visuals.",
            image: ZeeshanImg,
            socials: { ig: "hesshanz" }
        },
        {
            name: "Naufal Daffa",
            role: "Frontend Developer",
            desc: "Bringing designs to life through clean and responsive code.",
            image: NaufalImg,
            socials: { github: "https://github.com/daffa-naufal-musyava", ig: "daffa_naufalm", linkedin: "https://www.linkedin.com/in/naufal-daffa-musyava-b4ba81323/" }
        },
        {
            name: "Dimas Susilo",
            role: "FE | ML Engineer",
            desc: "Developing modular and interactive UI components.",
            image: DimasImg,
            socials: { github: "https://github.com/dimasvso", ig: "dimaslso", linkedin: "https://www.linkedin.com/in/dimas-susilo/" }
        },
        {
            name: "Afghan Alzena",
            role: "Backend Developer",
            desc: "Building secure and robust server architectures.",
            image: AfghanImg,
            socials: { github: "https://github.com/MuhamadAfghan", ig: "_afgnn29", linkedin: "https://www.linkedin.com/in/muhamadafghan/" }
        },
        {
            name: "Chesta Azka",
            role: "Backend Developer",
            desc: "Specialist in database and API optimization.",
            image: ChestaImg,
            socials: { github: "https://github.com/ChestaAzka", ig: "chestadotcom" }
        }
    ];

    const faqData = [
        {
            question: "How do you clone a template from the Showcase?",
            answer: "Go to the Webflow Showcase, find the template you like, and click the 'Clone' button."
        },
        {
            question: "What is Webflow and why is it the best?",
            answer: "Webflow is a visual development platform that allows building responsive sites without code."
        },
        {
            question: "Why is teman canggih the best?",
            answer: "We provide high-quality, scalable templates tailored for modern businesses."
        },
        {
            question: "When was Webflow officially launched?",
            answer: "Webflow was officially launched in 2013."
        }
    ];

    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <section id="home" className="relative w-full min-h-screen flex items-end justify-end overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-cover md:bg-left lg:bg-top bg-no-repeat z-0" style={{ backgroundImage: `url(${HeroImg})` }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative outline-2 outline-white z-10 w-full rounded-tl-[60px] md:rounded-tl-[130px] lg:w-[50%] flex items-end" data-aos="fade-left" data-aos-duration="500">
                    <div className="bg-[#0B1120] w-full p-8 md:p-10 lg:p-17 rounded-tl-[60px] md:rounded-tl-[130px] border-t border-l border-white/10 flex flex-col justify-center text-white shadow-2xl">
                        <h1 className="text-2xl md:ms-10 lg:text-[56px] font-bold leading-tight mb-5">
                            We combine design, thinking and technical
                        </h1>
                        <p className="text-gray-400 md:ms-10 text-sm md:text-base mb-8 max-w-md leading-relaxed font-light">
                            We empower your business with cutting-edge digital solutions, turning complex challenges into seamless growth.
                        </p>
                        <div className="md:ms-10">
                            <Button variant="hero" size="md">Work With Us</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="w-full bg-white py-20 lg:py-32 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left" data-aos="fade-right">
                        <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4 block">about us</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0B1120] leading-tight mb-6">We Help You <br className="hidden md:block" /> Prioritize Your business</h2>
                        <p className="text-gray-500 text-base md:text-lg mb-10 max-w-lg mx-auto lg:mx-0">Transforming problems into opportunities with technology.</p>
                        <a href="/contact">
                            <Button variant="dark" size="lg">Contact Us</Button>
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="zoom-in">
                        <div className="relative w-full max-w-125 mx-auto h-100 rounded-[40px] md:rounded-[80px] overflow-hidden shadow-xl">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Business" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white pb-20 lg:pb-32 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-up">
                        <img src={Outlines} alt="Vision" className="w-55 h-auto object-contain" />
                    </div>
                    <div className="w-full lg:w-1/2" data-aos="fade-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0B1120] mb-6">Vision and mission</h3>
                        <div className="space-y-4 text-gray-600 text-base md:text-lg">
                            <p>Fulfilling industry needs in terms of technology/IT specifically with long-term contraction.</p>
                            <p>Finding the latest innovations that the industry will need with the latest technology.</p>
                        </div>
                        <div className="mt-10 flex items-center gap-4" data-aos="fade-up" data-aos-delay="300">
                            <img src={SyafiqImg} alt="CEO" className="w-12 h-12 rounded-full grayscale" />
                            <div>
                                <h4 className="font-bold text-[#0B1120]">Syafiq</h4>
                                <p className="text-gray-500 text-xs">CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="w-full py-20 bg-gray-50/50 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center md:text-left" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-4">Our team</h2>
                        <p className="text-gray-500 max-w-2xl">Meet the creative minds and technical experts dedicated to your digital vision.</p>
                    </div>

                    {/* Founders (Large) */}
                    <div className="flex justify-center mb-8 lg:px-32">
                        {teamData.slice(0, 1).map((member, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                                <TeamCard {...member} isLarge={true} />
                            </div>
                        ))}
                    </div>

                    {/* Staff (Small) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamData.slice(1).map((member, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <TeamCard {...member} isLarge={false} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section id="faq" className="w-full py-20 px-6 md:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-bold text-center text-[#0B1120] mb-12 md:mb-20 tracking-tighter uppercase">FAQ’S</h2>
                    <div className="space-y-2">
                        {faqData.map((item, index) => (
                            <Accordion key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
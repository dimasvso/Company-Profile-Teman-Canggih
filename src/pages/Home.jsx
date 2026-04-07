import React from 'react';
import HeroImg from '../assets/Hero-Image.png';
import Outlines from '../assets/outlines.png';
import Button from '../component/Button';
import TeamCard from '../component/TeamCard';
import Accordion from '../component/Accordion';
import NathanImg from '../assets/Nathan.png';
import SyafiqImg from '../assets/Syafiq.png';
import DaffaImg from '../assets/daffa.png';
import NathanaelImg from '../assets/natanael.png';
import ChikaImg from '../assets/natanael.png';
import ZeeshanImg from '../assets/zeeshan.png';
import NaufalImg from '../assets/naufal.jpeg';
import DimasImg from '../assets/dimas.png';
import AfghanImg from '../assets/afgan.png';
import ChestaImg from '../assets/chesta.png';

function Home() {
    const teamData = [
        {
            name: "Syafiq Saputra",
            role: "Founder | CEO",
            desc: "A visionary dedicated to bridging innovation with real-world solutions. Focusing on strategic growth and building a solid corporate foundation.",
            image: SyafiqImg,
            socials: { ig: "#", linkedin: "#", twitter: "#", fb: "#" }
        },
        {
            name: "Nathan Chandra",
            role: "Co-Founder | COO",
            desc: "Building with precision and executing with discipline. Every step is directed toward creating a real impact and setting new industry standards.",
            image: NathanImg,
            socials: { ig: "#", linkedin: "#", twitter: "#", fb: "#" }
        },
        {
            name: "Daffa Taufiq",
            role: "Chief Technology Officer",
            desc: "Orchestrating scalable and efficient technology ecosystems. Committed to technical excellence to deliver future-ready digital products.",
            image: DaffaImg,
            socials: { ig: "#", linkedin: "#", twitter: "#", fb: "#" }
        },
        {
            name: "Nathanael",
            role: "Head Product",
            desc: "Aligning user needs with business objectives. Transforming complex ideas into intuitive, seamless, and meaningful product experiences.",
            image: NathanaelImg,
            socials: { ig: "#", linkedin: "#", twitter: "#", fb: "#" }
        },
        {
            name: "Chika Anaya",
            role: "Project Manager",
            desc: "Bridging communication and ensuring every project runs on schedule. Managing resources with high efficiency to achieve maximum results.",
            image: ChikaImg,
            socials: { ig: "#", linkedin: "#", twitter: "#", fb: "#" }
        },
        {
            name: "Muhammad Zeeshan",
            role: "UI/UX Designer",
            desc: "Creating aesthetic and functional visuals. Focusing on design details to ensure smooth and satisfying user interactions.",
            image: ZeeshanImg,
            socials: { ig: "#", linkedin: "#", dribbble: "#", fb: "#" }
        },
        {
            name: "Naufal Daffa",
            role: "Frontend Developer",
            desc: "Bringing designs to life through clean and responsive code. Dedicated to delivering fast and modern interface performances.",
            image: NaufalImg,
            socials: { github: "#", ig: "#", linkedin: "#", fb: "#" }
        },
        {
            name: "Dimas Susilo",
            role: "Frontend Developer",
            desc: "Developing modular and interactive UI components. Constantly exploring the latest technologies for the best web experience.",
            image: DimasImg,
            socials: { github: "#", ig: "#", linkedin: "#", fb: "#" }
        },
        {
            name: "Afghan Alzena",
            role: "Backend Developer",
            desc: "Building secure and robust server architectures. Ensuring data integrity and business logic run seamlessly without interruption.",
            image: AfghanImg,
            socials: { github: "#", ig: "#", linkedin: "#", fb: "#" }
        },
        {
            name: "Chesta Azka",
            role: "Backend Developer",
            desc: "Specialist in database and API optimization. Focusing on system stability to support overall application scalability.",
            image: ChestaImg,
            socials: { github: "#", ig: "#", linkedin: "#", fb: "#" }
        }
    ];
    
    const faqData = [
        { question: "How do you clone a template from the Showcase?", answer: "Go to the Webflow Showcase, find the template you like, and click the 'Clone' button to add it to your dashboard." },
        { question: "What is Webflow and why is it the best website builder?", answer: "Webflow is a powerful visual development platform that allows designers to build fully responsive websites without writing a single line of code." },
        { question: "Why is teman canggih Templates the best Webflow agency?", answer: "We provide high-quality, scalable, and beautifully designed templates tailored for modern businesses." },
        { question: "When was Webflow officially launched?", answer: "Webflow was officially launched in 2013, revolutionizing how people design and develop for the web." }
    ];

    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <section id="home" className="relative w-full min-h-screen flex items-end justify-end overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-cover md:bg-left lg:bg-top bg-no-repeat z-0" style={{ backgroundImage: `url(${HeroImg})` }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative z-10 w-full outline-2 outline-white rounded-tl-[60px] md:rounded-tl-[130px] lg:w-[50%] flex items-end">
                    <div className="bg-[#0B1120] w-full p-8 md:p-10  lg:p-17 rounded-tl-[60px] md:rounded-tl-[130px] border-t border-l border-white/10 flex flex-col justify-center text-white shadow-2xl">
                        <h1 className="text-2xl md:ms-10 md:text-2xl lg:text-[56px] font-bold leading-tight mb-5">
                            We combine
                            design, thinking and technical
                        </h1>
                        <p className="text-gray-400 md:ms-10 text-sm md:text-base mb-8 max-w-md leading-relaxed font-light">
                            We empower your business with cutting-edge digital solutions, turning complex challenges into seamless growth opportunities through expert engineering.
                        </p>
                        <div>
                            <Button variant="hero" className="md:ms-10!" size="md">
                                Work With Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="w-full bg-white py-20 lg:py-32 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
                        <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4 block">about us</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0B1120] leading-tight mb-6">We Help You <br className="hidden md:block" /> Prioritize Your business</h2>
                        <p className="text-gray-500 text-base md:text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">Browse therapists, book a session, and start your healing journey with trusted professionals.</p>
                        <Button variant="dark" size="lg">Contact Us</Button>
                    </div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative w-full max-w-125 mx-auto h-100 rounded-[40px] md:rounded-[80px] overflow-hidden shadow-xl">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Business" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white pb-20 lg:pb-32 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img src={Outlines} alt="Vision" className="w-55 h-auto object-contain" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0B1120] mb-6">Vision and mission</h3>
                        <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                            <p>Fulfilling industry needs in terms of technology/IT specifically with long-term contraction.</p>
                            <p>Finding the latest innovations that the industry will need with the latest technology.</p>
                        </div>
                        <div className="mt-10 flex items-center gap-4">
                            <img src="https://i.pravatar.cc/150?u=syafiq" alt="CEO" className="w-12 h-12 md:w-14 md:h-14 rounded-full grayscale" />
                            <div>
                                <h4 className="font-bold text-[#0B1120] text-sm md:text-base">syafiq</h4>
                                <p className="text-gray-500 text-xs font-medium">CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="w-full py-20 bg-gray-50/50 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-4">Our team</h2>
                        <p className="text-gray-500 max-w-2xl">
                            Meet the creative minds and technical experts dedicated to bringing your digital vision to life with precision and passion.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 lg:px-32">
                        {teamData.slice(0, 2).map((member, index) => (
                            <TeamCard key={index} {...member} isLarge={true} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamData.slice(2, 10).map((member, index) => (
                            <TeamCard key={index} {...member} isLarge={false} />
                        ))}
                    </div>
                </div>
            </section>

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
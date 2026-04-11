import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedinIn, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    const SERVICE_ID = "service_0d4j17f";
    const TEMPLATE_ID = "template_f0munop";
    const PUBLIC_KEY = "6gFfNBmjI7bO5Xfnb";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 3000);
      }, (error) => {
        console.error(error.text);
        alert("Gagal mengirim pesan, silakan coba lagi.");
        setStatus('idle');
      });
  };

  return (
    // Container utama: py-10 di mobile agar tidak mentok atas-bawah layar
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:py-25 sm:py-20 font-sans">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-7xl overflow-hidden min-h-[600px]">

        {/* --- BAGIAN KIRI: INFORMASI KONTAK --- */}
        <div className="bg-black text-white p-8 md:p-12 md:w-[40%] relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact Information</h2>
            <p className="text-gray-400 text-base mb-10 md:mb-16">Say something to start a live chat!</p>

            <div className="space-y-8 md:space-y-12">
              <a href="https://wa.me/6289508437967" target="_blank" rel="noreferrer" className="flex items-center gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <span className="text-sm md:text-base font-medium">+62 895-0843-7967</span>
              </a>

              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                  <FaEnvelope className="text-sm" />
                </div>
                <a
                  href="mailto:temancanggih29@gmail.com"
                  className="text-sm md:text-base font-medium break-all text-zinc-300 hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  temancanggih29@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <span className="text-sm md:text-base leading-relaxed text-zinc-300">
                  Bukit Rancamaya Resident, <br /> Blok A5 No.12
                </span>
              </div>
            </div>
          </div>

          {/* Social Media - Tetap rapi di bawah */}
          <div className="mt-12 md:mt-0 flex gap-5 relative z-10">
            <a href="https://www.instagram.com/temancanggih_id/" target="_blank" rel="noreferrer" className="p-4 bg-zinc-900 hover:bg-zinc-800 hover:text-pink-500 text-white rounded-full transition-all shadow-md">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/teman-canggih-352a16400" target="_blank" rel="noreferrer" className="p-4 bg-zinc-900 hover:bg-zinc-800 hover:text-blue-500 text-white rounded-full transition-all shadow-md">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* --- BAGIAN KANAN: FORM --- */}
        <div className="p-8 md:p-14 md:w-[60%] bg-white">
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

            {/* Input Groups */}
            <div className="group relative border-b-2 border-gray-100 focus-within:border-black transition-all pb-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">First Name</label>
              <input type="text" name="first_name" className="w-full py-2 outline-none text-sm md:text-base bg-transparent text-black font-medium" placeholder="John" required />
            </div>

            <div className="group relative border-b-2 border-gray-100 focus-within:border-black transition-all pb-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
              <input type="text" name="last_name" className="w-full py-2 outline-none text-sm md:text-base bg-transparent text-black font-medium" placeholder="Doe" required />
            </div>

            <div className="group relative border-b-2 border-gray-100 focus-within:border-black transition-all pb-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</label>
              <input type="email" name="user_email" className="w-full py-2 outline-none text-sm md:text-base bg-transparent text-black font-medium" placeholder="demo@gmail.com" required />
            </div>

            <div className="group relative border-b-2 border-gray-100 focus-within:border-black transition-all pb-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
              <input type="text" name="user_phone" className="w-full py-2 outline-none text-sm md:text-base bg-transparent text-black font-medium" placeholder="+62..." />
            </div>

            {/* Subject Selection */}
            <div className="md:col-span-2">
              <p className="font-bold text-sm md:text-base mb-6 text-black">Select Subject?</p>
              <div className="flex flex-wrap gap-4 md:gap-8">
                {['General', 'Support', 'Billing', 'Other'].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer text-sm font-medium">
                    <input type="radio" name="subject" value={item} className="w-4 h-4 accent-black" defaultChecked={idx === 0} />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div className="md:col-span-2 group relative border-b-2 border-gray-100 focus-within:border-black transition-all pb-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message</label>
              <textarea name="message" className="w-full py-2 outline-none text-sm md:text-base bg-transparent resize-none min-h-[40px] text-black font-medium" placeholder="Write your message here..." rows="1" required />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center md:justify-end mt-4">
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full md:w-auto px-10 py-4 rounded-xl shadow-lg transition-all duration-300 text-sm font-bold tracking-wide flex items-center justify-center gap-3 min-w-[200px]
                  ${status === 'idle' ? 'bg-black hover:bg-zinc-800 text-white translate-y-0' : ''}
                  ${status === 'loading' ? 'bg-zinc-200 text-zinc-500 cursor-not-allowed' : ''}
                  ${status === 'success' ? 'bg-green-600 text-white scale-105' : ''}
                `}
              >
                {status === 'idle' && "Send Message"}
                {status === 'loading' && (
                  <>
                    <div className="w-4 h-4 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <FaCheckCircle className="text-lg" />
                    Message Sent!
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  return (
    
        <div className="min-h-screen bg-black flex items-center justify-center p-4 font-sans">
          <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden p-2">
            
            {/* Bagian Kiri: Informasi Kontak */}
            <div className="bg-black text-white p-10 md:w-[40%] rounded-lg relative overflow-hidden flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Contact Information</h2>
                <p className="text-gray-400 text-sm mb-12">Say something to start a live chat!</p>
                
                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <FaPhoneAlt className="text-lg" />
                    <span className="text-sm">+1012 3456 789</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaEnvelope className="text-lg" />
                    <span className="text-sm">demo@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaMapMarkerAlt className="text-xl" />
                    <span className="text-sm leading-relaxed">
                      132 Dartmouth Street Boston, <br />
                      Massachusetts 02156 United States
                    </span>
                  </div>
                </div>
              </div>
        
              {/* Social Media & Dekorasi Lingkaran */}
              <div className="mt-16 flex gap-4 relative z-10">
                <div className="p-3 bg-zinc-800 rounded-full hover:bg-[#1DA1F2] transition-all cursor-pointer">
                  <FaTwitter size={16} />
                </div>
                <div className="p-3 bg-white text-black rounded-full cursor-pointer">
                  <FaInstagram size={16} />
                </div>
                <div className="p-3 bg-zinc-800 rounded-full hover:bg-[#5865F2] transition-all cursor-pointer">
                  <FaDiscord size={16} />
                </div>
              </div>
        
              {/* Elemen Dekoratif Lingkaran di Pojok */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-zinc-800 rounded-full opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-28 h-28 bg-zinc-700 rounded-full opacity-30"></div>
            </div>
        
            {/* Bagian Kanan: Form */}
            <div className="p-10 md:w-[60%] bg-white">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                
                {/* First Name */}
                <div className="group relative border-b border-gray-300 focus-within:border-black transition-all">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    className="w-full py-1 outline-none text-sm bg-transparent" 
                    placeholder=" "
                  />
                </div>
        
                {/* Last Name */}
                <div className="group relative border-b border-gray-300 focus-within:border-black transition-all">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full py-1 outline-none text-sm bg-transparent" 
                    defaultValue="Doe" 
                  />
                </div>
        
                {/* Email */}
                <div className="group relative border-b border-gray-300 focus-within:border-black transition-all">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    className="w-full py-1 outline-none text-sm bg-transparent" 
                  />
                </div>
        
                {/* Phone Number */}
                <div className="group relative border-b border-gray-300 focus-within:border-black transition-all">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="text" 
                    className="w-full py-1 outline-none text-sm bg-transparent" 
                    defaultValue="+1 012 3456 789" 
                  />
                </div>
        
                {/* Subject Selection */}
                <div className="md:col-span-2 mt-2">
                  <p className="font-bold text-sm mb-4">Select Subject?</p>
                  <div className="flex flex-wrap gap-5">
                    {['General Inquiry', 'General Inquiry', 'General Inquiry', 'General Inquiry'].map((item, idx) => (
                      <label key={idx} className="flex items-center gap-2 cursor-pointer text-[13px]">
                        <input 
                          type="radio" 
                          name="subject" 
                          className="w-4 h-4 accent-black" 
                          defaultChecked={idx === 0} 
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
        
                {/* Message */}
                <div className="md:col-span-2 group relative border-b border-gray-300 focus-within:border-black transition-all">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Message</label>
                  <input 
                    type="text" 
                    className="w-full py-1 outline-none text-sm bg-transparent" 
                    placeholder="Write your message.." 
                  />
                </div>
        
                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-end mt-4">
                  <button 
                    type="submit"
                    className="bg-black cursor-pointer text-white px-12 py-4 rounded shadow-lg hover:bg-zinc-800 transition-all text-sm font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  );
};

export default Contact;
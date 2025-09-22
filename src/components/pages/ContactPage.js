// src/components/pages/ContactPage.js
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-[#464646] mb-8">Get In Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          Ready to bring your architectural vision to life? Let's discuss your project.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#464646] mb-6">Request a Quote</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#f06123] focus:outline-none"
                  aria-label="Full Name"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#f06123] focus:outline-none"
                  aria-label="Email Address"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#f06123] focus:outline-none"
                aria-label="Phone Number"
              />
              <select 
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#f06123] focus:outline-none"
                aria-label="Select Project Type"
              >
                <option>Select Project Type</option>
                <option>Architectural Model</option>
                <option>Industrial Model</option>
                <option>Masterplan Model</option>
                <option>3D Printing</option>
                <option>Business Gifts</option>
              </select>
              <textarea
                placeholder="Describe your project requirements..."
                rows="5"
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#f06123] focus:outline-none"
                aria-label="Project requirements"
              ></textarea>
              <button
                type="submit"
                className="bg-[#f06123] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d4551e] transition-all w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-[#464646] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f06123] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#464646]">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f06123] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#464646]">Email</div>
                    <div className="text-gray-600">info@aiconmacmodels.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f06123] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#464646]">Office</div>
                    <div className="text-gray-600">123 Design District<br />Creative City, CC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl h-64 flex items-center justify-center">
              <span className="text-gray-400">Map Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
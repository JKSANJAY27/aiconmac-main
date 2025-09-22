// src/components/pages/CareersPage.js
import React from 'react';
import { Upload } from 'lucide-react';

const CareersPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-[#464646] mb-8">Join Our Team</h1>
        <p className="text-xl text-gray-600 mb-12">
          Be part of a creative team that transforms architectural visions into stunning miniature reality.
        </p>

        <div className="bg-white rounded-3xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-[#464646] mb-6">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Creative Environment', desc: 'Work on diverse, challenging projects with cutting-edge technology.' },
              { title: 'Professional Growth', desc: 'Continuous learning opportunities and skill development programs.' },
              { title: 'Collaborative Culture', desc: 'Join a team that values innovation, quality, and artistic excellence.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-[#f06123] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#464646] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Application Form */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#464646] mb-6">Apply Now</h2>
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
            <label className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-[#f06123] transition-colors block">
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Upload your resume</p>
              <p className="text-sm text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
            </label>
            <textarea
              placeholder="Tell us why you want to join our team..."
              rows="4"
              className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#f06123] focus:outline-none"
              aria-label="Cover letter / motivation"
            ></textarea>
            <button
              type="submit"
              className="bg-[#f06123] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d4551e] transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
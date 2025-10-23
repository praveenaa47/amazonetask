import React, { useState } from 'react';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

export default function AmazonFooter() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const footerSections = [
    {
      title: "Get to Know Us",
      links: [
        "About Us",
        "Careers",
        "Press Releases",
        "Amazon Science"
      ]
    },
    {
      title: "Connect with Us",
      links: [
        "Facebook",
        "Twitter",
        "Instagram"
      ]
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell on Amazon",
        "Sell under Amazon Accelerator",
        "Protect and Build Your Brand",
        "Amazon Global Selling",
        "Supply to Amazon",
        "Become an Affiliate",
        "Fulfilment by Amazon",
        "Advertise Your Products",
        "Amazon Pay on Merchants"
      ]
    },
    {
      title: "Let Us Help You",
      links: [
        "Your Account",
        "Returns Centre",
        "Recalls and Product Safety Alerts",
        "100% Purchase Protection",
        "Amazon App Download",
        "Help"
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-700 text-white">
      {/* Back to Top Button */}
      <div 
        onClick={scrollToTop}
        className="bg-slate-600 hover:bg-slate-500 text-center py-4 cursor-pointer transition-colors"
      >
        <span className="text-sm">Back to Top</span>
      </div>

      {/* Main Footer Content */}
      <div className="bg-slate-700 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-base mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-sm text-gray-300 hover:text-white hover:underline transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-slate-800 py-8 px-4 border-t border-slate-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-white px-4 py-2 rounded">
                <span className="text-black font-bold text-2xl">amazon</span>
              </div>
            </div>

            {/* Language and Country Selector */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 border border-slate-500 rounded transition-colors"
                >
                  <FiGlobe className="text-lg" />
                  <span className="text-sm">English</span>
                  <FiChevronDown className="text-sm" />
                </button>
                
                {languageOpen && (
                  <div className="absolute bottom-full mb-2 left-0 bg-white text-gray-800 rounded shadow-lg py-2 w-40">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                      English
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                      हिन्दी
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                      தமிழ்
                    </button>
                  </div>
                )}
              </div>

              {/* Country Selector */}
              <div className="relative">
                <button
                  onClick={() => setCountryOpen(!countryOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 border border-slate-500 rounded transition-colors"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
                    alt="India" 
                    className="w-6 h-4"
                  />
                  <span className="text-sm">India</span>
                  <FiChevronDown className="text-sm" />
                </button>

                {countryOpen && (
                  <div className="absolute bottom-full mb-2 left-0 bg-white text-gray-800 rounded shadow-lg py-2 w-48">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm flex items-center gap-2">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
                        alt="India" 
                        className="w-6 h-4"
                      />
                      India
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm flex items-center gap-2">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
                        alt="USA" 
                        className="w-6 h-4"
                      />
                      United States
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm flex items-center gap-2">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" 
                        alt="UK" 
                        className="w-6 h-4"
                      />
                      United Kingdom
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-slate-900 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-gray-400">
            © 1996-2025, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
}
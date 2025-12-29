import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Address */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="material-icons text-corporate-primary text-2xl">account_balance</span>
              <span className="font-display text-xl font-bold text-corporate-primary dark:text-white">
                NANGIA <span className="text-corporate-secondary">&</span> CO
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              <p className="mb-4">
                <strong className="text-gray-900 dark:text-white">Corporate Office</strong><br />
                A-109, Sector 136,<br />
                Noida - 201304, Uttar Pradesh, India
              </p>
              <p>+91 120 2598000</p>
              <p>query@nangia.com</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-corporate-primary dark:hover:text-white transition-colors"><i className="material-icons text-lg">facebook</i></a>
              <a href="#" className="text-gray-400 hover:text-corporate-primary dark:hover:text-white transition-colors"><i className="material-icons text-lg">photo_camera</i></a>
              <a href="#" className="text-gray-400 hover:text-corporate-primary dark:hover:text-white transition-colors"><i className="material-icons text-lg">work</i></a>
              <a href="#" className="text-gray-400 hover:text-corporate-primary dark:hover:text-white transition-colors"><i className="material-icons text-lg">ondemand_video</i></a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h5 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Important Links</h5>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Code of Ethics</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Brochures</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Alumni</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Media Contact</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h5 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Expertise</h5>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Taxation</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Audit & Assurance</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Regulatory</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">M&A</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Risk Advisory</a></li>
              <li><a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 className="font-bold text-gray-900 dark:text-white mb-4">Subscribe to our newsletter</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">Get the latest industry insights directly to your inbox.</p>
            <form className="space-y-3">
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-primary dark:text-white" />
              <button type="submit" className="w-full bg-corporate-primary text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded hover:bg-corporate-primary/90 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 dark:text-gray-400">
          <p>© 2025 Nangia & Co LLP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-corporate-primary dark:hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

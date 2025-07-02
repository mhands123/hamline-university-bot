
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <div className="text-2xl font-bold mb-4 text-yellow-400">
              HAMLINE
              <div className="text-sm text-gray-300 font-normal">UNIVERSITY</div>
            </div>
            <p className="text-gray-300 mb-4">
              A private liberal arts university in Saint Paul, Minnesota, dedicated to academic excellence and personal growth.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Academics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Student Life</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Athletics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Campus Safety</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Current Students</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Faculty & Staff</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Alumni</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Parents & Family</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Directory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Employment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  1536 Hewitt Avenue<br />
                  Saint Paul, MN 55104
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-300">(651) 523-2800</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <a href="mailto:admission@hamline.edu" className="text-gray-300 hover:text-white transition-colors">
                  admission@hamline.edu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Hamline University. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

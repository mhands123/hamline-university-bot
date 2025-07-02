
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">Current Students</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Faculty & Staff</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Alumni</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">Directory</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Library</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Emergency</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-red-800">
              HAMLINE
              <div className="text-sm text-gray-600 font-normal">UNIVERSITY</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-red-800 font-medium transition-colors">
                Academics <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-red-800 font-medium transition-colors">
                Admissions <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-red-800 font-medium transition-colors">
                Student Life <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-red-800 font-medium transition-colors">
                Athletics <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-red-800 font-medium transition-colors">
                About <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-red-800 font-medium transition-colors">
              Give
            </a>
          </nav>

          {/* Apply Button */}
          <div className="hidden lg:block">
            <button className="bg-red-800 text-white px-6 py-2 rounded-md font-medium hover:bg-red-900 transition-colors">
              Apply
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="space-y-4">
              <a href="#" className="block text-gray-700 hover:text-red-800 font-medium">Academics</a>
              <a href="#" className="block text-gray-700 hover:text-red-800 font-medium">Admissions</a>
              <a href="#" className="block text-gray-700 hover:text-red-800 font-medium">Student Life</a>
              <a href="#" className="block text-gray-700 hover:text-red-800 font-medium">Athletics</a>
              <a href="#" className="block text-gray-700 hover:text-red-800 font-medium">About</a>
              <a href="#" className="block text-gray-700 hover:text-red-800 font-medium">Give</a>
              <button className="bg-red-800 text-white px-6 py-2 rounded-md font-medium hover:bg-red-900 transition-colors">
                Apply
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

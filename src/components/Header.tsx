import React, { useState, useEffect } from 'react';
import { Menu, X, Pill } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['ACCUEIL', 'A PROPOS', 'SERVICES', 'PRODUITS', 'PARTENAIRES', 'CONTACT'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-3 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 xl:px-20">
        <div className="flex justify-between items-center">
          {/* Logo avec animation */}
          <a 
            href="/" 
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <Pill 
                size={34} 
                className="text-emerald-600 relative z-10" 
                strokeWidth={1.5} 
              />
            </div>
            <span className={`ml-3 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent ${
              scrolled ? '' : 'drop-shadow-md'
            }`}>
              BIOTECH
            </span>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10 items-center">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className={`relative font-medium px-2 py-1.5 transition-all ${
                      scrolled 
                        ? 'text-gray-800 dark:text-gray-200' 
                        : 'text-white'
                    } hover:text-emerald-600 dark:hover:text-emerald-400 group`}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
              
              {/* Dark Mode Toggle */}
              <li>
                <DarkModeToggle size="md" className="mx-2" />
              </li>
              
              <li>
                <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-400 hover:from-emerald-700 hover:to-green-500 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Menu Mobile */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Dark Mode Toggle Mobile */}
            <DarkModeToggle size="sm" />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${
                scrolled 
                  ? 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-4 space-y-3 border-t border-gray-100 dark:border-gray-700 rounded-b-lg">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl transition-all mx-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            
            {/* Contact Button Mobile */}
            <button className="w-full mx-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-400 hover:from-emerald-700 hover:to-green-500 text-white rounded-lg hover:shadow-lg transition-all">
              Contact
            </button>
            
            {/* Dark Mode Switch Mobile */}
            <div className="flex items-center justify-between px-6 py-3 mx-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Mode sombre</span>
              <DarkModeToggle variant="switch" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
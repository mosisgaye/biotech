import React from 'react';
import { Pill, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 dark:bg-gray-950 text-white transition-colors">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Pill size={24} className="text-green-400 dark:text-emerald-400 mr-2 transition-colors" />
              <span className="font-bold text-xl">BIOTECH</span>
            </div>
            <p className="text-emerald-100 dark:text-gray-300 mb-6 transition-colors">
              Votre partenaire de confiance pour tous vos besoins en équipements médicaux et solutions biotechnologiques. Innovation et expertise au service de la santé.
            </p>
            <div className="flex space-x-4">
              {/* Social media links */}
              <a href="#" className="bg-white/10 dark:bg-gray-800/50 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
              <a href="#" className="bg-white/10 dark:bg-gray-800/50 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
              <a href="#" className="bg-white/10 dark:bg-gray-800/50 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
              <a href="#" className="bg-white/10 dark:bg-gray-800/50 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'À propos', href: '#a-propos' },
                { label: 'Services', href: '#services' },
                { label: 'Produits', href: '#produits' },
                { label: 'Partenaires', href: '#partenaires' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="flex items-center text-emerald-100 dark:text-gray-300 hover:text-white dark:hover:text-emerald-400 transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos services</h3>
            <ul className="space-y-2">
              {[
                'Équipements médicaux', 
                'Instrumentation de laboratoire',
                'Maintenance technique',
                'Formation spécialisée',
                'Support 24h/24',
                'Installation sur site'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center text-emerald-100 dark:text-gray-300 hover:text-white dark:hover:text-emerald-400 transition-colors">
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-emerald-100 dark:text-gray-300 mb-4 transition-colors">
              Abonnez-vous à notre newsletter pour recevoir nos dernières innovations et actualités biotech.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="info@biotechnology-equipments.com"
                  className="bg-emerald-800 dark:bg-gray-800 text-white placeholder-emerald-300 dark:placeholder-gray-400 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-emerald-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-green-500 dark:bg-emerald-600 hover:bg-green-600 dark:hover:bg-emerald-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800 dark:border-gray-800 transition-colors">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-200 dark:text-gray-400 text-sm transition-colors">
              &copy; {new Date().getFullYear()} BIOTECH. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-emerald-200 dark:text-gray-400 hover:text-white dark:hover:text-emerald-400 text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-emerald-200 dark:text-gray-400 hover:text-white dark:hover:text-emerald-400 text-sm transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-emerald-200 dark:text-gray-400 hover:text-white dark:hover:text-emerald-400 text-sm transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
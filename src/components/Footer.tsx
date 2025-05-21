import React from 'react';
import { Pill, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Pill size={24} className="text-green-400 mr-2" />
              <span className="font-bold text-xl">PHARMACIE</span>
            </div>
            <p className="text-emerald-100 mb-6">
              Votre pharmacie de confiance pour tous vos besoins en médicaments, conseils pharmaceutiques et produits de santé. Expertise et qualité au service de votre bien-être.
            </p>
            <div className="flex space-x-4">
              {/* Social media links */}
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm2.5 7.5h-1.5c-.25 0-.5.25-.5.5v1.5h2l-.5 2h-1.5V18h-2v-6.5H9.5v-2h1.5V9c0-1.375 1.125-2.5 2.5-2.5h2v3h-1.5z"></path></svg>
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.5 11h-11c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h11c.28 0 .5.22.5.5s-.22.5-.5.5z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Services', 'Produits', 'Partenaires', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-')}`} 
                    className="flex items-center text-emerald-100 hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
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
                'Médicaments sur ordonnance', 
                'Parapharmacie',
                'Conseils pharmaceutiques',
                'Vaccination',
                'Tests rapides',
                'Livraison à domicile'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center text-emerald-100 hover:text-white transition-colors">
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
            <p className="text-emerald-100 mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos promotions et conseils santé.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-emerald-800 text-white placeholder-emerald-300 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-green-400"
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-200 text-sm">
              &copy; {new Date().getFullYear()} PHARMACIE. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-emerald-200 hover:text-white text-sm">Politique de confidentialité</a>
              <a href="#" className="text-emerald-200 hover:text-white text-sm">Conditions d'utilisation</a>
              <a href="#" className="text-emerald-200 hover:text-white text-sm">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
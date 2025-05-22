import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  details: string;
  detailsSecondary?: string;
}> = ({ icon, title, details, detailsSecondary }) => {
  return (
    <div className="flex items-start group">
      <div className="mt-1 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/30 p-3 text-emerald-600 dark:text-emerald-400 mr-4 transition-all group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:bg-emerald-600">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-emerald-800 dark:text-emerald-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-emerald-700/90 dark:text-emerald-300/90 transition-colors">{details}</p>
        {detailsSecondary && <p className="text-emerald-700/90 dark:text-emerald-300/90 transition-colors">{detailsSecondary}</p>}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-emerald-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-300 mb-4 transition-colors">
            NOUS CONTACTER
            <span className="block w-24 h-1.5 bg-emerald-500 mx-auto mt-4 rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-3 bg-gradient-to-br from-white to-emerald-50/50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl shadow-xl dark:shadow-emerald-500/10 p-8 border border-emerald-100 dark:border-gray-700 transition-colors">
            <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-6 transition-colors">Coordonnées</h3>
            
            <div className="space-y-6">
              <ContactInfo 
                icon={<MapPin size={22} strokeWidth={1.75} />}
                title="Adresse"
                details="123 Avenue de la Médecine"
                detailsSecondary="Dakar, Sénégal"
              />
              
              <ContactInfo 
                icon={<Phone size={22} strokeWidth={1.75} />}
                title="Téléphone"
                details="+221 XX XXX XX XX"
              />
              
              <ContactInfo 
                icon={<Mail size={22} strokeWidth={1.75} />}
                title="Email"
                details="contact@biotech.sn"
              />
              
              <ContactInfo 
                icon={<Clock size={22} strokeWidth={1.75} />}
                title="Horaires"
                details="Lun - Ven: 8h30 - 18h00"
                detailsSecondary="Sam: 9h00 - 13h00"
              />
            </div>
            
            <div className="mt-8 pt-6 border-t border-emerald-100 dark:border-gray-600 transition-colors">
              <h4 className="font-medium text-emerald-800 dark:text-emerald-300 mb-4 transition-colors">Suivez-nous</h4>
              <div className="flex space-x-3">
                <a href="#" className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-gradient-to-tr from-emerald-600 to-emerald-500 dark:hover:from-emerald-500 dark:hover:to-emerald-600 rounded-xl text-emerald-700 dark:text-emerald-400 hover:text-white transition-all hover:shadow-lg">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-gradient-to-tr from-emerald-600 to-emerald-500 dark:hover:from-emerald-500 dark:hover:to-emerald-600 rounded-xl text-emerald-700 dark:text-emerald-400 hover:text-white transition-all hover:shadow-lg">
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-gradient-to-tr from-emerald-600 to-emerald-500 dark:hover:from-emerald-500 dark:hover:to-emerald-600 rounded-xl text-emerald-700 dark:text-emerald-400 hover:text-white transition-all hover:shadow-lg">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-gradient-to-tr from-emerald-600 to-emerald-500 dark:hover:from-emerald-500 dark:hover:to-emerald-600 rounded-xl text-emerald-700 dark:text-emerald-400 hover:text-white transition-all hover:shadow-lg">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-emerald-500/10 p-8 border border-emerald-100 dark:border-gray-700 transition-colors">
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-8 transition-colors">Message direct</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-800 dark:text-emerald-300 mb-2 transition-colors">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-emerald-100 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:border-emerald-300 dark:focus:border-emerald-500 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-800 dark:text-emerald-300 mb-2 transition-colors">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-emerald-100 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:border-emerald-300 dark:focus:border-emerald-500 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    placeholder="info@biotechnology-equipments.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-emerald-800 dark:text-emerald-300 mb-2 transition-colors">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-emerald-100 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:border-emerald-300 dark:focus:border-emerald-500 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  placeholder="Objet de votre message"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-emerald-800 dark:text-emerald-300 mb-2 transition-colors">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-emerald-100 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:border-emerald-300 dark:focus:border-emerald-500 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-vertical"
                  placeholder="Écrivez votre message ici..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 dark:from-emerald-500 dark:to-green-500 dark:hover:from-emerald-600 dark:hover:to-green-600 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Envoyer le message
                <ArrowRight size={18} className="ml-2 inline-block" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
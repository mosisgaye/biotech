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
      <div className="mt-1 rounded-xl bg-emerald-100/50 p-3 text-emerald-600 mr-4 transition-all group-hover:bg-cyan-500 group-hover:text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-emerald-800 group-hover:text-cyan-600 transition-colors">{title}</h3>
        <p className="text-emerald-700/90">{details}</p>
        {detailsSecondary && <p className="text-emerald-700/90">{detailsSecondary}</p>}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            NOUS CONTACTER
            <span className="block w-24 h-1.5 bg-cyan-500 mx-auto mt-4 rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-3 bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl shadow-xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-emerald-800 mb-6">Coordonnées</h3>
            
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
                details="contact@pharmacare.sn"
              />
              
              <ContactInfo 
                icon={<Clock size={22} strokeWidth={1.75} />}
                title="Horaires"
                details="Lun - Ven: 8h30 - 18h00"
                detailsSecondary="Sam: 9h00 - 13h00"
              />
            </div>
            
            <div className="mt-8 pt-6 border-t border-emerald-100">
              <h4 className="font-medium text-emerald-800 mb-4">Suivez-nous</h4>
              <div className="flex space-x-3">
                <a href="#" className="p-2.5 bg-emerald-100 hover:bg-gradient-to-tr from-emerald-600 to-cyan-500 rounded-xl text-emerald-700 hover:text-white transition-all hover:shadow-lg">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="p-2.5 bg-emerald-100 hover:bg-gradient-to-tr from-emerald-600 to-cyan-500 rounded-xl text-emerald-700 hover:text-white transition-all hover:shadow-lg">
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="p-2.5 bg-emerald-100 hover:bg-gradient-to-tr from-emerald-600 to-cyan-500 rounded-xl text-emerald-700 hover:text-white transition-all hover:shadow-lg">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="p-2.5 bg-emerald-100 hover:bg-gradient-to-tr from-emerald-600 to-cyan-500 rounded-xl text-emerald-700 hover:text-white transition-all hover:shadow-lg">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-800 mb-8">Message direct</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-800 mb-2">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-emerald-100 rounded-xl focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-800 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-emerald-100 rounded-xl focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
                    placeholder="contact@exemple.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-emerald-800 mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-emerald-100 rounded-xl focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
                  placeholder="Objet de votre message"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-emerald-800 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-emerald-100 rounded-xl focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
                  placeholder="Écrivez votre message ici..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-700 hover:to-cyan-600 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
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
import React from 'react';
import { FlaskConical, BadgeCheck, Clock, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="a-propos" className="relative py-28 bg-gradient-to-b from-[#F9FAFF] to-[#EFF7F2] dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors">
      <div className="container mx-auto px-4 md:px-6 xl:px-20">
        {/* Section Title */}
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent mb-6 animate-fade-in-up">
            À Propos de BIOTECH
          </h2>
          <div className="flex justify-center items-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <Award className="text-emerald-500 animate-pulse" size={28} />
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group lg:-rotate-3 transform-gpu animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-emerald-500/10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-emerald-900/50 before:z-10">
              <img 
                src="https://images.pexels.com/photos/4226901/pexels-photo-4226901.jpeg" 
                alt="Équipement médical" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-600 to-green-500 p-6 rounded-2xl shadow-xl animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
                <div className="text-white text-center">
                  <p className="text-4xl font-bold mb-1">15+</p>
                  <p className="text-sm tracking-widest font-light">Années d'expertise</p>
                  <div className="absolute -top-4 -right-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-500/20 dark:bg-emerald-400/30 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-500/20 dark:bg-green-400/30 rounded-full blur-xl animate-float-delayed" />
          </div>

          {/* Text Content */}
          <div className="space-y-8 relative z-10">
            {/* CEO Quote */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20 animate-slide-in-right transition-colors" style={{ animationDelay: '0.4s' }}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-2 transition-colors">
                  <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                    Ndiogou P. FALL, C.E.O :
                  </span>
                </h3>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 italic leading-tight transition-colors">
                  "L'excellence scientifique est notre ADN."
                </p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors">
                Chez BIOTECH, nous redéfinissons les standards de l'équipement médical grâce à une fusion unique d'innovation technologique et d'expertise humaine. Notre engagement : fournir des solutions qui transcendent les attentes.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[1,2,3].map((i) => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                      className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-600 shadow-lg animate-scale-in transition-colors"
                      style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                      alt="Expert"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Notre équipe d'experts internationaux</span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: BadgeCheck, title: 'Certifications Internationales', color: 'from-green-500 to-emerald-600' },
                { icon: Clock, title: 'Support 24h/24', color: 'from-emerald-500 to-teal-600' },
                { icon: FlaskConical, title: 'Innovation Continue', color: 'from-green-500 to-emerald-600' },
                { icon: Users, title: 'Réseau Mondial', color: 'from-teal-500 to-green-600' }
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-emerald-500/10 transition-all duration-300 border border-white/20 dark:border-gray-700/20 hover:border-transparent hover:scale-102 animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-xl transition-opacity`} />
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg shadow-md`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-colors">{item.title}</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-[currentColor]/5 rounded-full blur-xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 dark:bg-green-400/10 rounded-full blur-3xl -z-0 animate-float transition-colors" />
        <div className="absolute bottom-20 right-32 w-64 h-64 bg-emerald-600/5 dark:bg-emerald-400/10 rounded-full blur-3xl -z-0 animate-float-delayed transition-colors" />
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(-2deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default About;
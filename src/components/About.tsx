import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, BadgeCheck, Clock, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="a-propos" className="relative py-28 bg-gradient-to-b from-[#F9FAFF] to-[#EFF7F2] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 xl:px-20">
        {/* Section Title */}
        <div className="text-center mb-20 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent mb-6"
          >
            À Propos de BIOTECH
          </motion.h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <Award className="text-emerald-500 animate-pulse" size={28} />
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group lg:-rotate-3 transform-gpu"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-emerald-900/50 before:z-10">
              <img 
                src="https://images.pexels.com/photos/4226901/pexels-photo-4226901.jpeg" 
                alt="Équipement médical" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Experience Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-600 to-green-500 p-6 rounded-2xl shadow-xl"
              >
                <div className="text-white text-center">
                  <p className="text-4xl font-bold mb-1">15+</p>
                  <p className="text-sm tracking-widest font-light">Années d'expertise</p>
                  <div className="absolute -top-4 -right-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full animate-ping" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-500/20 rounded-full blur-xl" />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-8 relative z-10">
            {/* CEO Quote */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                    Ndiogou P. FALL, C.E.O :
                  </span>
                </h3>
                <p className="text-2xl font-bold text-gray-800 italic leading-tight">
                  "L'excellence scientifique est notre ADN."
                </p>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chez BIOTECH, nous redéfinissons les standards de l'équipement médical grâce à une fusion unique d'innovation technologique et d'expertise humaine. Notre engagement : fournir des solutions qui transcendent les attentes.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[1,2,3].map((i) => (
                    <motion.img 
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                      alt="Expert"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Notre équipe d'experts internationaux</span>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: BadgeCheck, title: 'Certifications Internationales', color: 'from-green-500 to-emerald-600' },
                { icon: Clock, title: 'Support 24h/24', color: 'from-emerald-500 to-teal-600' },
                { icon: FlaskConical, title: 'Innovation Continue', color: 'from-green-500 to-emerald-600' },
                { icon: Users, title: 'Réseau Mondial', color: 'from-teal-500 to-green-600' }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-transparent"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg shadow-md`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{item.title}</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-[currentColor]/5 rounded-full blur-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-0"
          animate={{
            y: [-20, 0, -20],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-32 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl -z-0"
          animate={{
            y: [10, -15, 10],
            rotate: [0, -2, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default About;
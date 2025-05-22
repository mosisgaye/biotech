import React from 'react';
import { Stethoscope, FlaskRound as Flask, PenTool as Tool } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-emerald-500/10 hover:shadow-xl dark:hover:shadow-emerald-500/20 transition-all p-8 text-center group border border-transparent dark:border-gray-700">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4 transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Equipements Médicaux",
      description:
        "Une grande sélection de produits médicaux de haute qualité, adaptés aux besoins spécifiques de nos clients. Des solutions innovantes pour optimiser les soins de santé.",
      icon: <Stethoscope size={28} />,
    },
    {
      title: "Laboratoires",
      description:
        "Équipements spécialisés pour l'analyse du sang, de l'urine et des gènes, destinés aux industries médicales et pharmaceutiques. Technologies de pointe pour des résultats précis.",
      icon: <Flask size={28} />,
    },
    {
      title: "Maintenance",
      description:
        "Services complets de maintenance programmée et corrective pour tous vos équipements médicaux. Notre équipe technique assure la fiabilité et la longévité de votre matériel.",
      icon: <Tool size={28} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-300 mb-4 transition-colors">NOS SERVICES</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300 transition-colors">
            Découvrez notre gamme complète de services conçus pour répondre aux besoins des professionnels de la santé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-emerald-600 to-green-400 hover:from-emerald-700 hover:to-green-500 dark:from-emerald-500 dark:to-green-500 dark:hover:from-emerald-600 dark:hover:to-green-600 hover:shadow-lg text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            Découvrir tous nos services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
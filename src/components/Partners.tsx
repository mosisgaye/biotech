import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "Ministère de la Santé", logoUrl: "/images/logo.png" },
    { name: "LumiraDx", logoUrl: "/images/lumiradx.png" },
    { name: "Beckman Coulter", logoUrl: "/images/beckman.png" },
    { name: "COPAN", logoUrl: "/images/logo-copan.svg" },
    { name: "DiaPro", logoUrl: "/images/diapro.jpeg" },
    { name: "Institut Pasteur", logoUrl: "/images/pasteur.png" },
    { name: "Centre Hospitalier National", logoUrl: "/images/cgass.jpeg" },
    { name: "BIO 24", logoUrl: "/images/24blanc.png" },
    { name: "airinspace", logoUrl: "/images/airinspace.png" },
    { name: "Snibe Diagnostic", logoUrl: "/images/snibe.jpeg" },
    { name: "AHWA", logoUrl: "/images/ahwa.png" },
    { name: "DISCA", logoUrl: "/images/disca.png" },
    { name: "ISRA", logoUrl: "/images/isra.jpeg" },
    { name: "DALAL", logoUrl: "/images/dalal.png" },
  ];

  // Dupliquer les logos pour l'effet infini
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partenaires" className="py-20 bg-emerald-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-300 mb-4 transition-colors">
            NOS PARTENAIRES
            <span className="block w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-emerald-700/90 dark:text-emerald-300/90 transition-colors">
            Nous collaborons avec les leaders de l'industrie médicale pour vous offrir les meilleures solutions biotechnologiques.
          </p>
        </div>

        {/* Défilement infini */}
        <div className="relative overflow-hidden py-8 before:absolute before:left-0 before:top-0 before:h-full before:w-24 before:bg-gradient-to-r before:from-emerald-50 dark:before:from-gray-900 before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:h-full after:w-24 after:bg-gradient-to-l after:from-emerald-50 dark:after:from-gray-900 after:to-transparent after:z-20 transition-colors">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index}
                className="mx-8 inline-flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-emerald-500/10 hover:shadow-emerald-100/50 dark:hover:shadow-emerald-500/20 transition-all border border-transparent dark:border-gray-700">
                  <img
                    src={partner.logoUrl}
                    alt={`${partner.name} logo`}
                    className="h-16 w-auto max-w-[200px] object-contain filter grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-xl dark:shadow-emerald-500/10 border border-transparent dark:border-gray-700 transition-colors">
          <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-4 transition-colors">
            Devenez notre partenaire
            <span className="block w-16 h-1 bg-emerald-400 mx-auto mt-3 rounded-full"></span>
          </h3>
          <p className="text-emerald-700/90 dark:text-emerald-300/90 mb-6 max-w-2xl mx-auto transition-colors">
            Vous souhaitez collaborer avec BIOTECH ? Nous sommes toujours à la recherche de nouveaux partenariats stratégiques dans le domaine des équipements médicaux.
          </p>
          <button className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 dark:from-emerald-500 dark:to-green-500 dark:hover:from-emerald-600 dark:hover:to-green-600 text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
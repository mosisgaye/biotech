import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: "Ministère de la Santé", logoUrl: "https://www.sante.gouv.sn/sites/default/files/block_image/logo%20sante.png" },
    { name: "LumiraDx", logoUrl: "https://images.seeklogo.com/logo-png/45/1/lumiradx-logo-png_seeklogo-458545.png" },
    { name: "Beckman Coulter", logoUrl: "https://media.beckmancoulter.com/-/media/diagnostics/corporate/logos/beckman-coulter-logo_498x150.png" },
    { name: "COPAN", logoUrl: "https://www.copangroup.com/wp-content/themes/copan/images/logo-copan.svg" },
    { name: "DiaPro", logoUrl: "http://biotechnology-equipments.com/imagelabo/partenaires/diapro.jpeg" },
    { name: "Institut Pasteur", logoUrl: "http://biotechnology-equipments.com/imagelabo/partenaires/pasteur.png" },
    { name: "Centre Hospitalier National", logoUrl: "http://biotechnology-equipments.com/imagelabo/partenaires/cgass.JPG" },
    { name: "BIO 24", logoUrl: "https://labobio24.com/wp-content/uploads/2022/01/LOGO-BIO-24-BLANC.png" },
    { name: "airinspace", logoUrl: "https://frenchhealthcare-association.fr/wp-content/uploads/2022/06/Logo_airinspace-2016_grand.png" },
    { name: "Snibe Diagnostic", logoUrl: "http://biotechnology-equipments.com/imagelabo/partenaires/snibe.jpeg" },
  ];

  // Dupliquer les logos pour l'effet infini
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="nos-partenaires" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            NOS PARTENAIRES
            <span className="block w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-emerald-700/90">
            Nous collaborons avec les leaders de l'industrie médicale pour vous offrir les meilleures solutions.
          </p>
        </div>

        {/* Défilement infini */}
        <div className="relative overflow-hidden py-8 before:absolute before:left-0 before:top-0 before:h-full before:w-24 before:bg-gradient-to-r before:from-emerald-50 before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:h-full after:w-24 after:bg-gradient-to-l after:from-emerald-50 after:to-transparent after:z-20">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index}
                className="mx-8 inline-flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-emerald-100/50 transition-all">
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

        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">
            Devenez notre partenaire
            <span className="block w-16 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></span>
          </h3>
          <p className="text-emerald-700/90 mb-6 max-w-2xl mx-auto">
            Vous souhaitez collaborer avec PHARMACARE ? Nous sommes toujours à la recherche de nouveaux partenariats stratégiques.
          </p>
          <button className="bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-700 hover:to-cyan-600 text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            Nous contacter
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
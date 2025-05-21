import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 border border-emerald-50">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 right-0 m-4 bg-emerald-500 text-white p-3 rounded-full transform translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ShoppingCart size={18} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-emerald-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <button className="flex items-center text-emerald-600 font-medium group-hover:text-green-500 transition-colors">
          VOIR <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const products = [
    {
      title: "Matériels d'urgence",
      description: "Équipements spécialisés pour les situations d'urgence, incluant défibrillateurs, tensiomètres et kits de premiers soins.",
      image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Instrumentation Médicale",
      description: "Instruments de précision pour diagnostics et soins, incluant stéthoscopes, thermomètres et équipements de diagnostic.",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Instruments de mesure",
      description: "Appareils de mesure précis pour le suivi des patients, incluant glucomètres, oxymètres et moniteurs de pression artérielle.",
      image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Désinfection et hygiène médicale",
      description: "Solutions complètes de désinfection et produits d'hygiène pour garantir un environnement sain et conforme aux normes sanitaires.",
      image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section id="produits" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">NOS PRODUITS</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="max-w-3xl mx-auto mt-6 text-gray-600">
            Nous proposons une gamme complète de produits pharmaceutiques et parapharmaceutiques de haute qualité pour répondre à tous vos besoins de santé et bien-être.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="bg-gradient-to-r from-emerald-600 to-green-400 hover:shadow-lg text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center">
            <span>Voir tous nos produits</span>
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>

        {/* Bannière promotionnelle */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-lg">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Produits pharmaceutiques" 
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-xl">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Découvrez notre gamme de produits naturels</h3>
                <p className="text-white/90 mb-6">
                  Des solutions efficaces à base d'ingrédients naturels, sélectionnés avec soin pour votre bien-être quotidien.
                </p>
                <button className="bg-white text-emerald-800 hover:bg-emerald-100 px-6 py-2.5 rounded-full font-medium transition-colors flex items-center">
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: '/images/slider-01.jpg',
    title: 'Innovation Biotechnologique',
    subtitle: 'Précision Inégalée'
  },
  {
    image: '/images/slider-02.jpg', 
    title: 'Équipements de Laboratoire',
    subtitle: 'Haute Performance pour la Recherche'
  },
  {
    image: '/images/slider-03.jpg',
    title: 'Solutions Avancées',
    subtitle: 'Pour l\'Industrie Biotechnologique'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-slide avec timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Préchargement optimisé
  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = slides[0].image;
    
    // Précharger les autres images après
    setTimeout(() => {
      slides.slice(1).forEach(slide => {
        const img = new Image();
        img.src = slide.image;
      });
    }, 1000);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isLoaded) {
    // Skeleton loader ultra-simple
    return (
      <section className="relative h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4"></div>
            <div className="h-12 bg-gray-700 rounded w-96 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-700 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="accueil" className="relative h-screen overflow-hidden bg-black">
      {/* Images Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              style={{ 
                transform: 'scale(1.05)',
                filter: 'brightness(0.7)'
              }}
            />
            
            {/* Overlay gradient */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, rgba(10, 26, 58, 0.85) 30%, rgba(10, 26, 58, 0.2) 100%)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6 xl:px-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <span className="text-lg md:text-xl font-semibold text-emerald-400 tracking-wider uppercase">
                Excellence Scientifique
              </span>
            </div>

            {/* Titre principal */}
            <h1 
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-in-up"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                animationDelay: '0.5s',
                animationFillMode: 'forwards'
              }}
            >
              {slides[currentSlide].title}
              <span className="block mt-4 text-3xl md:text-4xl font-light text-emerald-200">
                {slides[currentSlide].subtitle}
              </span>
            </h1>

            {/* CTA Button */}
            <div 
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <button 
                className="group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-10 py-5 rounded-full inline-flex items-center text-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105"
                aria-label="Découvrir nos solutions biotechnologiques"
              >
                <span className="mr-4">Découvrez nos Solutions</span>
                <ChevronRight 
                  size={28} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-6">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Image précédente"
          >
            <ArrowLeft className="text-white" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-emerald-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Image suivante"
          >
            <ArrowRight className="text-white" size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-400 transition-all duration-6000 ease-linear"
            style={{ 
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
              animation: 'progress 6s linear infinite'
            }}
          />
        </div>
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
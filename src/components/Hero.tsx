import React, { useEffect } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

const slides = [
  {
    image: 'images/slider-01.jpg',
    title: 'Innovation Biotechnologique',
    subtitle: 'Précision Inégalée',
    overlay: 'linear-gradient(45deg, rgba(10, 26, 58, 0.85) 30%, rgba(10, 26, 58, 0.2) 100%)'
  },
  {
    image: 'images/slider-02.jpg',
    title: 'Équipements de Laboratoire',
    subtitle: 'Haute Performance pour la Recherche',
    overlay: 'linear-gradient(45deg, rgba(16, 52, 94, 0.85) 30%, rgba(16, 52, 94, 0.2) 100%)'
  },
  {
    image: 'images/slider-03.jpgjpg',  
    title: 'Solutions Avancées',
    subtitle: 'Pour l\'Industrie Biotechnologique',
    overlay: 'linear-gradient(45deg, rgba(8, 32, 68, 0.85) 30%, rgba(8, 32, 68, 0.2) 100%)'
  }
];

const Hero: React.FC = () => {
  useEffect(() => {
    slides.forEach(slide => {
      new Image().src = slide.image;
    });
  }, []);

  return (
    <section id="accueil" className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Parallax]}
        effect="fade"
        speed={1200}
        parallax={true}
        autoplay={{ delay: 7500, disableOnInteraction: false }}
        navigation={{
          prevEl: '.swiper-custom-prev',
          nextEl: '.swiper-custom-next'
        }}
        loop
        className="h-full w-full"
      >
        <div 
          slot="container-start" 
          className="swiper-parallax-bg"
          data-swiper-parallax="-30%"
        />

        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full">
            {/* Background with Parallax Effect */}
            <div 
              className="absolute inset-0 z-0 swiper-parallax"
              data-swiper-parallax="-40%"
            >
              <div 
                className="h-full w-full bg-cover bg-center transform transition-transform duration-1000 scale-110 group-hover:scale-100"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: 'center center'
                }}
              />
              <div 
                className="absolute inset-0 opacity-90 transition-opacity duration-500"
                style={{ background: slide.overlay }}
              />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-4 md:px-6 xl:px-20">
                <div className="max-w-4xl relative">
                  <div 
                    className="mb-8 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <span className="text-lg md:text-xl font-semibold text-[#00CED1] tracking-wider uppercase">
                      Excellence Scientifique
                    </span>
                  </div>

                  <h1 
                    className="text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.15] opacity-0 animate-fade-in-up"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      textShadow: '0 4px 20px rgba(0,0,0,0.25)',
                      animationDelay: '0.5s'
                    }}
                  >
                    {slide.title}
                    <span className="block mt-4 text-3xl md:text-4xl font-light text-[#CCF4F5]">
                      {slide.subtitle}
                    </span>
                  </h1>

                  <div 
                    className="opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '0.7s' }}
                  >
                    <button className="group relative bg-gradient-to-r from-[#00CED1] to-[#008B8B] hover:from-[#00A5A8] hover:to-[#006B6B] text-white px-10 py-5 rounded-full inline-flex items-center text-xl transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                      <span className="mr-4">Découvrez nos Solutions</span>
                      <ChevronRight size={28} className="transition-transform duration-300 group-hover:translate-x-2" />
                      <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-white/30" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Navigation */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl px-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <button className="swiper-custom-prev p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <ArrowLeft className="text-white" size={28} />
                  </button>
                  <button className="swiper-custom-next p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <ArrowRight className="text-white" size={28} />
                  </button>
                </div>

                {/* Timeline Progress */}
                <div className="hidden lg:block h-1 bg-white/20 rounded-full flex-1 mx-8">
                  <div className="h-full bg-[#00CED1] transition-all duration-1000 ease-out" 
                       style={{ width: '33.33%' }} />
                </div>

                {/* Slide Number */}
                <div className="flex items-center text-white font-medium space-x-2">
                  <span className="text-2xl">0{index + 1}</span>
                  <span className="text-xl">/ 03</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
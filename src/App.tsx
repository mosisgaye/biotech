import React, { lazy, Suspense } from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ChatBot from './components/ChatBot';

// Lazy loading pour tous les composants non-critiques
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Products = lazy(() => import('./components/Products'));
const Partners = lazy(() => import('./components/Partners'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading ultra-simple avec support dark mode
const SimpleLoader = () => (
  <div className="py-20 flex justify-center bg-white dark:bg-gray-900 transition-colors">
    <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  React.useEffect(() => {
    // Optimisations critiques
    document.title = "BIOTECH - Équipements Médicaux de Pointe";
    
    // Smooth scrolling optimisé
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link && link.hash) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  }, []);

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        {/* Header et Hero - Chargement immédiat */}
        <Header />
        <Hero />
        
        {/* Sections avec lazy loading optimisé */}
        <Suspense fallback={<SimpleLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SimpleLoader />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SimpleLoader />}>
          <Products />
        </Suspense>
        
        <Suspense fallback={<SimpleLoader />}>
          <Partners />
        </Suspense>
        
        <Suspense fallback={<SimpleLoader />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<SimpleLoader />}>
          <Footer />
        </Suspense>

        {/* ChatBot - Toujours disponible */}
        <ChatBot />
      </div>
    </DarkModeProvider>
  );
}

export default App;
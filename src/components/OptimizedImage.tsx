import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  objectFit = 'cover'
}) => {
  // Générer les URLs pour différents formats
  const getOptimizedSrc = (format: 'webp' | 'avif' | 'original') => {
    if (src.startsWith('http') || format === 'original') {
      return src;
    }
    
    const baseName = src.replace(/\.(jpg|jpeg|png)$/i, '');
    switch (format) {
      case 'avif':
        return `${baseName}.avif`;
      case 'webp':
        return `${baseName}.webp`;
      default:
        return src;
    }
  };

  // Générer les tailles responsives
  const generateSrcSet = (format: 'webp' | 'avif' | 'original') => {
    const baseUrl = getOptimizedSrc(format);
    if (src.startsWith('http')) {
      return baseUrl; // Pour les images externes, on garde l'URL originale
    }
    
    const baseName = baseUrl.replace(/\.(webp|avif|jpg|jpeg|png)$/i, '');
    const ext = format === 'original' ? src.split('.').pop() : format;
    
    return [
      `${baseName}-400w.${ext} 400w`,
      `${baseName}-800w.${ext} 800w`,
      `${baseName}-1200w.${ext} 1200w`,
      `${baseName}-1600w.${ext} 1600w`
    ].join(', ');
  };

  const sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  const imageStyle: React.CSSProperties = {
    objectFit,
    aspectRatio: `${width} / ${height}`,
  };

  return (
    <picture className={`block ${className}`}>
      {/* Format AVIF (meilleure compression) */}
      <source 
        srcSet={generateSrcSet('avif')} 
        type="image/avif"
        sizes={sizes}
      />
      
      {/* Format WebP (bon support) */}
      <source 
        srcSet={generateSrcSet('webp')} 
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Format original (fallback) */}
      <img
        src={getOptimizedSrc('original')}
        srcSet={src.startsWith('http') ? undefined : generateSrcSet('original')}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        style={imageStyle}
        className={`w-full h-full ${className}`}
        onError={(e) => {
          // Fallback en cas d'erreur de chargement
          const img = e.target as HTMLImageElement;
          if (!img.src.includes('placeholder')) {
            img.src = `/api/placeholder/${width}/${height}`;
          }
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
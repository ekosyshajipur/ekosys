import { useState, useRef, useEffect } from 'react';

export default function LazyImage({ src, alt, width, height, className = '', style = {} }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { rootMargin: '200px' });
    if (imgRef.current) obs.observe(imgRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`lazy-img-wrapper ${className}`} style={{ ...style, width, height, position: 'relative', overflow: 'hidden', background: '#f1f5f9', borderRadius: 8 }}>
      {inView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.4s', opacity: loaded ? 1 : 0 }}
        />
      )}
      {!loaded && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><rect x='3' y='3' width='18' height='18' rx='2' /><circle cx='8.5' cy='8.5' r='1.5' /><path d='m21 15-5-5L5 21' /></svg>
        </div>
      )}
    </div>
  );
}

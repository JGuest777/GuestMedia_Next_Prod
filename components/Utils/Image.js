import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

export default function Image({ className, src, alt, aspectRatio = 16 / 9 }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className={clsx('wrapper', className)}>
      <div style={{ paddingBottom: `${100 / aspectRatio}%` }} />
      <img src={`${src}?lqip`} aria-hidden="true" />
      <img
        loading="lazy"
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={clsx('source', loaded && 'loaded')}
      />
    </div>
  );
}

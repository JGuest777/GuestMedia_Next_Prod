import { useState, useEffect } from 'react';
import Particles from 'react-particles-js';

export default function ParticleBg() {
  const [width, setWidth] = useState(window.innerWidth);

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth);
    }, 1000);
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [width]);

  const particleNumCalc = (windowWidth) => {
    if (windowWidth <= 600) {
      return 10;
    } else if (windowWidth > 600 && windowWidth <= 768) {
      return 12;
    } else if (windowWidth > 768 && windowWidth <= 992) {
      return 20;
    } else if (windowWidth > 992 && windowWidth <= 1200) {
      return 25;
    } else {
      return 30;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <Particles
        width="100%"
        height="100%"
        params={{
          particles: {
            number: {
              value: particleNumCalc(width),
            },
            color: {
              value: '#FF8C00',
            },
            size: {
              value: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
    </div>
  );
}

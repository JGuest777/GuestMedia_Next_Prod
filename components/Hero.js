import React from 'react';
import { useSpring, animated } from 'react-spring';
// !NOTE: next/image <Image /> component doesn't work on deploy to Vercel.
// using next-optimized-image plugin instead

export default function Hero() {
  const logoSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="hero">
      <animated.div style={logoSpring}>
        <div className="hero_img">
          <img
            src={require('../images/logo.png?webp')}
            style={{ width: '100%' }}
            alt="Guest Media Logo"
          />
        </div>
      </animated.div>
      <h1 className="tagLine">technically creative.</h1>
    </div>
  );
}

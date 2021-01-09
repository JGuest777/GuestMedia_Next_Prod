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
    <div className="hero-container">
      <animated.div style={logoSpring}>
        <img src={require('../images/logo.png?webp')} alt="Guest Media Logo" />
      </animated.div>
      <h1>technically creative.</h1>
    </div>
  );
}

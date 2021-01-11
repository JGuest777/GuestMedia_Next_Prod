import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Hero() {
  const logoSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="hero-container">
      <animated.div style={logoSpring}>
        <img src={require('../images/logo.png?webp')} />
      </animated.div>
      <h1>technically creative.</h1>
    </div>
  );
}

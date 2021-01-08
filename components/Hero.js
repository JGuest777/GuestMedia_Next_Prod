import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

// !NOTE: next/image <Image /> component doesn't work on deploy to Vercel.
// Thus switched to standard <img /> tag.

export default function Hero() {
  const logoSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="hero">
      <animated.div style={logoSpring}>
        <Image
          src="/images/logo.png"
          alt="Guest Media Logo"
          width={1720}
          height={538}
        />

        {/* <img
          src={require('../images/logo.png?webp')}
          style={{ width: '100%' }}
          alt="Guest Media Logo"
        /> */}
      </animated.div>
      <h1 className="tagLine">technically creative.</h1>
    </div>
  );
}

import React from 'react';
// import { useSpring, animated } from 'react-spring';
import LazyImg from './Utils/LazyImg';

export default function Hero({ heroImage }) {
  // const logoSpring = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   config: { duration: 1000 },
  // });

  return (
    <div className="hero-container">
      {/* <animated.div style={logoSpring}> */}
      <LazyImg
        className="test-img"
        alt="test img"
        src={heroImage.src}
        aspectRatio={heroImage.aspectRatio}
        lqip={heroImage.lqip}
      />
      {/* </animated.div> */}
      <h1>technically creative.</h1>
    </div>
  );
}

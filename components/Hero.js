import React from 'react';
// import { useSpring, animated } from 'react-spring';
import Image from './Utils/Image';

export default function Hero({ src, aspectRatio }) {
  // const logoSpring = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   config: { duration: 1000 },
  // });

  return (
    <div className="hero-container">
      {/* <animated.div style={logoSpring}> */}
      <Image
        className={'test-img'}
        src={src}
        aspectRatio={aspectRatio}
        alt={'Test Image'}
      />
      {/* </animated.div> */}
      <h1>technically creative.</h1>
    </div>
  );
}

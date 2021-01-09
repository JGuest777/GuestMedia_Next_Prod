import Grid from '@material-ui/core/Grid';
import { useSpring, animated } from 'react-spring';

export default function Why() {
  const whySpring = useSpring({
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    from: {
      opacity: 0,
      transform: 'translate3d(0,-50px, 0)',
    },
  });

  return (
    <div className="why-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <animated.div className="why-header" style={whySpring}>
            <p>Why</p>
            <div className="why-img_container">
              <img
                src={require('../images/mediaLogoBlack.png?webp')}
                alt="custom Media Logo"
              />
            </div>
            <p>?</p>
          </animated.div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            convallis ligula pulvinar mauris lacinia, dapibus convallis velit
            cursus. Pellentesque egestas hendrerit suscipit. Cras ultricies in
            felis in porttitor. Proin accumsan auctor odio ut venenatis. Nulla
            rhoncus nibh sed lorem accumsan ultricies. Donec quam nulla, euismod
            ut mauris eu, vulputate facilisis magna. Donec ornare risus nec
            sodales hendrerit. Nam lorem dui, facilisis vel dui vel, egestas
            commodo leo. Cras tincidunt et erat et maximus. Aenean vulputate
            augue maximus urna placerat commodo. Fusce nec nulla ex.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <animated.div className="why-header" style={whySpring}>
            <p>Why</p>
            <div className="why-img_container">
              <img
                src={require('../images/logoBlack.png?webp')}
                alt="small Guest Media Logo"
              />
            </div>
            <p>?</p>
          </animated.div>
          <p>
            Phasellus iaculis ex ligula. Nulla facilisi. Praesent enim nulla,
            tincidunt ac metus id, consequat sodales dui. Ut vel velit
            vestibulum, auctor nibh at, commodo dui. Sed egestas enim nec velit
            feugiat, at venenatis erat porttitor. Nullam ornare, ligula sed
            scelerisque venenatis, sem orci rutrum neque, vitae suscipit urna
            quam at purus. Sed vestibulum, ante vel rhoncus dapibus, nisi sapien
            volutpat sem, quis posuere ante urna id odio. Maecenas in neque quis
            lorem ultricies consectetur id non diam. Aenean eleifend accumsan
            quam, vitae lacinia felis elementum vitae. Nam suscipit orci ut nibh
            convallis, id ullamcorper massa dapibus.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

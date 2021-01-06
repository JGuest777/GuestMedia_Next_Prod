// import Porsche from '../../Assets/Images/Porsche.jpg';
// import KTM from '../../Assets/Images/KTM.jpg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function About() {
  return (
    <Container maxWidth="xl" style={{ marginTop: '75px' }}>
      <Grid container spacing={3} className="aboutBlack-container">
        <Grid item xs={12} md={6}>
          <p className="aboutBlack-content">
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
        <Grid
          item
          xs={12}
          md={6}
          style={{
            backgroundColor: 'orangeRed',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <img className="aboutBlack-img" src={Porsche} alt="logo" /> */}
          ImageOne
        </Grid>
      </Grid>
      <Grid container spacing={3} className="aboutBlack-container">
        <Grid
          item
          xs={12}
          md={6}
          style={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <img className="aboutBlack-img" src={KTM} alt="logo" /> */}
          ImageTwo
        </Grid>
        <Grid item xs={12} md={6}>
          <p className="aboutBlack-content">
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
    </Container>
  );
}

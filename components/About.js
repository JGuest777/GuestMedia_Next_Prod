import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Image from 'next/image';

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
          <Image
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Guest Media Logo"
            width={486}
            height={324}
          />
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
          <Image
            src="/images/porsche.jpg"
            alt="Guest Media Logo"
            width={576}
            height={324}
          />
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

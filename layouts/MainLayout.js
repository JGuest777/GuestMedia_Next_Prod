import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';

const ParticleBg = dynamic(() => import('../components/ParticleBg'), {
  ssr: false,
});

export default function MainLayout({ children }) {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParticleBg />
      <Header />
      <Container maxWidth="xl">{children}</Container>
      <Footer />
    </ThemeProvider>
  );
}

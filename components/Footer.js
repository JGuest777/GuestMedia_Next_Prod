import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useFooterStyles } from '../styles/Footer';
// Overrides Nextjs 'Link'
import Link from '../components/Utils/LinkWrap';

export default function Footer() {
  const classes = useFooterStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container
          maxWidth="sm"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Typography variant="body2" color="textSecondary" component="div">
            {'Copyright © '}
            <Link href="/" color="inherit">
              <img
                className="footerLogo"
                src={require('../images/logo.png?webp')}
                alt="custom Media Logo"
              />
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// Overrides Nextjs 'Link'
import Link from '../components/LinkWrap';
// import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

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
              {/* <Image
                src="/images/logo.png"
                alt="logo"
                width={75}
                height={25}
                className="footerLogo"
              /> */}

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

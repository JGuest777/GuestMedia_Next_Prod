import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
// Overrides Nextjs 'Link'
import Link from '../components/LinkWrap';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useHeaderStyles } from '../styles/HeaderStyles';

const useMenuStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000,
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function PersistentDrawerRight(props) {
  const classes = useHeaderStyles();
  const menuClasses = useMenuStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  // return focus to the button when we transitioned from !openMenu -> openMenu
  const prevOpenMenu = useRef(openMenu);
  useEffect(() => {
    if (prevOpenMenu.current === true && openMenu === false) {
      anchorRef.current.focus();
    }

    prevOpenMenu.current = openMenu;
  }, [openMenu]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div id="back-to-top-anchor" className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <div className="nav">
              <List
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <ListItem button>
                  <Link href="/" color="primary">
                    <Typography className={classes.navLink}>Home</Typography>
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link href="/about">
                    <Typography className={classes.navLink}>About</Typography>
                  </Link>
                </ListItem>
                <ListItem
                  button
                  ref={anchorRef}
                  aria-controls={openMenu ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <Typography>Services</Typography>

                  <Popper
                    className={menuClasses.root}
                    open={openMenu}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom'
                              ? 'center top'
                              : 'center bottom',
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={openMenu}
                              id="menu-list-grow"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose}>
                                <Link href="/services">
                                  <Typography className={classes.navLink}>
                                    Web Design
                                  </Typography>
                                </Link>
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Link href="/services">
                                  <Typography className={classes.navLink}>
                                    Videography
                                  </Typography>
                                </Link>
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </ListItem>
                <ListItem button>
                  <Link href="/contact">
                    <Typography className={classes.navLink}>Contact</Typography>
                  </Link>
                </ListItem>
              </List>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ScrollTop {...props}>
        <Fab color="default" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={open}
        ModalProps={{ onBackdropClick: handleDrawerClose }}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <Link href="/" color="primary" className={classes.navLink}>
              <a className={classes.navLink}>Home</a>
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/about" className={classes.navLink}>
              <a className={classes.navLink}>About</a>
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/services" className={classes.navLink}>
              <a className={classes.navLink}>Services</a>
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/contact" className={classes.navLink}>
              <a className={classes.navLink}>Contact</a>
            </Link>
          </ListItem>
        </List>
        {/* TODO: Social Buttons below divider */}
        {/* <Divider />
        <List>
        </List> */}
      </Drawer>
    </div>
  );
}

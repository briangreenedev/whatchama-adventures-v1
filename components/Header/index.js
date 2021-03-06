import React from 'react';
import {AppBar, Badge, Button, Container, IconButton, Toolbar, Typography, makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AdventureListIcon from "@material-ui/icons/PermMedia";
import HorizontalSpacer from "../HorizontalSpacer";
import Image from 'next/image';


const useStyles = (marginBottom) => makeStyles(theme => ({
  appbar: {
    backgroundColor: 'white',
    color: 'black',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logo: {
    fontSize: '1.5rem'
  },
  title: {
    fontWeight: '800',
    flexGrow: '3',
    textAlign: 'center',
    fontSize: '2.1rem',
  },
  [theme.breakpoints.down('md')]: {
    title: {
      fontSize: '1rem',
    },
    bucketListButton: {
      display: 'none'
    }
  },
  mainLogo: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '4px',
    marginBottom: '-30px',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    boxShadow: '0px 3px 5px 0px #757575',
    paddingTop: '7px',
    marginTop: '-14px'
  },
}))();

const Header = ({maxWidth, title, marginBottom = '100px'}) => {
  const classes = useStyles(marginBottom);

  return (
    <>
      <AppBar className={classes.appbar}>
        <Container maxWidth={maxWidth || 'xl'}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <div className={classes.mainLogo}>
              <Image src="/img/logo/whatchama-adventures-main-logo.png" title="Whatchama Adventures Logo" width="150" height="88" />
            </div>
            <Typography className={classes.title} variant="h1">
              { title || 'Adventures' }
            </Typography>
            <Button className={classes.bucketListButton} color="inherit"><Badge badgeContent={4} color="secondary"><AdventureListIcon /></Badge></Button>
          </Toolbar>
        </Container>
      </AppBar>
      <HorizontalSpacer height="84px" />
    </>
  );
};

export default Header;

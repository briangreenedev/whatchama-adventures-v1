import React from 'react';
import {AppBar, Badge, Button, Container, IconButton, Toolbar, Typography, makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AdventureListIcon from "@material-ui/icons/PermMedia";

const useStyles = makeStyles(theme => ({
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
    fontSize: '3rem'
  }
}))

const Index = ({maxWidth, title}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <Container maxWidth={maxWidth || 'xl'}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.logo}>
            W.A.
          </Typography>
          <Typography className={classes.title} variant="h1">
            { title || 'Adventures' }
          </Typography>
          <Button color="inherit"><Badge badgeContent={4} color="secondary"><AdventureListIcon /></Badge></Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Index;
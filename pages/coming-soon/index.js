import React, {useEffect} from 'react';
import {makeStyles, useMediaQuery} from "@material-ui/core";
import Phone from '@material-ui/icons/Call';

const useStyles = (maxWidth600) => makeStyles(theme => ({
  root: {
    backgroundImage: 'url("/img/large/Spirit-Lake-Summer.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    height: '100%'
  },
  logo: {
    display: maxWidth600 ? 'none' : 'block',
    zIndex: '99',
    position: 'absolute',
    bottom: '-27px',
    left: '20%',
    overflow: 'hidden',
    height: '550px',
    transform: 'scaleY(.9)',
    '& img': {
      maxWidth: '500px',
      width: '100%'
    }
  },
  bgAnimate: {
    backgroundPosition: '50% 30%',
    transform: 'scale(1.1)',
    transition: 'background-position 1s, transform 10s'
  },
  signAnimate: {
    height: '656px',
    transition: 'transform 1s, height 1s, transform 1s, bottom 1s',
    transform: 'scaleY(1)',
    bottom: '0px'
  },
  bgSlideOut: {
    filter: 'blur(35px)',
    transition: 'all 2s',
    transform: 'scale(1)',
  },
  bgSlideIn: {
    transition: 'transform 10s, filter 1s',
    transform: 'scale(1.1)',
    filter: 'blur(0px)'
  },
  mobileContainer: {
    height: '100%',
    width: '100%',
    display: maxWidth600 ? 'flex' : 'none',
    position: 'absolute',
    bottom: '0px',
    flexDirection: 'column',
    padding: '15px',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffab',
    '& > h1 > span': {
      color: '#8c5818'
    },
    '& img': {
      width: '100%'
    }
  },
  phone: {
    position: 'absolute',
    right: 0,
    top: '10px',
    '& a': {
      padding: '15px',
      '& svg': {
        marginBottom: '-7px'
      }
    },
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '20px 0px 0px 20px',
    '&:hover': {
      transition: 'background-color .5s',
      backgroundColor: '#407e22',
      color: 'white'
    }
  }
}));

const ComingSoonPage = () => {
  const maxWidth600 = useMediaQuery("(max-width:600px)");
  const classes = useStyles(maxWidth600)();

  const getNextImageName = ((imagesArray, index = 0, path = '/img/large') => () => {
    index = index > imagesArray.length - 1 ? 0 : index;
    return `${path}/${imagesArray[index++]}`
  })([
    'arch.jpg',
    'camping-bg.jpg',
    'Spirit-Lake-Summer.jpg'
  ])

  useEffect(() => {
    window.onload = function () {
      const elem = document.getElementById('fullscreen');
      const signElem = document.getElementById('sign');
      elem.classList.add(classes.bgAnimate);
      signElem.classList.add(classes.signAnimate);
      setInterval(() => {
        elem.classList.remove(classes.bgSlideIn);
        elem.classList.add(classes.bgSlideOut);
        setTimeout(() => {
          elem.classList.remove(classes.bgSlideOut);
          elem.style.backgroundImage = `url(${getNextImageName()})`;
          console.log('elem.style.backgroundImage', elem.style.backgroundImage);
          elem.classList.add(classes.bgSlideIn);
        }, 1200)
      }, 10000);
    }
  }, []);

  return (
    <React.Fragment>
      <div style={{ height: '100%', width: '100%', overflow: 'hidden'}} >
        <div id="fullscreen" className={`${classes.root}`}>
          {/*<div>*/}
          {/*  <span>READY FOR AN ADVENTURE?</span>*/}
          {/*  <h1>COMING <span>SOON</span></h1>*/}
          {/*</div>*/}
          {/*<AdventureThemes />*/}
        </div>
        <div className={classes.mobileContainer}>
          <h1>Coming <span>Soon...</span></h1>
          <div><Logo /></div>
        </div>
        <div id="sign" className={classes.logo}><SignLogo/></div>
        <div className={classes.phone}>
          <a href="tel:4357907846"><Phone /> <span>(435) 790-6777</span></a>
        </div>
      </div>
    </React.Fragment>
  );
};

const SignLogo = () => {
  return <img src="/img/theme-logo/whatchama-adventures-logo-on-sign.png"/>
};

const Logo = () => {
  return <img src="/img/logo/Whatchama-Adventures-Logo.png"/>
};

export default ComingSoonPage;
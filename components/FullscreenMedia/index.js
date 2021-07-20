import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = ({backgroundImage}) => makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '400px',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundImage: `url("${backgroundImage || 'https://i1.wp.com/faithcrossroads.org/wp-content/uploads/2020/09/image-coming-soon.jpg?ssl=1'}")`
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    background: 'rgba(0, 0, 0, 0, 0.65)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})())

const FullscreenMedia = ({backgroundImage}) => {
  const classes = useStyles({backgroundImage});

  return (
    <div className={classes.root}>
      <div className={classes.overlay}>

      </div>
    </div>
  );
};

export default FullscreenMedia;

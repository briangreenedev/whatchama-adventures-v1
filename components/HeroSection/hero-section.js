import React from 'react';
import {Button, Fab, makeStyles} from "@material-ui/core";
import PlayIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  info: {
    flex: '2',
    display: 'flex',
    height: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 2.5rem',
    boxSizing: 'border-box',
    '& > *': {
      textAlign: 'left'
    },
    '& > div > span': {
      marginRight: '10px'
    },
    '& h2': {
      textTransform: 'uppercase'
    },
    '& p': {
      height: '50px',
      fontSize: '.8rem'
    }
  },
  image: props => ({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '3rem',
    flex: '6',
    backgroundImage: `url(${props.img})`,
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: props.reverse ? '2px 250px 250px 2px' : '250px 2px 2px 250px'
  }),
  infoIcons: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column'
  },
  fab: {
    opacity: '.6',
    backgroundColor: '#fff',
    marginRight: '10px',
    '&:hover': {
      opacity: '.9',
      backgroundColor: '#fff',
    }
  }
}));

const HeroSection = (props) => {
  const {img, title, description, reverse} = props;
  const {root, info, image, fab} = useStyles(props)

  return (
    <div className={root}>
      {reverse ?
        <React.Fragment>
          <div className={info}>
            <h2>{title}</h2>
            <div>
              <span>~ 2hr</span>
              <span>Intermediate</span>
            </div>
            <p>{description}</p>
          </div>
          <div className={image}></div>
        </React.Fragment>
        :
        <React.Fragment>
          <div className={image}>
            <Fab className={fab}><PlayIcon /></Fab>
            <Fab className={fab}><AddIcon /></Fab>
          </div>
          <div className={info}>
            <h2>{title}</h2>
            <div>
              <span>~ 2hr</span>
              <span>Intermediate</span>
            </div>
            <p>{description}</p>
          </div>
        </React.Fragment>
      }
    </div>
  );
};

export default HeroSection;
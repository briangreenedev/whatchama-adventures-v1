import React from 'react';
import {Card, CardActionArea, CardMedia, Fab, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    '& h2': {
      fontSize: '.8rem',
      textTransform: 'uppercase'
    },
    '& .fab-root-override': {
      width: '36px',
      height: '36px',
      visibility: 'hidden',
      backgroundColor: 'white',
      color: 'black',
      opacity: .6
    },
    '& .fab-root-override:hover': {
      width: '38px',
      height: '38px',
      opacity: 1
    },
    '&:hover .fab-root-override': {
      visibility: 'visible'
    }
  },
  insideContent: {
    position: 'absolute',
    bottom: '8px',
    color: '#fff',
    backgroundColor: '#000',
    padding: '11px 20px',
    fontWeight: 'bold'
  },
  insideButtons: {
    position: 'absolute',
    top: '7px',
    color: '#fff',
    right: '7px',
    zIndex: 99999999
  },
  overlayImg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
  }
});

const Index = (props) => {
  const { root, insideContent, overlayImg, insideButtons, fabRootOverride } = useStyles();
  const { title, img, video } = props;
  return (
    <div className={`${root} img-cover`}>
      <div className={`${overlayImg} ${video && 'video'}`} style={{backgroundImage: `url(${img})`}} />
      <div className={insideContent}>{title}</div>
      <div className={insideButtons}>
        <Fab color="primary" aria-label="add" className="fab-root-override">
          <AddIcon />
        </Fab>
      </div>
      <video width="100%" onMouseEnter={startVideo} onMouseLeave={pauseVideo} muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>

    // <Card className={root}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       alt={title}
    //       height="200"
    //       image={img}
    //       title={title}
    //     />
    //     <div className={insideContent}>
    //       <h2>{title}</h2>
    //     </div>
    //   </CardActionArea>
    // </Card>
  );

  function startVideo(e) {
    e.target.play();
  }

  function pauseVideo(e) {
    e.target.pause();
  }
};

export default Index;
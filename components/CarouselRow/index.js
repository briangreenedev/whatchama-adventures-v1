import React, {useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Button, IconButton} from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 23fr 1fr',
      '& > button': {
        fontSize: '2rem',
        transform: 'scale(.8)',
        color: '#353535',
        '&:nth-of-type(1)': {
          marginRight: '-65px',
          background: 'linear-gradient(90deg, white, white, transparent)',
          zIndex: 9,
        },
        '&:nth-of-type(2)': {
          marginLeft: '-65px',
          background: 'linear-gradient(270deg, white, white, transparent)',
          zIndex: 9,
        },
      }
    },
    sectionsContainer: {
      display: 'grid',
      overflow: 'hidden',
      scrollBehavior: 'smooth',
      gridTemplateColumns: 'repeat(5, 100%)',
      padding: '30px 22px',
      '& > *': {
        width: '100%',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        transition: 'all .5s ease-in',
        '& > *': {
          transition: '250ms all',
          transform: 'scale(.98)',
          '&:hover': {
            transform: 'scale(1.3)',
            zIndex: '10',
            '& > div.video:nth-of-type(1)': {
              transition: 'opacity 1s ease-in',
              opacity: '0'
            }
          }
        }
      }
    },
    section: {
      transition: 'all .5s ease-in',
    }
  }
});

const Index = ({children}) => {
  const [sectionOffset, setSectionOffset] = useState(0);
  const classes = useStyles();
  const sections = divideIntoSections(children).by(5);
  return (
    <div className={classes.root}>
      <Button onClick={prev}> ❮ </Button>
      <div className={classes.sectionsContainer}>
        {
          sections.map((sec, index) => (
            <section className={classes.section} style={{
              transform: `translateX(${sectionOffset}%)`
            }}>
              { sec }
            </section>
          ))
        }
      </div>
      <Button onClick={next}> ❯ </Button>
    </div>
  );

  function prev(e) {
    if(sectionOffset/100 !== 0)
      setSectionOffset(sectionOffset + 100)
  }

  function next(e) {
    if(sectionOffset/100 !== sections.length - 1)
      setSectionOffset(sectionOffset - 100)
  }
}

function divideIntoSections(elements) {
  return {
    by(maxPerSection) {
      let dividedElements = [[]];
      let increment = maxPerSection;
      let z = 0;
      for(let i = 0; i < elements.length; i++) {
        dividedElements[z].push(elements[i]);
        if(i === increment - 1 && typeof elements[i + 1] !== 'undefined') {
          dividedElements.push([]);
          z++;
          increment += maxPerSection;
        }
      }
      return dividedElements;
    }
  }
}

export default Index;
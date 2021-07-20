import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '10px',
    '& > *': {
      minHeight: '200px',
      backgroundColor: '#fbfbfb'
    }
  }
}))

const Choose = ({items, className}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className}`}>
      { items }
    </div>
  );
};

export default Choose;
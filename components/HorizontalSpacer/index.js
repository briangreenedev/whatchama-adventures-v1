import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = ({height = '100px'}) => makeStyles(() => ({
  spacer: {
    height,
    width: '100%'
  }
}))()

const HorizontalSpacer = ({height}) => {
  const classes = useStyles({height});
  return (
    <div className={classes.spacer} />
  );
};

export default HorizontalSpacer;
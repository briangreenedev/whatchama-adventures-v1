import React, {useState} from 'react';
import StepProgressSummary from "../../components/StepProgressSummary";
import Header from "../../components/Header";
import {Button, Container} from "@material-ui/core";
import data from "./data";
import Choose from "../../components/Choose";
import {makeStyles} from "@material-ui/styles";
import CheckMark from '@material-ui/icons/Check';
import FullscreenMedia from "../../components/FullscreenMedia";

const useStyles = makeStyles(() => ({
  button: {
    minHeight: '200px',
  },
  chooseAdventureContainer: {
    '& > *': {
      opacity: '1',
      transition: 'opacity .5s',
      transitionDelay: '.1s'
    }
  },
  buttonSelected: {
    borderWidth: '3px',
    borderStyle: 'solid',
    borderImageSlice: '1',
    borderImageSource: 'linear-gradient(to left, #000fc8, #484848)',

  },
  checkmark: {
    position: 'absolute',
    bottom: '3px',
    right: '11px',
    '& svg': {
      fontSize: '2rem',
      color: '#193bd1',
      fontWeight: 'bold'
    }
  },
  stepProgressContainer: {
    position: 'fixed',
    zIndex: 1,
    minWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  adventuresContainer: {
    paddingTop: '30px',
    paddingBottom: '30px'
  }
}))

const ChooseAdventure = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [choice, setChoice] = useState({});
  const [themeChoice, setThemeChoice] = useState();
  const [transportationChoice, setTransportationChoice] = useState();
  const [locationChoice, setLocationChoice] = useState();
  const [activityChoice, setActivityChoice] = useState();
  const [foodChoice, setFoodChoice] = useState();
  const classes = useStyles();
  return (
    <>
      <Header title="Choose Your Adventure" maxWidth="lg"/>
      <Container className={classes.stepProgressContainer} maxWidth="lg">
        <StepProgressSummary
          initialActiveIndex={activeIndex}
          onClickStepCallback={index => {
            setActiveIndex(index);
          }}
          steps={[
            {
              title: 'Theme',
              choice: themeChoice
            },
            {
              title: 'Transportation',
              choice: transportationChoice
            },
            {
              title: 'Location',
              choice: locationChoice
            },
            {
              title: 'Activity',
              choice: activityChoice
            },
            {
              title: 'Food',
              choice: foodChoice
            }
          ]}
        />
      </Container>
      <FullscreenMedia backgroundImage={choice.img} />

      <Container className={classes.adventuresContainer} maxWidth="lg">
        <div className={classes.chooseAdventureContainer}>
          {
            activeIndex === 0 &&
            <Choose className={classes.theme} items={data.themes.map((theme, index) =>
              <Button
                onClick={() => setThemeChoice({index, name: theme.title})}
                className={`${classes.button} ${(themeChoice && themeChoice.index === index && classes.buttonSelected) || ''}`}
                size="large">{theme.title}{themeChoice && themeChoice.index === index && <div className={classes.checkmark}><CheckMark /></div>}</Button>)} />
          }
          {
            activeIndex === 1 &&
            <Choose items={data.transportationMethods.map((trans, index) =>
              <Button
                onClick={() => setTransportationChoice({index, name: trans.title})}
                className={`${classes.button} ${(transportationChoice && transportationChoice.index === index && classes.buttonSelected) || ''}`}
                size="large">{trans.title}{transportationChoice && transportationChoice.index === index && <div className={classes.checkmark}><CheckMark /></div>}</Button>)}/>
          }
          {
            activeIndex === 2 &&
            <Choose items={data.locations.map((location, index) =>
              <Button
                onClick={() => setLocationChoice({index, name: location.name})}
                className={`${classes.button} ${(locationChoice && locationChoice.index === index && classes.buttonSelected) || ''}`}
                size="large">{location.name}{locationChoice && locationChoice.index === index && <div className={classes.checkmark}><CheckMark /></div>}</Button>)}/>
          }
          {
            activeIndex === 3 &&
            <Choose items={data.activities.map((activity, index) =>
              <Button
                onClick={() => setActivityChoice({index, name: activity.activityName})}
                className={`${classes.button} ${(activityChoice && activityChoice.index === index && classes.buttonSelected) || ''}`}
                size="large">{activity.activityName}{activityChoice && activityChoice.index === index && <div className={classes.checkmark}><CheckMark /></div>}</Button>)}/>
          }
          {
            activeIndex === 4 &&
            <Choose items={data.food.map((f, index) =>
              <Button
                onClick={() => setFoodChoice({index, name: f.name})}
                className={`${classes.button} ${(foodChoice && foodChoice.index === index && classes.buttonSelected) || ''}`}
                size="large">{f.name}{foodChoice && foodChoice.index === index && <div className={classes.checkmark}><CheckMark /></div>}</Button>)}/>
          }
        </div>
      </Container>
    </>
  );
};

export default ChooseAdventure;

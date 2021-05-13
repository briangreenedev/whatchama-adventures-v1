import React from 'react';
import Header from "../../components/Header";
import {Container, Paper, Typography} from "@material-ui/core";
import {
  Timeline,
  TimelineConnector, TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from "@material-ui/lab";
import {
  Fastfood as FastfoodIcon,
  LabelTwoTone as LaptopMacIcon,
  Hotel as HotelIcon,
  Repeat as RepeatIcon
} from '@material-ui/icons';

const MyAdventurePage = () => {
  return (
    <div>
      <Header title="My Adventure" maxWidth="lg" />
      <Container maxWidth="lg">
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Today at 1:30 pm
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Typography variant="h6" component="h1">
                  Eat
                </Typography>
                <Typography>Because you need strength</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                10:00 am
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Typography variant="h6" component="h1">
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Typography variant="h6" component="h1">
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <Typography variant="h6" component="h1">
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </div>
  );
};

export default MyAdventurePage;
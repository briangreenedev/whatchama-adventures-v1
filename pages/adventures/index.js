import React from 'react';
import {Button, makeStyles, Paper} from "@material-ui/core";
import Header from '../../components/Header';
import AdventureCard from '../../components/AdventureCard';
import CarouselRow from '../../components/CarouselRow';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  main: {
    paddingTop: '100px',
    '& > div': {
      textAlign: 'center'
    },
    '& h1': {
      fontSize: '4rem'
    },
    '& > *': {
      marginBottom: '-12px'
    },
    '& h2': {
      paddingLeft: '90px'
    }
  },

}))

const Index = () => {
  const classes = useStyles();

  debugger;
  return (
    <div>
      <Header title="Adventures" maxWidth="lg" />
      <div className={classes.main}>
        <h2>Frontier Adventures</h2>
        <CarouselRow>
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            video="https://ak04-video-cdn.slidely.com/promoVideos/videos/60/51/60513492cba06d3e127e7104/preview.mp4?dv=1"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            video="https://ak04-video-cdn.slidely.com/promoVideos/videos/5b/06/5b06589776e0df436f7b23c9/preview.mp4"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            video="https://ak03-video-cdn.slidely.com/promoVideos/videos/5e/28/5e285a40861eda373b2c4bd3/preview.mp4?dv=1"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
        </CarouselRow>

        <h2>Western Adventures</h2>
        <CarouselRow>
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            video="https://ak04-video-cdn.slidely.com/promoVideos/videos/60/51/60513492cba06d3e127e7104/preview.mp4?dv=1"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            video="https://ak04-video-cdn.slidely.com/promoVideos/videos/5b/06/5b06589776e0df436f7b23c9/preview.mp4"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            video="https://ak03-video-cdn.slidely.com/promoVideos/videos/5e/28/5e285a40861eda373b2c4bd3/preview.mp4?dv=1"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
        </CarouselRow>
        <h2>Hobbett Adventures</h2>
        <CarouselRow>
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            video="https://ak04-video-cdn.slidely.com/promoVideos/videos/60/51/60513492cba06d3e127e7104/preview.mp4?dv=1"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            video="https://ak04-video-cdn.slidely.com/promoVideos/videos/5b/06/5b06589776e0df436f7b23c9/preview.mp4"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            video="https://ak03-video-cdn.slidely.com/promoVideos/videos/5e/28/5e285a40861eda373b2c4bd3/preview.mp4?dv=1"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/moon-shine-arch.jpg"
            title="Moonshine Arch"
            description="Moonshine Arch is a 1.4 mile heavily trafficked out and back trail located near Vernal, Utah that features beautiful wild flowers and is good for all skill levels."
          />
          <AdventureCard
            img="https://raw.githubusercontent.com/briangreenedev/whatchama-adventures-file-server/main/public/img/flaming-gorge-fishing-the-green.jpg"
            title="Flaming Gorge Fishing"
            description="The Flaming Gorge area has some of the best fishing in Utah with a wide variety of fish species. This area is great for all experience levels..."
          />
        </CarouselRow>
      </div>
    </div>
  );
};

export default Index;

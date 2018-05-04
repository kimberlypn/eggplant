import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Writing from './Writing';
import Watercolor from './Watercolor';
import Acrylic from './Acrylic';
import Kickstarter from './Kickstarter';
import ArtShows from './ArtShows';
import SpokenWord from './SpokenWord';
import Inquiries from './Inquiries';

export default function Main(props) {
  return (
    <Fragment>
      <Navigation />
      <Route path="/" exact={true} render={() =>
        <Home />
      } />
      <Route path="/gallery/writing" exact={true} render={() =>
          <Writing />
      } />
      <Route path="/gallery/watercolor" exact={true} render={() =>
          <Watercolor />
      } />
      <Route path="/gallery/acrylic" exact={true} render={() =>
          <Acrylic />
      } />
      <Route path="/projects/kickstarter" exact={true} render={() =>
          <Kickstarter />
      } />
      <Route path="/projects/artshows" exact={true} render={() =>
          <ArtShows />
      } />
      <Route path="/projects/spokenword" exact={true} render={() =>
          <SpokenWord />
      } />
    <Route path="/inquiries" exact={true} render={() =>
        <Inquiries />
      } />
    </Fragment>
  );
}

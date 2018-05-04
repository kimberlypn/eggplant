import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Navigation';

export default function Banner(props) {
  return (
    <div id="banner">
      <Navigation />
      <h1>AMMANY ART</h1>
      <img src="/images/banner.png" alt="banner" />
    </div>
  );
}

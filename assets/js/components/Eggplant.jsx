
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

import Navigation from './Navigation';

export default function run(root) {
  ReactDOM.render(<Eggplant />, root);
}

class Eggplant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigation />
    );
  }
}

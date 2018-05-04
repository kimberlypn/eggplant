import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Main';

export default function run(root) {
  ReactDOM.render(<Eggplant />, root);
}

class Eggplant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Main />
        </Fragment>
      </Router>
    );
  }
}


import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default function run(root) {
  ReactDOM.render(<Eggplant />, root);
}

class Eggplant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Ammany Art</div>;
  }
}

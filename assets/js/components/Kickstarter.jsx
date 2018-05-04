import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

export default function Kickstarter(props) {
  return (
    <div className="main">
      <div className="main-inner">
        <Row>
          <Col md="12">
            <h1>Kickstarter!</h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
          </Col>
          <Col md="6">
          </Col>
        </Row>
      </div>
    </div>
  );
}

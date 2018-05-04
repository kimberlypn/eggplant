import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

export default function Home(props) {
  return (
    <div className="main">
      <div className="main-inner">
        <Row>
          <Col md="12">
            <h1>Hello!</h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <p>
              My name is Ammany Ty, and I am a local Bostonian freelance writer
              and illustrator! I specialize in acrylic and watercolor paintings.
              Enjoy my gallery of work and check out my past and current
              projects! I'm currently working on an exciting children's book~
            </p>
            <p>
              I update regularly on ig!
              <br />
              @anemone_tea
            </p>
            <p>
              For commission and pricing information, please check out my
              inquiries page!
            </p>
            <p>
              Thanks!
              <br />
              Ammany
            </p>
          </Col>
          <Col md="6"></Col>
        </Row>
      </div>
    </div>
  );
}

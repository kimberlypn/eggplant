import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

export default function Home(props) {
  return (
    <div id="home">
      <Row>
        <Col md="6">
          <h1>Hello!</h1>
          <p>
            My name is Ammany Ty, and I am a local Bostonian freelance writer
            and illustrator! I specialize in acrylic and watercolor paintings.
            Enjoy my gallery of work and check out my past and current
            projects! I'm currently working on an exciting children's book~
          </p>
          <p>
            I update regularly on Instagram!
            <br />
            {/* Renders the Instagram icon */}
            <a href="https://www.instagram.com/anemone_tea/">
              <span className="social-icon">Ú</span>
              <span>@anemone_tea</span>
            </a>
          </p>
          <p>
            For commission and pricing information, please check out my
            <a href="/inquiries"> inquiries</a> page!
          </p>
          <p>
            Thanks!
            <br />
            Ammany
          </p>
        </Col>
        <Col md="6" id="profile-pic">
          <img src="/images/main-picture.jpg" alt="Picture of Me" />
        </Col>
      </Row>
    </div>
  );
}

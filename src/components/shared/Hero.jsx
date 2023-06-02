/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import HeroImage from "../../assets/Homepage-Hero.webp";
import HeroText from "./hero-text/HeroText";
import "./heroStyles.css"

function Hero() {
  return (
    <>
        <Container className="hero-section" id="heroSection">
          <Row>
            <Col md={4}>
              <HeroText showHomeHeading={true} />
            </Col>
            <Col md={6} className="mx-lg-auto">
              <img src={HeroImage} alt="hero homepage" className="img-fluid "/>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default Hero;

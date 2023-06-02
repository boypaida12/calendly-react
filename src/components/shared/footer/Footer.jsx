/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <FooterSocials />
          </Col>
          <Col md={7} className=" offset-md-1">
            <FooterLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;

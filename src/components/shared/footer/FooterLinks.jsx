/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import footerLinks from './footerData'

function FooterLinks() {
  return (
    <>
    <Container>
        <Row>
          {footerLinks.map((footerLink, index) => (
            <Col key={index} md={4} xs={6}>
              <p className="fw-bold">{footerLink.title}</p>
              {footerLink.links.map((link, i) => (
                <Link to={link.href} key={i} className="text-muted">
                  <p>{link.label}</p>
                </Link>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default FooterLinks
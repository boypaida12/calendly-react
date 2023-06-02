/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./herotxtStyles.css";
import { Button, Form } from "react-bootstrap";

function HeroText({
  showHomeHeading,
  showIndividualHeading,
  showTeamsHeading,
}) {
  return (
    <>
      {showHomeHeading && (
        <>
          <h1 className="display-3 fw-semibold">
            Easy <br /> scheduling <br /> <span>ahead</span>
          </h1>
          <p>
            Calendly is your hub for scheduling meetings professionaly and
            efficiently, eliminating the hassle of back-and-forth emails so you
            can get back to work
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Form.Text className="text-muted d-block">
                {`Create your free account. No credit card required`}.
              </Form.Text>
          </Form>
        </>
      )}
      {showIndividualHeading && (
        <h1 className="display-3 fw-semibold">
          The genius way to work <span>better</span>
        </h1>
      )}
      {showTeamsHeading && (
        <h1 className="display-3 fw-semibold">
          <span>Power up</span> your teams
        </h1>
      )}
    </>
  );
}

export default HeroText;

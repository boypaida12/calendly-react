/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row } from "react-bootstrap";
import StepsCard from "./StepsCard";

function Steps() {
  return (
    <>
      <Container>
        <Row className="my-5 pb-5">
          <StepsCard
            num="1"
            headingStart={"Create"}
            headingEnd={"simple rules"}
            paragraph={
              "Let Calendy know your availability preferences and it'll do the work for you"
            }
          />
          <StepsCard
            num="2"
            headingStart={"Share your"}
            headingEnd={"link"}
            paragraph={
              "Send guests your calendly link or embed it on your website"
            }
          />
          <StepsCard
            num="3"
            headingStart={"Get booked"}
            paragraph={
              "They pick a time and the event is added to your calendar"
            }
          />
        </Row>
      </Container>
    </>
  );
}

export default Steps;

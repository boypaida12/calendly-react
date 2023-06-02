/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Row } from "react-bootstrap";

function StepsCard({ num, headingStart, headingEnd, paragraph }) {
  return (
    <>
      <Col md={4}>
        <Row>
          <Col md={2}>
            <span
              className="px-2"
              style={{
                backgroundColor: "#006bff",
                borderRadius: "50%",
                color: "aliceblue",
              }}
            >
              {num}
            </span>
            <div
              style={{
                borderLeft: "1px solid #5053582a",
                height: "100%",
                transform: "translateX(11px)",
              }}
            ></div>
          </Col>
          <Col md={8}>
            <span className="d-block fs-5 fw-semibold text-black">
              {headingStart}
            </span>
            <span className="fs-5 fw-semibold text-black">{headingEnd}</span>
            <p className="mt-3 w-75" style={{ fontSize: "15px" }}>
              {paragraph}
            </p>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default StepsCard;

import React from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";

export default function Styling() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          backgroundColor: "#eeeeee",
          width: "50%",
        }}
      >
        Question #
        <Card>
          <Container>
            <Row>
              <Col className="bg-light border">Question</Col>
            </Row>
          </Container>
        </Card>
        <Container>
          <Row xs="2">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Col className="bg-light border">Option1</Col>
              <Col className="bg-light border">Option2</Col>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Col className="bg-light border">Option3</Col>
              <Col className="bg-light border">Option4</Col>
            </div>
          </Row>
        </Container>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <Button>Previous</Button>
            <Button>Next</Button>
          </div>
        </Container>
      </Card>
    </div>
  );
}

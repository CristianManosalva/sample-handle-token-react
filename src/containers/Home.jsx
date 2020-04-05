import React from "react";
import { Container, Row, Col } from "reactstrap";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Carousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export { Home };

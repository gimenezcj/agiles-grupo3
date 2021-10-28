import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";

function Reto({ setModalShow, title, description, bsPrefix }) {

  return (
    <Card
      style={{ width: "150px" }}
    >
      <Row>
        <Col md={3} className="align-self-center">
          <Image src={bsPrefix} thumbnail />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Col>
        <Col md={3} class="align-self-center">
          <Card.Footer>
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              Modificar
            </Button>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  )
}

export default Reto;

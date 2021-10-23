import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";

function Reto(props) {
  return (
    <div className="container ">
      <Card
        bg={"Dark".toLowerCase()}
        text={"Dark".toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "36rem" }}
        className="container-fluid w-50"
      >
        <Row>
          <Col md={3} className="align-self-center">
            <Image src={props.bsPrefix} thumbnail />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>
                {props.title}
              </Card.Title>
              <Card.Text>{props.description}</Card.Text>
              <Button variant="danger"><BsTrash /></Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Reto;

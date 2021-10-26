import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";

function Reto(props) {
  const [show, setShow] = React.useState(true);
  return show ? (
    <div className="container">
      <Card
        bg={"Dark".toLowerCase()}
        text={"Dark".toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "36rem" }}
        className="container-fluid w-50"
      >
        <Row>
          <Col md={3} class="align-self-center">
            <Image src={props.bsPrefix} thumbnail />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.description}</Card.Text>
            </Card.Body>
          </Col>
          <Col md={3} class="align-self-center">
            <Card.Footer>
              <Button
                variant="primary"
                onClick={() => props.setModalShow(true)}
              >
                Modificar
              </Button>{" "}
              <Button
                variant="danger"
                onClick={() => setShow(false)}
              >
                <BsTrash />
              </Button>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </div>
  ) : null;
}

export default Reto;

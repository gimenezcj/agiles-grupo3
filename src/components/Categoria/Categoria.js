import React from "react";
import { Card,Col,Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

function Categoria(props) {
  return (
    <div className="container mt-{3}">
      <Card  border="dark" style={{ width: '22rem',"borderRadius": "10px" }} rounded="true">
        <Card.Body>
            <Card.Img variant="top" src={props.imagen} height="250px" />
            <Card.Text style={{"color":"gray"}}>
              {props.fecha} - {props.estado}
            </Card.Text>
            <Card.Title>
              {props.titulo}
            </Card.Title>
            <Card.Text style={{"color":"gray"}}>Reto. {props.detalle}</Card.Text>
            <Row >
              <Col md={3}></Col>
              <Col md={6}>
                <div className="d-grid gap-2">
                <Link to={{pathname:"/retos", search:"categoria="+props.categoria }}>
                  <Button style={{"borderRadius": "60px"}} size="sm" variant="primary" rounded="true">Ver Retos</Button>
                </Link>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Categoria;

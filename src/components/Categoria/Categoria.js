import React from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

function Categoria(props) {
  return (
    <div className="container" class="mt-3">
      <Card border="dark" style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={props.imagen} height="250px" />
                    <Card.Body>
                        <Card.Title>{props.titulo}</Card.Title>
                        <Card.Text>
                        {props.texto}
                        </Card.Text>
                    <Button variant="primary">Ver Retos</Button>
                    </Card.Body>
                </Card>
    </div>
  );
}

export default Categoria;

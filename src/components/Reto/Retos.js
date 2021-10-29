import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Reto from './Reto';

function Retos({ retos }) {
  return (
    <Container className="my-5">
      <Row style={{ justifyContent: "center" }}>
        {retos.map((reto, i) => <Reto reto={reto} key={`reto-key-${i}`} />)}
      </Row>
    </Container>
  )
}

export default Retos;
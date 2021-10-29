import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { GrEdit } from 'react-icons/gr';

import imgCorrer from "../../images/Correr.png"
import imgCustom from "../../images/Custom.png"
import imgFisico from "../../images/Fisico.png"
import imgHealthy from "../../images/Healthy.png"
import imgMental from "../../images/Mental.png"

function Reto({ reto = {}, setModalShow }) {

  const getSrc = ({ categoria }) => (
    categoria == "Fisico" ? imgFisico :
      categoria == "Correr" ? imgCorrer :
        categoria == "Healthy" ? imgHealthy :
          categoria == "Mental" ? imgMental : imgCustom
  )

  return (
    <Col sm={4}>
      <Card className="my-1 border-primary border-5 border-bottom-0 border-end-0 border-top-0 shadow bg-body rounded"
        style={{ height: "125px" }}
      >
        <Row>
          <Col md={3} className="align-self-center">
            <Image width="80" height="80" src={getSrc({ categoria: reto?.categoria })} />
          </Col>
          <Col md={6}>
            <Card.Body style={{ textAlign: "left" }}>
              <Card.Title>{reto?.title}</Card.Title>
              <Card.Text style={{ color: "gray" }}>{reto?.description}</Card.Text>
            </Card.Body>
          </Col>
          <Col md={3} class="align-self-center">
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              <GrEdit />
            </Button>
          </Col>
        </Row>
      </Card>
    </ Col>
  )
}

export default Reto;

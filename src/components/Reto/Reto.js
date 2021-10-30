import React from "react";
import { Card, Col, Image, Button, Container } from "react-bootstrap";
import { GrEdit } from 'react-icons/gr';
import FormModificar from "../../components/FormModificar";

import "./Reto.css";

import imgCorrer from "../../images/Correr.png"
import imgCustom from "../../images/Custom.png"
import imgFisico from "../../images/Fisico.png"
import imgHealthy from "../../images/Healthy.png"
import imgMental from "../../images/Mental.png"

function Reto({ reto = {} }) {
  const [modalShow, setModalShow] = React.useState(false);

  const getSrc = ({ categoria }) => (
    categoria === "Fisico" ? imgFisico :
      categoria === "Correr" ? imgCorrer :
        categoria === "Healthy" ? imgHealthy :
          categoria === "Mental" ? imgMental : imgCustom
  )

  const capitalize = (str) => str.toLowerCase().replace(/^\w/,
    (c) => c.toUpperCase()
  );

  return (
    <Col sm={4}>
      <Card className="my-1 border-primary border-5 border-bottom-0 \
      border-end-0 border-top-0 shadow bg-body rounded centrar" style={{ height: "125px" }}>
        <Container fluid className="p-0">
          <div className="imagen">
            <Image width="80" height="80" src={getSrc({ categoria: reto?.categoria })} />
          </div>
          <Card.Body className="px-0 body" style={{ textAlign: "left" }}>
            <Card.Title>{capitalize(reto?.title)}</Card.Title>
            <Card.Text style={{ color: "gray" }}>{capitalize(reto?.description)}</Card.Text>
          </Card.Body>
          <div className="footer">
            <Button
              id="editButton"
              variant="primary"
              onClick={() => setModalShow(true)}
              className="rounded-circle"
            >
              <GrEdit />
            </Button>
          </div>
        </Container>
      </Card>

      <FormModificar
        reto={reto}
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </Col>
  )
}

export default Reto;

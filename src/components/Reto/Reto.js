import React, { useEffect, useState } from "react";
import { Card, Col, Image, Button, Container } from "react-bootstrap";
import { GrEdit,GrTrash } from "react-icons/gr";
import FormModificar from "../../components/FormModificar";
import FormEliminar  from "../../components/ModalEliminar";
import * as database from '../../data/repository/RetoRepository';

import "./Reto.css";

import imgCorrer from "../../images/Correr.png";
import imgCustom from "../../images/Custom.png";
import imgFisico from "../../images/Fisico.png";
import imgHealthy from "../../images/Healthy.png";
import imgMental from "../../images/Mental.png";

function Reto({ reto = {},eliminar=()=>{}}) {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowEliminar, setModalShowEliminar] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const date1 = reto.dailyTimestamp;
    const date2 = new Date().getTime();
    const OneDay = 1 * 24 * 60 * 60 * 1000;
    const diffTime = Math.abs(date2 - date1);
    setComplete(diffTime < OneDay);
  }, []);

  const getSrc = ({ categoria }) =>
    categoria === "Fisico"
      ? imgFisico
      : categoria === "Correr"
        ? imgCorrer
        : categoria === "Healthy"
          ? imgHealthy
          : categoria === "Mental"
            ? imgMental
            : imgCustom;

  const updateReto = () => {
    if (!complete) {
      reto.dailyTimestamp = new Date().getTime()
      database.updateReto(reto);
    } else {
      reto.dailyTimestamp = new Date().getTime() - (1000 * 60 * 60 * 24 * 5)
      database.updateReto(reto);
    }
    setComplete(!complete);
  };

  const capitalize = (str) =>
    str.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

  return (
    <Col sm={5}>
      <Card
        className="my-1 border-primary border-5 border-bottom-0 \
      border-end-0 border-top-0 shadow bg-body rounded centrar"
        style={{ height: "125px" }}
      >
        <Container fluid className="p-0">
          <div className="imagen">
            <Image
              width="80"
              height="80"
              src={getSrc({ categoria: reto?.categoria })}
            />
          </div>
          <Card.Body className="px-0 body" style={{ textAlign: "left" }}>
            <Card.Title>{capitalize(reto?.title)}</Card.Title>
            <Card.Text style={{ color: "gray" }}>
              {capitalize(reto?.description)}
            </Card.Text>
            <p
              className={complete ? "completo" : "incompleto"}
              onClick={() => {
                updateReto();
              }}
            >
              {complete ? "Completo" : "Incompleto"}
            </p>
          </Card.Body>
          <div className="footer">

            <Button
              id="editButton"
              variant="primary"
              onClick={() => setModalShow(true)}
              className="rounded-circle mx-2"
            >
              <GrEdit />
            </Button>
            <Button
              id="removeButton"
              variant="danger"
              className="rounded-circle mx-2"
              onClick={() => setModalShowEliminar(true)}
            >
            <GrTrash/>
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

      <FormEliminar
        eliminar={eliminar}
        reto={reto}
        show={modalShowEliminar}
        onHide={() => setModalShowEliminar(false)}
        setModalShow={setModalShowEliminar}
      />
    </Col>
  );
}

export default Reto;

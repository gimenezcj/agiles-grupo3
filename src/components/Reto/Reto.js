import React, { useEffect, useState } from "react";
import { Card, Col, Image, Button, Container } from "react-bootstrap";
import { GrEdit, GrTrash } from "react-icons/gr";
import FormModificar from "../../components/FormModificar";
import FormEliminar from "../../components/ModalEliminar";
import * as databaseReto from '../../data/repository/RetoRepository';
import * as databaseUser from '../../data/repository/UserRepository';

import "./Reto.css";

import imgCorrer from "../../images/Correr.png";
import imgCustom from "../../images/Custom.png";
import imgFisico from "../../images/Fisico.png";
import imgHealthy from "../../images/Healthy.png";
import imgMental from "../../images/Mental.png";

function Reto({ reto = {}, eliminar = () => { }, page }) {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowEliminar, setModalShowEliminar] = useState(false);
  const [complete, setComplete] = useState(false);
  const [haciendo, setHaciendo] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const date1 = reto.dailyTimestamp;
    const date2 = new Date().getTime();
    const OneDay = 1 * 24 * 60 * 60 * 1000;
    const diffTime = Math.abs(date2 - date1);
    setComplete(diffTime < OneDay);

    async function handleUserFetch() {

      //      let user = await databaseUser.getUserById(id);

      const coincidence = user?.retoList && user?.retoList.includes(reto.id);

      if (coincidence) {
        setHaciendo(true);
      } else {
        setHaciendo(false);
      }
    }
    handleUserFetch();
  }, [reto]);

  const mireto = () => {
    return user?.retoList
      ? user?.retoList.filter((r) => r == reto.id).length > 0 && reto.userId == user.id
      : [];
  }




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
      databaseReto.updateReto(reto);
    } else {
      reto.dailyTimestamp = new Date().getTime() - (1000 * 60 * 60 * 24 * 5)
      databaseReto.updateReto(reto);
    }
    setComplete(!complete);
  };

  // const assignRetoToUser = async ({ retoId = "" }) => {
  //   let { id } = JSON.parse(localStorage.getItem("user"));
  //   let user = await databaseUser.getUserById(id);

  //   const coincidences = user?.retoList ? user?.retoList.filter(reto => reto.id === retoId) : [];

  //   if (coincidences.length === 1) {
  //     // si hay coincidencias hay que eliminarlo de la lista
  //     // await databaseUser.updateUser(user);
  //     // setHaciendo(false);
  //   } else {
  //     user?.retoList.push(retoId);
  //     await databaseUser.updateUser(user);
  //     setHaciendo(true);
  //   }
  // };

  const capitalize = (str) =>
    str.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

  return (
    <Col sm={5}>
      <Card
        className="my-1 border-primary border-5 border-bottom-0 \
      border-end-0 border-top-0 shadow bg-body rounded centrar"
        style={{ height: "140px" }}
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
            <Card.Title style={{textOverflow: "ellipsis", maxWidth:"175px", maxLines: "1", overflow: "hidden", whiteSpace: "nowrap"}}>{capitalize(reto?.title)}</Card.Title>
            <Card.Text style={{ color: "gray" }}>
              {capitalize(reto?.description)}
            </Card.Text>
            {(reto.userId === undefined || reto.userId == "") && page === 'Retos' ? "" :
              <p
                className={complete ? "completo" : "incompleto"}
                onClick={() => {
                  updateReto();
                }}
              >
                {complete ? "Completo" : "Incompleto"}
              </p>}
          </Card.Body>
          <div className="footer">
            <div className="button-container">
              {mireto() ?
                <Button
                  id="editButton"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                  className="rounded-circle"
                >
                  <GrEdit />
                </Button> : ""}
              {mireto() ?
                <Button
                  id="removeButton"
                  variant="danger"
                  className="rounded-circle"
                  onClick={() => setModalShowEliminar(true)}
                >
                  <GrTrash />
                </Button> : ""}
              {!mireto() ?
                <Button
                  id="action"
                  variant={haciendo ? "danger" : "primary"}
                  style={{marginLeft: "20px"}}
                  onClick={() => { eliminar(reto); setHaciendo(!haciendo); }} //assignRetoToUser({ retoId: reto?.id })}
                >
                  {haciendo ? "Abandonar reto" : "Hacer reto"}
                </Button> : ""}
            </div>
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

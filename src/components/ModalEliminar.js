import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as database from "../data/repository/RetoRepository";

function FormEliminar({ eliminar,show, onHide, setModalShow, reto }) {

  const submit = async (e) => {
    e.preventDefault();
    console.log("reto: eliminado fisicamente");
    database.deleteRetoById(reto.id);
    eliminar(reto);
    setModalShow(false);
  };

  return (
    <Modal
      show={show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Eliminar el reto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Estas seguro de eliminar el reto?
        <Form onSubmit={(e) => submit(e)}>

          <Modal.Footer>
            <Button variant="danger" type="submit">
              Si, eliminar!
            </Button>
            <Button variant="primary" onClick={onHide}>
              No eliminar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormEliminar;

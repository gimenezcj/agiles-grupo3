import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as database from "../data/repository/RetoRepository";

function FormEliminar({ lista,show, onHide, setModalShow, reto }) {
  const [retoActual, setRetoActual] = React.useState({});

  const submit = async (e) => {
    e.preventDefault();

  //  database.deleteRetoById(reto.id);
//    lista=lista.splice(lista.indexOf(reto), 1)

    setModalShow(false);
  };

  useEffect(() => {
    setRetoActual(null);
//    lista=lista.splice(lista.indexOf(reto), 1);
  });

  const handleChange = (name, value) => {
    Object.keys(retoActual).forEach((key) => {
      if (key === name) {
        retoActual[key] = value;
      }
    });
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

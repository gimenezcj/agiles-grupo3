import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function FormModificar({
  show,
  onHide,
  setTitle,
  setDescription,
  setModalShow,
}) {
  const [titulo, setTitulo] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const submit = (e) => {
    e.preventDefault();

    setTitle(titulo);
    setDescription(descripcion);
    setModalShow(false);
  };
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Modificar Reto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => submit(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Descripción"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
          <Modal.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        <Button variant="danger" onClick={onHide}>Close</Button>
      </Modal.Footer>
        </Form>
      </Modal.Body>
     
    </Modal>
  );
}

export default FormModificar;

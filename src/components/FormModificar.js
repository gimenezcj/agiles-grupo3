import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as database from "../data/repository/RetoRepository";

function FormModificar({ show, onHide, setModalShow }) {
  const [titulo, setTitulo] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [inicio, setInicio] = React.useState("");
  const [fin, setFin] = React.useState("");
  const [categoria, setCategoria] = React.useState("");

  const submit = async (e) => {
    e.preventDefault();

    var reto = {
      id: "1",
      title: titulo,
      description: descripcion,
      categoria: categoria,
      fechaInic: inicio,
      fechFin: fin,
      isConAmigos: false,
      dailyTimestamp: 0,
    };

    database.updateReto(reto);

    setModalShow(false);
  };

  useEffect(() => {
    database.getRetos().then((retos) => console.log(retos));
  }, []);
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edita tu reto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => submit(e)}>
          <Form.Group className="mb-3">
            <div class="row d-flex justify-content-center">
              <div class="col-md-10">
                <div class="form-group">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      onChange={(e) => setTitulo(e.target.value)}
                    />
                    <label for="inputTitle">Titulo</label>
                  </div>
                </div>
                <div class="form-group">
                  <select class="form-select mb-3">
                    <option selected>Amigos</option>
                    <option value="1">Amigo 1</option>
                    <option value="2">Amigo 2</option>
                    <option value="3">Amigo 3</option>
                  </select>
                </div>
                <div class="form-group">
                  <select
                    class="form-select mb-3"
                    onChange={(e) => setCategoria(e.target.value)}
                  >
                    <option selected>Categorias</option>
                    <option value="Leer">Leer</option>
                    <option value="Correr">Correr</option>
                    <option value="Escribir">Escribir</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <div class="input-group">
                    <input
                      class="form-control py-2 border-right-0 border"
                      type="date"
                      onChange={(e) => setInicio(e.target.value)}
                    />
                    <input
                      class="form-control py-2 border-right-0 border"
                      type="date"
                      onChange={(e) => setFin(e.target.value)}
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      id="floatingTextarea"
                      onChange={(e) => setDescripcion(e.target.value)}
                    ></textarea>
                    <label for="floatingTextarea">Descripcion</label>
                  </div>
                </div>
              </div>
            </div>
          </Form.Group>

          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="danger" onClick={onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormModificar;

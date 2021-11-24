import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { updateUser, getUserById, getUsers } from "../data/repository/UserRepository";
import * as database from "../data/repository/RetoRepository";

function FormModificar({ show, onHide, setModalShow, reto }) {
  const [retoActual, setRetoActual] = React.useState({});
  const [users, setUsers] = React.useState([]);
  let user=JSON.parse(localStorage.getItem("user"));

  const submit = async (e) => {
    e.preventDefault();

    database.updateReto(retoActual);

    if (retoActual.isConAmigos !== false) {
      getUserById(retoActual.isConAmigos).then((amigo)=>{
      amigo.retoList.push(retoActual.id);
      updateUser(amigo)
      });
    }

    setModalShow(false);
  };

  useEffect(() => {
    setRetoActual(reto);
  },[]);

  useEffect(() => {
    getUsers().then(data => {setUsers(data.filter(u=>u.id!=user.id));}); 
 }, [])

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
                      defaultValue={reto.title}
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      onChange={(e) => handleChange("title", e.target.value)}
                    />
                    <label for="inputTitle">Titulo</label>
                  </div>
                </div>
                <div class="form-group">
                <select
                  name="amigo"
                  onChange={(e) => e.target.value==="-1" ? handleChange("isConAmigos", false) : handleChange("isConAmigos", e.target.value)}
                  className="form-select  mb-3">
                  <option selected>
                    Amigos
                  </option>
                  <option value="-1">
                    Solo
                  </option>
                  {users.map(u =>
                    <option key={u.id} value={u.id}>{u.name}</option>
                  )}
                </select>
                </div>
                <div class="form-group">
                  <select
                    class="form-select mb-3"
                    onChange={(e) => handleChange("categoria", e.target.value)}
                  >
                    <option selected>Categorias</option>
                    <option
                      selected={reto.categoria === "Fisico"}
                      value="Fisico"
                    >
                      Fisico
                    </option>
                    <option
                      selected={reto.categoria === "Correr"}
                      value="Correr"
                    >
                      Correr
                    </option>
                    <option
                      selected={reto.categoria === "Mental"}
                      value="Mental"
                    >
                      Mental
                    </option>
                    <option
                      selected={reto.categoria === "Healthy"}
                      value="Healthy"
                    >
                      Healthy
                    </option>
                    <option
                      selected={reto.categoria === "Custom"}
                      value="Custom"
                    >
                      Custom
                    </option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <div class="input-group">
                    <input
                      defaultValue={reto.fechaInic}
                      class="form-control py-2 border-right-0 border"
                      type="date"
                      onChange={(e) =>
                        handleChange("fechaInic", e.target.value)
                      }
                    />
                    <input
                      defaultValue={reto.fechFin}
                      class="form-control py-2 border-right-0 border"
                      type="date"
                      onChange={(e) => handleChange("fechFin", e.target.value)}
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-floating mb-3">
                    <textarea
                      defaultValue={reto.description}
                      class="form-control"
                      id="floatingTextarea"
                      onChange={(e) =>
                        handleChange("description", e.target.value)
                      }
                    ></textarea>
                    <label for="floatingTextarea">Descripcion</label>
                  </div>
                </div>
              </div>
            </div>
          </Form.Group>

          <Modal.Footer>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
            <Button variant="danger" onClick={onHide}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormModificar;

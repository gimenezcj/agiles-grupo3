import StyledNavbar from "../components/Navbar/StyledNavbar";
import * as database from "../data/repository/RetoRepository";
import {Reto} from "../data/model/Reto";
import React, { useState } from "react";
import Spinner from 'react-bootstrap/Spinner'
import * as database2 from '../data/repository/UserRepository';

function Agregar() {
  const [showWait, setshowWait] = React.useState(false)
  const [form, setForm] = useState({
    titulo: "",
    amigo: -1,
    categoria: "",
    fechaIn: "",
    fechaFn: "",
    descripcion: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
//    const {titulo,descripcion,categoria,fechaIn,fechaFn,descripcion,amigo}= form;
setshowWait(true);
 database.addReto( new Reto(form.titulo,form.descripcion,form.categoria,form.fechaIn,form.fechaFn, form.amigo>0)).then(()=>{setshowWait(false);window.location = '/';});

 
 //console.log(form.amigo);
//    setForm({
//      titulo: "",
//      amigo: "",
//      categoria: "",
//      fechaIn: "",
//      fechaFn: "",
//      descripcion: "",
//    });
  };

  return (
    <div>
      <StyledNavbar />
      <div className="Agregar">
        <br></br>
        <div class="row d-flex justify-content-center mb-3">
          <div class="col-md-3">
            <h2 class="lead">
              <b>AGREGA TU RETO!!</b>
            </h2>
            <p class="lead">
              Deberas completar los datos para ingresar un nuevo reto.
            </p>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-3">
            <form>
              <div class="form-group">
                <div class="form-floating mb-3">
                  <input
                    value={form.titulo}
                    name="titulo"
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    onChange={(e) => handleChange(e)}
                  />
                  <label for="inputTitle">Titulo</label>
                </div>
              </div>
              <div class="form-group">
                <select
                  name="amigo"
                  onChange={(e) => handleChange(e)}
                  class="form-select  mb-3"
                >
                  <option selected value="-1">Amigo</option>
                  <option value="1">Fernando</option>
                  <option value="2">Francisco</option>
                  <option value="3">Pepe</option>
                </select>
              </div>
              <div class="form-group">
                <select
                  name="categoria"
                  onChange={(e) => handleChange(e)}
                  class="form-select mb-3"
                >
                  <option selected>Categoria</option>
                  <option selected={form.categoria === "Correr"} value="Correr">
                    Correr
                  </option>
                  <option
                    selected={form.categoria === "Mental"}
                    value="Mental"
                    value="Mental"
                  >
                    Mental
                  </option>
                  <option
                    selected={form.categoria === "Healthy"}
                    value="Healthy"
                    value="Healthy"
                  >
                    Healthy
                  </option>
                  <option
                    selected={form.categoria === "Fisico"}
                    value="Fisico"
                    value="Fisico"
                  >
                    Fisico
                  </option>
                  <option
                    selected={form.categoria === "Custom"}
                    value="Custom"
                    value="Custom"
                  >
                    Custom
                  </option>
                </select>
              </div>
              <div class="form-group mb-3">
                <div class="input-group">
                  <input
                    name="fechaIn"
                    class="form-control py-2 border-right-0 border"
                    type="date"
                    onChange={(e) => handleChange(e)}
                    value={form.fechaIn}
                  />
                  <input
                    name="fechaFn"
                    class="form-control py-2 border-right-0 border"
                    type="date"
                    onChange={(e) => handleChange(e)}
                    value={form.fechaFn}
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="form-floating mb-3">
                  <textarea
                    name="descripcion"
                    class="form-control"
                    id="floatingTextarea"
                    onChange={(e) => handleChange(e)}
                    value={form.descripcion}
                  ></textarea>
                  <label for="floatingTextarea">Descripcion</label>
                </div>
              </div>
              <div class="row d-flex justify-content-center mb-3">

                {showWait?
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>: <button onClick={(e) => onSubmit(e)} class="btn btn-primary">
                  Agregar
                </button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agregar;

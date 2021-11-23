import StyledNavbar from "../components/Navbar/StyledNavbar";
import * as database from "../data/repository/RetoRepository";
import {updateUser, getUserById,getUsers} from "../data/repository/UserRepository";
import { Reto } from "../data/model/Reto";
import React, { useState ,useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function Agregar() {
  let user=JSON.parse(localStorage.getItem("user"));
  if(user.retoList===undefined) user.retoList=[];
  const [showWait, setshowWait] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [form, setForm] = useState({
    titulo: "",
    amigo: -1,
    categoria: "",
    fechaIn: "",
    fechaFn: "",
    isDefault: false,
    descripcion: "",
  });

  useEffect(() => {
     getUsers().then(data => {setUsers(data.filter(u=>u.id!=user.id));}); //obtenemos la lista de usuarios y le quitamos el usuario actual.
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setshowWait(true);
    console.log(form.amigo);
    database.addReto(
      new Reto(user.id,form.titulo, form.descripcion, form.categoria, form.fechaIn, form.fechaFn, form.amigo !=-1, form.isDefault)
    ).then((retoId) => {
      //actualizamos el reto en la lista del retos del usuario actual
      user.retoList.push(retoId);
      localStorage.removeItem('user');
      localStorage.setItem("user", JSON.stringify(user));
      updateUser(user).then(()=>{console.log("usuario actualizado");}).catch((error) => {console.log("Error al actualizar.");});
      if(form.amigo!=-1){console.log("actualizando amigo");
        //si seleccionamos un amigo, colocamos el reto en su lista de retos y actualizamos
        getUserById(form.amigo).then((u)=>{
          if(u.retoList===undefined) u.retoList=[];
          u.retoList.push(retoId);
          updateUser(u).then(()=>{console.log("amigo actualizado");}).catch((error) => {console.log("Error al actualizar amigo.");});
          setshowWait(false);
          window.location = '/';
        });
      } else {
        setshowWait(false);
        window.location = '/';
      }
    });
  };
  console.log(users);
  return (
    <div>
      <StyledNavbar />
      <div className="Agregar">
        <br></br>
        <div className="row d-flex justify-content-center mb-3">
          <div className="col-md-3">
            <h2 className="lead">
              <b>AGREGA TU RETO!!</b>
            </h2>
            <p className="lead">
              Deberas completar los datos para ingresar un nuevo reto.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <form>
              <div className="form-group">
                <div className="form-floating mb-3">
                  <input
                    value={form.titulo}
                    name="titulo"
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    onChange={(e) => handleChange(e)}
                  />
                  <label for="inputTitle">Titulo</label>
                </div>
              </div>
              <div className="form-group">
                <select
                  name="amigo"
                  onChange={(e) => handleChange(e)}
                  className="form-select  mb-3"
                >
                  <option selected value="-1">
                    Solo,sin amigos
                  </option>
                  {users.map(u =>
                    <option key={u.id} value={u.id}>{u.name}</option>
                  )}
                </select>
              </div>
              <div className="form-group">
                <select
                  name="categoria"
                  onChange={(e) => handleChange(e)}
                  className="form-select mb-3"
                >
                  <option selected>Categoria</option>
                  <option selected={form.categoria === "Correr"} value="Correr">
                    Correr
                  </option>
                  <option selected={form.categoria === "Mental"} value="Mental">
                    Mental
                  </option>
                  <option
                    selected={form.categoria === "Healthy"}
                    value="Healthy"
                  >
                    Healthy
                  </option>
                  <option
                    selected={form.categoria === "Fisico"}
                    value="Fisico"
                  >
                    Fisico
                  </option>
                  <option
                    selected={form.categoria === "Custom"}
                    value="Custom"
                  >
                    Custom
                  </option>
                </select>
              </div>
              <div className="form-group mb-3">
                <div className="input-group">
                  <input
                    name="fechaIn"
                    className="form-control py-2 border-right-0 border"
                    type="date"
                    onChange={(e) => handleChange(e)}
                    value={form.fechaIn}
                  />
                  <input
                    name="fechaFn"
                    className="form-control py-2 border-right-0 border"
                    type="date"
                    onChange={(e) => handleChange(e)}
                    value={form.fechaFn}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-floating mb-3">
                  <textarea
                    name="descripcion"
                    className="form-control"
                    id="floatingTextarea"
                    onChange={(e) => handleChange(e)}
                    value={form.descripcion}
                  ></textarea>
                  <label for="floatingTextarea">Descripcion</label>
                </div>
              </div>
              <div class="row d-flex justify-content-center mb-3">
                {showWait ?
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner> : <button onClick={(e) => onSubmit(e)} class="btn btn-primary">
                    Agregar
                  </button>}
              </div>
            </form>
          </div>
        </div >
      </div >
    </div >
  );
}

export default Agregar;

import React, { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Reto from "../components/Reto/Reto"
import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";
import { Row } from 'react-bootstrap'
import { getRetos } from "../data/repository/RetoRepository";
import { Switch } from "antd";
import { auth } from "../data/data_source/firebase-config";
import {getRetoById,getRetoByIds} from "../data/repository/RetoRepository";
import {updateUser, getUserById} from "../data/repository/UserRepository";

function Home() {

  let user=JSON.parse(localStorage.getItem("user"));
  const [habitos, setHabitos] = useState([]);
  const [toggle, setToggle] = useState(false);
  let retos=[];

  useEffect(() => {
     getRetoByIds(user?.retoList ? user?.retoList : []).then(data => {setHabitos(data);console.log(data);});

  }, [])

  const filterRetos = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  let eliminar = (reto) => {                                //Solo elimino el reto si yo lo cree
    setHabitos(habitos.filter(i => i !== reto));            //Se elimina el reto de la lista visible
    user.retoList=user.retoList.filter((r)=>r!=reto.id);    //Se elimina el reto de la lista de retos del usuario: user.retoList
    localStorage.removeItem('user');                        //Eliminar al usuario del localStorage
    localStorage.setItem("user", JSON.stringify(user));     //insertear usuario al localStorage
    updateUser(user).then(()=>{console.log("usuario actualizado");}).catch((error) => {console.log("Error al actualizar.");}); //Actualizar usuario en firebase
  };

  const logout = () => {
    auth.signOut();
    localStorage.setItem('user', false)
    window.location.href = "/";
  };

  return (
    <Fragment>
      <StyledNavbar />
      <button onClick={logout}>Sign Out</button>
      <Container className="text-center">
        {
          habitos.length === 0
            ? <p className="mt-5">Agrega un habito para empezar!</p>
            : (<Container className="my-5">
              <div className="mt-5 my-5" >
                <label className="mx-4">Retos Solitario/Grupales</label>
                <Switch onClick={filterRetos} />
              </div>
              <Row style={{ justifyContent: "center" }}>

                {toggle ? (habitos.map((reto, i) => reto.isConAmigos ? <Reto reto={reto} key={`reto-key-${i}`} eliminar={eliminar} page='Home'/> : null))
                  : (habitos.map((reto, i) => reto.isConAmigos === false ? <Reto reto={reto} key={`reto-key-${i}`} eliminar={eliminar} page='Home'/> : null))}
              </Row>
            </Container>)
        }
        <StyledButton />
      </Container>


    </Fragment>
  );
}

export default Home;

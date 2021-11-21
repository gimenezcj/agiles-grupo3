import React, { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Reto from "../components/Reto/Reto"
import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";
import { Row } from 'react-bootstrap'
import { getRetos } from "../data/repository/RetoRepository";
import {Switch} from "antd";
import { auth } from "../data/data_source/firebase-config";

function Home() {
  
  const [habitos, setHabitos] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getRetos().then(data => setHabitos(data));
  }, [])

  const filterRetos = () =>{
    toggle ? setToggle(false) : setToggle(true);
  }

  let eliminar=(reto)=>{
    setHabitos(habitos.filter(i=>i!=reto));
  };

  const logout = () => {
    auth.signOut();
    localStorage.setItem('user', false)
    window.location.href ="/";

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
                  <Switch onClick={filterRetos}/>
              </div>
              <Row style={{ justifyContent: "center" }}>

                {toggle ? (habitos.map((reto, i) => reto.isConAmigos ? <Reto reto={reto}  key={`reto-key-${i}`} eliminar={eliminar}/> : null))
                : (habitos.map((reto, i) => reto.isConAmigos===false ? <Reto reto={reto}  key={`reto-key-${i}`} eliminar={eliminar}/> : null))}
              </Row>
            </Container>)
        }
        <StyledButton />
      </Container>


    </Fragment>
  );
}

export default Home;

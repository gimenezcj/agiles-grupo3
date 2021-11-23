import React, { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import StyledNavbar from "../components/Navbar/StyledNavbar";
import { Row } from 'react-bootstrap'
import { getRetos } from "../data/repository/RetoRepository";
import {updateUser} from "../data/repository/UserRepository";
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from "react-router-dom";
import VerReto from "../components/Reto/verReto"
import Reto from "../components/Reto/Reto"


function Retos() {

  const [habitos, setHabitos] = useState([]);
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")));
  const { search } = useLocation();

  useEffect(() => {
    getRetos().then(data => {setHabitos(data);console.log(data);});


  }, [])

  const retoAsignado=(reto)=>{
    return user.retoList.filter((r)=>r==reto.id).length>0;
  }

  const eliminar=(reto)=>{
    if (retoAsignado(reto)) {
      console.log("desasignar reto");
      user.retoList=user.retoList.filter((r)=>r!=reto.id);
    } else {
      console.log("asignar reto");
      user.retoList.push(reto.id);
    }
    localStorage.removeItem('user');                        //Eliminar al usuario del localStorage
    localStorage.setItem("user", JSON.stringify(user));     //insertear usuario al localStorage
    updateUser(user).then(()=>{console.log("usuario actualizado");}).catch((error) => {alert("Error al actualizar.");}); //Actualizar usuario en firebase
    setUser(user);
  }
  let query = React.useMemo(() => new URLSearchParams(search), [search]);
  let categoria = query.get("categoria");

  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center">
        {
          <Container className="my-5">
            <Row style={{ justifyContent: "center" }}>
              {
                habitos.filter((reto) => reto.categoria === categoria && (reto.userId===undefined||reto.userId=="")).map((reto, i) => <Reto reto={reto} key={`reto-key-${i}`} eliminar={eliminar} page="Retos"/>)
              }
            </Row>
          </Container>
        }
        <Link to="/categorias">
          <Button style={{ "borderRadius": "50px" }} size="xl" variant="primary" rounded="true">Volver</Button>
        </Link>
      </Container>
    </Fragment>
  );
}

export default Retos;

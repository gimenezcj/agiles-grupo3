import { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Reto from "../components/Reto/Reto"
import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";
import { Row } from 'react-bootstrap'
import { getRetos } from "../data/repository/RetoRepository";
import {Switch} from "antd";

function Home() {
  const [habitos, setHabitos] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getRetos().then(data => setHabitos(data));
  }, [])

  const filterRetos = () =>{
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center">
        <div className="mt-5">
        <label className="mx-4">Retos Solitario/Grupales</label>
        <Switch onClick={filterRetos}/>
        </div>
        {
          habitos.length === 0
            ? <p className="mt-5">Agrega un habito para empezar!</p>
            : (<Container className="my-5">
              <Row style={{ justifyContent: "center" }}>

                {toggle ? (habitos.map((reto, i) => reto.isConAmigos ? <Reto reto={reto} key={`reto-key-${i}`}/> : null)) 
                : (habitos.map((reto, i) => reto.isConAmigos===false ? <Reto reto={reto} key={`reto-key-${i}`}/> : null))}
              </Row>
            </Container>)
        }
        <StyledButton />
      </Container>
    </Fragment>
  );
}

export default Home;

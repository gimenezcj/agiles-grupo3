import { useState,useEffect,Fragment } from "react";
import Container from "react-bootstrap/Container";
import Reto from "../components/Reto"
import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";
import * as database from '../data/repository/RetoRepository';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'


function Home() {
  // habitos harcodeados
  const [habitos,setHabitos] = useState([]);

 useEffect(()=>{
    database.getRetos().then(data=>setHabitos(data));
  },[])

  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center">
      {habitos.length === 0 ? (
          <Fragment>
            
            <p className="mt-5">Agrega un habito para empezar!</p>
            <StyledButton />
          </Fragment>
        ) : (
          

            <Container className="mt-5">
              <Row>
              {habitos.map(reto =><Col>
                                    <Reto
                                    title={reto.title}
                                    categoria={reto.categoria}
                                    /></Col>)}
              </Row>
            
            </Container>
        )}
   
      </Container>
    </Fragment>
  );
}

export default Home;

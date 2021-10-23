import { Fragment } from "react";
import Container from "react-bootstrap/Container";

import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";
import * as database from '../data/repository/RetoRepository';
import Reto from '../data/model/Reto'

function Home() {
  // habitos harcodeados
  const habitos = [];
  database.getRetos().then(retos => console.log(retos));
  database.getRetoById("F352XJLds9UshCFckUPJ").then(reto => console.log(reto))
  //database.addReto(Reto("asdda","matematicas","resolver tareas"))
  //database.deleteRetoById("QTxuYGFSzQHp5luKRqKX")
  //database.updateReto(Reto("BYlRREKRfldbdb4LzZ4e","matematicasupdatee","resolver tareasuptodeito"))
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
          <Fragment>{habitos.map((h) => h?.text)}</Fragment>
        )}
   
      </Container>
    </Fragment>
  );
}

export default Home;

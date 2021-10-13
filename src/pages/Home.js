import { Fragment } from "react";
import Container from "react-bootstrap/Container";

import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";

import Reto from "../components/Reto";

function Home() {

  // habitos harcodeados
  const habitos = [
    {text:<Reto description ="Realiza actividad fisica durante 30 minutos" bsPrefix="https://superiorcads.edu.ar/imgd/certificacion-running-maraton-fondo-medio-fondo-trail-2-019334.jpg" title="Trota"/>},
    {text:<Reto description ="Prepara el almuerzo saludable compuesto de..." bsPrefix="https://static1.abc.es/media/bienestar/2021/04/04/batchcoocking-kEBB--620x349@abc.jpg" title="Cocina Saludable"/>}
  ];






  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center">
        {habitos.length === 0
          ? (
            <Fragment>
              <p className="mt-5" >Agrega un habito para empezar!</p>
              <StyledButton />
            </Fragment>
          )
          : (
            <Fragment>
              {habitos.map((h) => h?.text)}
            </Fragment>
          )
        }
      </Container>
    </Fragment>
  );
}

export default Home;

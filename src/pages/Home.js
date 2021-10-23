import { Fragment } from "react";
import Container from "react-bootstrap/Container";

import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";
import * as database from '../data/repository/repositoryImp';

function Home() {
  // habitos harcodeados
  const habitos = [];
  var retos = database.getRetos()
  console.log(retos);

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

import { Fragment } from "react";
import Container from "react-bootstrap/Container";

import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";

function Home() {
  // habitos harcodeados
  const habitos = [];

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

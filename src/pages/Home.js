import { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import Retos from "../components/Reto/Retos";
import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";

import { getRetos } from "../data/repository/RetoRepository";

function Home() {
  const [retos, setRetos] = useState([]);

  useEffect(() => {
    getRetos().then(retos =>
      setRetos(retos)
    )
  }, [])

  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center">
        {
          retos.length === 0
            ? <p className="mt-5">Agrega un habito para empezar!</p>
            : <Retos retos={retos} />
        }
        <StyledButton />
      </Container>
    </Fragment>
  );
}

export default Home;

import { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Reto from "../components/Reto/Reto"
import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";
import { Row } from 'react-bootstrap'
import { getRetos } from "../data/repository/RetoRepository";

function Home() {
  const [habitos, setHabitos] = useState([]);

  useEffect(() => {
    getRetos().then(data => setHabitos(data));
  }, [])

  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center">
        {
          habitos.length === 0
            ? <p className="mt-5">Agrega un habito para empezar!</p>
            : (<Container className="my-5">
              <Row style={{ justifyContent: "center" }}>
                {habitos.map((reto, i) => <Reto reto={reto} key={`reto-key-${i}`} />)}
              </Row>
            </Container>)
        }
        <StyledButton />
      </Container>
    </Fragment>
  );
}

export default Home;

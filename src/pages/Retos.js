import React, { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import StyledNavbar from "../components/Navbar/StyledNavbar";
import { Row } from 'react-bootstrap'
import { getRetos } from "../data/repository/RetoRepository";
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from "react-router-dom";
import VerReto from "../components/Reto/verReto"


function Retos() {
  const [habitos, setHabitos] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    getRetos().then(data => setHabitos(data));
  }, [])


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
                habitos.filter((reto) => reto.categoria === categoria && reto.isDefault === true).map((reto, i) => <VerReto reto={reto} key={`reto-key-${i}`} />)
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

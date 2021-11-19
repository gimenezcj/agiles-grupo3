import React, { Fragment, useEffect, useState ,Text} from "react";
import Container from "react-bootstrap/Container";
import StyledNavbar from "../components/Navbar/StyledNavbar";
import { Row } from 'react-bootstrap'
import { getRetos } from "../data/repository/RetoRepository";
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from "react-router-dom";
import VerReto from "../components/Reto/verReto"

<<<<<<< HEAD
function Retos() {
  const [habitos, setHabitos] = useState([]);
=======

function Retos(props) {
  const [habitos,setHabitos] = useState([]);
 const { search } = useLocation();
>>>>>>> 26e5aac2eff05ce212f81539fac38f6ab789f22a

  useEffect(() => {
    getRetos().then(data => setHabitos(data));
  }, [])

<<<<<<< HEAD
=======

  let query = React.useMemo(() => new URLSearchParams(search), [search]);
  let categoria=query.get("categoria");

>>>>>>> 26e5aac2eff05ce212f81539fac38f6ab789f22a
  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center">

        {
          <Container className="my-5">
<<<<<<< HEAD

            <Row style={{ justifyContent: "center" }}>
              {
                habitos.map((reto, i) => <VerReto reto={reto} key={`reto-key-${i}`} />)
              }
            </Row>
          </Container>
=======

              <Row style={{ justifyContent: "center" }}>
                   {
                    habitos.filter((reto)=>  reto.categoria===categoria && reto.isDefault===true  ).map((reto, i) => <VerReto reto={reto}  key={`reto-key-${i}`}/>)
                  }


              </Row>
            </Container>
>>>>>>> 26e5aac2eff05ce212f81539fac38f6ab789f22a
        }
        <Link to="/categorias">
          <Button style={{ "borderRadius": "50px" }} size="xl" variant="primary" rounded="true">Volver</Button>
        </Link>
      </Container>
<<<<<<< HEAD
=======


>>>>>>> 26e5aac2eff05ce212f81539fac38f6ab789f22a
    </Fragment>
  );
}

export default Retos;

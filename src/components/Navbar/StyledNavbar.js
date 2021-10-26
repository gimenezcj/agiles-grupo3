import { Fragment, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { Link } from "react-router-dom";


import "./StyledNavbar.css";

function StyledNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleClick()
  }, [])

  const handleClick = () => {
    let sidebar = document.getElementById("sidebar");
    setOpen(!open);
    if (open) {
      sidebar.classList.remove("close");
    } else {
      sidebar.classList.add("close");
    }
  }

  return (
    <Fragment>
      <Navbar className="navbar-dark bg-dark" expand="true">
        <Container fluid className="d-flex justify-content-start">
          <NavbarToggle className="text-white" aria-controls="sidebar" onClick={() => handleClick()} />
          <NavbarBrand className="mx-4 text-white" href="/">Desafíame</NavbarBrand>
        </Container>
      </Navbar>
      <div id="sidebar">
        <Container>
          <h4 className="text-center mt-4">Desafíame</h4>
          <hr/>
<<<<<<< HEAD
          <a className="nav-link active" href="/categorias"><h4 className="text-center mt-4">Categorias</h4></a>
=======
          <Link className="nav-link active text-center mt-4" to="/categorias"><h4>Categorias</h4></Link>
          <Link className="nav-link active text-center mt-4" to="/modificar"><h4>Modificar</h4></Link>
          <Link className="nav-link active text-center mt-4" to="/agregar"><h4>Agregar</h4></Link>
>>>>>>> ef4c340e598145e724043e32e3ca6bb04bafed06
        </Container>
      </div>
    </Fragment >
  )
}

export default StyledNavbar;
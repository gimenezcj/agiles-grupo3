import { Fragment, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarBrand from "react-bootstrap/NavbarBrand";

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
        </Container>
      </div>
    </Fragment >
  )
}

export default StyledNavbar;
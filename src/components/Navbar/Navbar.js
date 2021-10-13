import { Fragment, useState } from "react";
import { Navbar as StyledNavbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarBrand from "react-bootstrap/NavbarBrand";

import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("click");
    let sidebar = document.getElementById("sidebar")
    setOpen(!open);
    if (open) {
      sidebar.classList.remove("close");
      sidebar.classList.add("open");
    } else {
      sidebar.classList.remove("open");
      sidebar.classList.add("close");
    }
  }

  return (
    <Fragment>
      <StyledNavbar bg="light" expand="xxl">
        <Container>
          <NavbarToggle aria-controls="sidebar" onClick={() => handleClick()} />
          <NavbarBrand href="/">Desafíame</NavbarBrand>
        </Container>
      </StyledNavbar>
      <div id="sidebar">
        sidebar
      </div>
    </Fragment>
  )
}

export default Navbar;
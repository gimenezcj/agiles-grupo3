import { Fragment } from "react";

import {Container, Image} from "react-bootstrap";

import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";

function Perfil() {
  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center my-5">
        <table style={{"display":"block ruby"}} >
          <tr><td><Image src="https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/07/avatar_user_33_1501099547-64x64.jpg" roundedCircle /></td></tr>
          <tr><td><h2>Elza Pato</h2></td></tr>
          <tr><td><h6 style={{"color":"gray"}}>juanadearco@gmail.com</h6></td></tr>
          <tr><td><hr /></td></tr>
        </table>
      </Container>
    </Fragment>
  );
}


export default Perfil;

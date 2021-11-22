import { Fragment } from "react";
import { Container, Image } from "react-bootstrap";

import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledCalendar from "../components/StyledCalendar/StyledCalendar";

//import { User } from "../data/model/User";

function Perfil() {
  const {name,mail}=JSON.parse(localStorage.getItem("user"));

  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center my-5">
        <Image
          width="150px"
          src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" roundedCircle
        />
        <h2 className="mt-2">{name}</h2>
        <h6 style={{ "color": "gray" }}>{mail}</h6>
        <hr className="m-auto mt-4" width="200px" />
        <h2 className="mt-4">Mi calendario</h2>
        <StyledCalendar />
      </Container>
    </Fragment >
  );
}


export default Perfil;

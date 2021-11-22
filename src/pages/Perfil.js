import React, { Fragment, useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";

import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledCalendar from "../components/StyledCalendar/StyledCalendar";

//import { User } from "../data/model/User";

function Perfil() {

  const [user, setUser] = useState({})
  useEffect(() => {
    setUser(
      JSON.parse(localStorage.getItem("user"))
    )
  }, [])


  return (
    <Fragment>
      <StyledNavbar />
      <Container className="text-center my-5">

        {user && (
          <Fragment>
            <Image
              width="150px"
              src={user.photo} roundedCircle
            />
            <h2 className="mt-2">{user.name}</h2>
            <h6 style={{ "color": "gray" }}>{user.mail}</h6>
          </Fragment>
        )}

        <hr className="m-auto mt-4" width="200px" />
        <h2 className="mt-4">Mi calendario</h2>
        <StyledCalendar />
      </Container>
    </Fragment >
  );
}


export default Perfil;

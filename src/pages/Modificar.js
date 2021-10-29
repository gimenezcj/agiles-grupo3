import React, { useEffect } from "react";
import Reto from "../components/Reto";
import FormModificar from "../components/FormModificar";
import StyledNavbar from "../components/Navbar/StyledNavbar";

function Modificar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [title, setTitle] = React.useState("Este es el título");
  const [description, setDescription] = React.useState(
    "Esta es la descripción del reto"
  );

  return (
    <div>
      <StyledNavbar />

      <div className=" my-5">
        <Reto
          setModalShow={setModalShow}
          title={title}
          description={description}
          bsPrefix="https://static.wixstatic.com/media/0009e0_cc8e33a01f80407e92e0bb451024e15b~mv2.png"
        />
      </div>

      <FormModificar
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </div>
  );
}

export default Modificar;

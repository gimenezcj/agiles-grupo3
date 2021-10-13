import React, { useEffect } from "react";
import Reto from "../components/Reto";
import FormModificar from "../components/FormModificar";

function Modificar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [title, setTitle] = React.useState("Este es el título");
  const [description, setDescription] = React.useState(
    "Esta es la descripción del reto"
  );

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <div>
      <div className=" my-5" onClick={() => setModalShow(true)}>
        <Reto
          title={title}
          description={description}
          bsPrefix="https://static.wixstatic.com/media/0009e0_cc8e33a01f80407e92e0bb451024e15b~mv2.png"
        />
      </div>

      <FormModificar
        show={modalShow}
        onHide={() => setModalShow(false)}
        setTitle={setTitle}
        setDescription={setDescription}
        setModalShow={setModalShow}
      />
    </div>
  );
}

export default Modificar;

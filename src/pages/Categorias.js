import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import StyledNavbar from "../components/Navbar/StyledNavbar";
import Categoria from "../components/Categoria/Categoria";

const Categorias = () => {
  return (
    <div>
      <StyledNavbar />

      <h1
        className="display-4"
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
      >
        Categorias
      </h1>
      <div className="container">
        <Row>
          <Col md={3} className="mx-5">
            <Categoria
              imagen="https://image.freepik.com/free-photo/young-man-runner-tying-shoelaces_1421-46.jpg"
              titulo="Running"
              texto="En esta categoria podras encontrar retos relacionados al mundo de la programación , desde la logica basica, hasta los algoritmos más complejos."
              fecha="AGOSTO, 2021"
              estado="Pendiente"
              detalle="Practica / Running"
              categoria="Correr"
            />
          </Col>

          <Col md={3} className="mx-5">
            <Categoria
              imagen="https://image.freepik.com/free-photo/girl-granola-honey-blue-white-natural_1428-679.jpg"
              titulo="Healthy"
              texto="En esta categoria podras encontrar retos relacionados al aprendizaje de los distintos idiomas del mundo, desde completar oraciones, hasta cuestionarios de comprensión de lectura."
              fecha="AGOSTO, 2021"
              estado="Pendiente"
              detalle="Practica / Healthy"
              categoria="Healthy"
            />
          </Col>

          <Col md={3} className="mx-5">
            <Categoria
              imagen="https://image.freepik.com/free-photo/sports-tools_53876-138077.jpg"
              titulo="Actividad Física"
              texto="En esta categoria podras encontrar retos relacionados al mundo de los deportes, desde ejercicios básicos hasta los mas extenuantes."
              fecha="AGOSTO, 2021"
              estado="Pendiente"
              detalle="Practica / Actividad Física"
              categoria="Fisico"
            />
          </Col>
          <Col md={3} className="mx-5 mt-5">
            <Categoria
              imagen="https://image.freepik.com/free-vector/flat-thinking-concept_23-2148163823.jpg"
              titulo="Mental"
              texto="En esta categoria podras encontrar retos mentales como acertijos, crucigramas, etc.Desde encontrar esa motivación para descubrir libros nuevos hasta retos para mejorar tus tiempos de lectura."
              fecha="AGOSTO, 2021"
              estado="Pendiente"
              detalle="Practica / Mental"
              categoria="Mental"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Categorias;

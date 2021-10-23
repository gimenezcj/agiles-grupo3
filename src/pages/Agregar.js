import StyledNavbar from "../components/Navbar/StyledNavbar";
import StyledButton from "../components/StyledButton";

function Agregar() {
  return (
      <div className="Agregar">
        <br></br>
      <div className="row d-flex justify-content-center mb-3">
        <div className="col-md-6">
            <h2 className="lead"><b>AGREGA TU RETO!</b></h2>
            <p className="lead">
              Deberas completar los datos para ingresar un nuevo reto.
            </p>
          </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
      <form>
      
      <div className="form-group"> 
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="Ingrese el nombre del reto"/>
          <label for="floatingInput">Titulo</label>
        </div>  
      </div>

      <div className="form-group">
      <div className="form-floating mb-3">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Descripcion</label>
      </div>
      </div>
      <div className="row d-flex justify-content-center mb-3">
        <button type="submit" className="btn btn-primary" >Agregar</button>
      </div>
      </form>
      </div>
      </div>

      </div>
  );
}

export default Agregar;

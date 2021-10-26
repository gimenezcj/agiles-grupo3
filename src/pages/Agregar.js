<<<<<<< HEAD
=======
import StyledNavbar from "../components/Navbar/StyledNavbar";

>>>>>>> ef4c340e598145e724043e32e3ca6bb04bafed06
function Agregar() {
  return (
    <div className="Agregar">
      <br></br>
      <div class="row d-flex justify-content-center mb-3">
        <div class="col-md-3">
          <h2 class="lead">
            <b>AGREGA TU RETO!!</b>
          </h2>
          <p class="lead">
            Deberas completar los datos para ingresar un nuevo reto.
          </p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-3">
          <form>
            <div class="form-group">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" />
                <label for="inputTitle">Titulo</label>
              </div>
            </div>

            <div class="form-group">
              <div class="form-floating mb-3">
                <textarea class="form-control" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Descripcion</label>
              </div>
            </div>
            <div class="row d-flex justify-content-center mb-3">
              <button type="submit" class="btn btn-primary">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Agregar;

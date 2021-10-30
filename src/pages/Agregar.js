import StyledNavbar from "../components/Navbar/StyledNavbar";

function Agregar() {
  return (
    <div>
      <StyledNavbar />
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
                <select class="form-select  mb-3">
                  <option selected>Amigos</option>
                  <option value="1">Amigo 1</option>
                  <option value="2">Amigo 2</option>
                  <option value="3">Amigo 3</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-select mb-3">
                  <option selected>Categoris</option>
                  <option value="Leer">Leer</option>
                  <option value="Escribir">Escribir</option>
                  <option value="Correr">Correr</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <div class="input-group">
                  <input
                    class="form-control py-2 border-right-0 border"
                    type="date"
                  />
                  <input
                    class="form-control py-2 border-right-0 border"
                    type="date"
                  />
             
                </div>
              </div>

              <div class="form-group">
                <div class="form-floating mb-3">
                  <textarea
                    class="form-control"
                    id="floatingTextarea"
                  ></textarea>
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
    </div>
  );
}

export default Agregar;

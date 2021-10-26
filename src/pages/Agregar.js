import StyledNavbar from "../components/Navbar/StyledNavbar";

function Agregar() {
  return (
    <div className="Agregar">
<<<<<<< HEAD
      <StyledNavbar />

      <br></br>
      <div class="row d-flex justify-content-center mb-3">
        <div class="col-md-6">
          <h2 class="lead">
            <b>AGREGA TU RETO!</b>
=======
      <br></br>
      <div class="row d-flex justify-content-center mb-3">
        <div class="col-md-3">
          <h2 class="lead">
            <b>AGREGA TU RETO!!</b>
>>>>>>> 0b1b3836f14b5e126f742201d4aae091cb1d76a0
          </h2>
          <p class="lead">
            Deberas completar los datos para ingresar un nuevo reto.
          </p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
<<<<<<< HEAD
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Ingrese el nombre del reto"
                />
                <label for="floatingInput">Titulo</label>
=======
        <div class="col-md-3">
          <form>
            <div class="form-group">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" />
                <label for="inputTitle">Titulo</label>
>>>>>>> 0b1b3836f14b5e126f742201d4aae091cb1d76a0
              </div>
            </div>

            <div class="form-group">
              <div class="form-floating mb-3">
<<<<<<< HEAD
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
=======
                <textarea class="form-control" id="floatingTextarea"></textarea>
>>>>>>> 0b1b3836f14b5e126f742201d4aae091cb1d76a0
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

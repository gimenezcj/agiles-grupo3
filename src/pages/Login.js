import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../data/data_source/firebase-config";
import * as database from "../data/repository/UserRepository";
import { User } from "../data/model/User";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const login = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        let user = {
          name: result.user.displayName,
          mail: result.user.email,
          photo: result.user.photoURL,
          id: "",
          retoList: result.user.retoList,
        };

        const users = await database.getUsers();
        let coincidence = users.filter((u) => u.mail === user.mail);

        if (coincidence.length === 0) {
          user.id = await database.addUser(new User(user.name, user.mail, []));
        } else {
          user.id = coincidence[0].id;
          user.retoList = coincidence[0].retoList;
        }
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/home";
      })
      .catch((error) => {
        alert("Hubo un error al loguearse.");
      });
  };

  return (
    <div class="container">
      <div class="col-md-12 col-md-offset-2 p-5">
        <div class="card text-center">
          <div class="card-header">TE RETO!</div>
          <div class="card-body">
            <h5 class="card-title">Bienvenido!</h5>
            <p class="card-text">Para ingresar debes loguearse</p>
            <button class="btn btn-primary" onClick={login}>
              Sign In With Google
            </button>
          </div>
          <div class="card-footer text-muted">Grupo 1</div>
        </div>
      </div>
    </div>
  );
};

export default Login;

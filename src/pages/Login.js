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
          id: ""
        };

        const users = await database.getUsers();
        let coincidence = users.filter((u) => u.mail === user.mail);

        if (coincidence.length === 0) {
          user.id = await database.addUser(new User(user.name, user.mail, []));
        } else {
          user.id = coincidence[0].id;
        }
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/home";
      })
      .catch((error) => {
        alert("Hubo un error al loguearse.");
      });
  };

  return <button onClick={login}>Sign In With Google</button>;
};

export default Login;

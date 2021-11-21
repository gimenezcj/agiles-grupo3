import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../data/data_source/firebase-config";
import * as database from "../data/repository/UserRepository";
import { User } from "../data/model/User";

const SignIn = () => {
  const provider = new GoogleAuthProvider();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = {
          name: result.user.displayName,
          email: result.user.email,
        };
        database.addUser(
          new User(result.user.displayName, result.user.email, [])
        );
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/home";
      })
      .catch((error) => {
        alert("Hubo un error al loguearse.");
      });
  };

  return <button onClick={login}>Sign In With Google</button>;
};

export default SignIn;

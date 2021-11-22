import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { userConverter } from "../model/User";
import app from "../data_source/firebase-config";

/**
    //----------- imports -------------
    import * as database from '../data/repository/UserRepository';
    import {User} from '../data/model/User'

    //---------simple examples:----------
    //----------- add user ------------
    let retos = []
    retos.push("retoId1")
    retos.push("retoId2")
    database2.addUser(new User("fran", "fran@hotmail.com.ar", retos));
    //----------- get all users -----------------
    database.getUsers().then(users => console.log(users));

    
 */

const db = getFirestore(app);
const USERS_PATH = "users";

export async function getUsers() {
  let usersList = [];
  let query = collection(db, USERS_PATH).withConverter(userConverter);
  let result = await getDocs(query);
  result.docs.forEach((doc) => {
    let user = doc.data();
    user.id = doc.id;
    usersList.push(user);
  });
  return usersList;
}

export async function getUserById(id) {
  const userQuery = doc(db, USERS_PATH, id).withConverter(userConverter);
  const userSnapshot = await getDoc(userQuery);
  const user = userSnapshot.data();
  user.id = userSnapshot.id;
  return user;
}

export async function addUser(user) {
  const userRef = doc(collection(db, USERS_PATH)).withConverter(userConverter);
  await setDoc(userRef, user);
  return userRef.id;
}

export async function updateUser(user) {
  await setDoc(doc(db, USERS_PATH, user.id).withConverter(userConverter), user);
}

export async function deleteUserById(id) {
  await deleteDoc(doc(db, USERS_PATH, id));
}
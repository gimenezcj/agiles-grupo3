import { getFirestore, doc, getDoc, collection, getDocs, deleteDoc, setDoc } from 'firebase/firestore';
import { retoConverter } from '../model/Reto'
import app from '../data_source/firebase-config'

/**
 * AYUDA (por las dudas)
 * 
 * ----- basic imports from component: ------
 * 
   import * as database from '../data/repository/RetoRepository';
   import {Reto} from '../data/model/Reto'
 * 
 * ----- basic usage methods ------
 * 
  //se sobreentiende que para eliminar un reto u obtenerlo por id tienen que pasar como parametro reto.id:
  database.getRetos().then(retos => console.log(retos));
  database.getRetoById("F352XJLds9UshCFckUPJ").then(reto => console.log(reto));
  database.addReto(new Reto("Nadar","Descripcion para nadar","Físico", "12/09/2021", "18/09/2021", false));
  database.deleteRetoById("99JRBRHW1uNP5VK53gLD");
  //como ustedes sacan el reto de la bd, una vez editado sus atributos en modificar lo pasan entero al update:
  database.updateReto(reto);
 * 
 *  -------------------------------
 */


const db = getFirestore(app);
const RETOS_PATH = "retos";

export async function getRetos() {
  let retosList = [];
  let query = collection(db, RETOS_PATH).withConverter(retoConverter);
  let result = await getDocs(query);
  result.docs.forEach(doc => {
    let reto = doc.data();
    reto.id = doc.id;
    retosList.push(reto);
  });
  return retosList;
}

export async function getRetoById(id) {
  const retoQuery = doc(db, RETOS_PATH, id).withConverter(retoConverter);
  const retoSnapshot = await getDoc(retoQuery);
  const reto = retoSnapshot.data();
  reto.id = retoSnapshot.id;
  return reto;
}

export async function addReto(reto) {
  reto.dailyTimestamp = new Date().getTime() - (1000 * 60 * 60 * 24 * 5);
  const retoRef = doc(collection(db, RETOS_PATH)).withConverter(retoConverter);
  await setDoc(retoRef, reto);
}

export async function updateReto(reto) {
  await setDoc(doc(db, RETOS_PATH, reto.id).withConverter(retoConverter), reto);
}

export async function deleteRetoById(id) {
  await deleteDoc(doc(db, RETOS_PATH, id));
}


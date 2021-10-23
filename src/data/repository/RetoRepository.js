import app from '../data_source/firebase-config'
import { getFirestore, doc, getDoc, collection, getDocs, addDoc, deleteDoc, setDoc} from 'firebase/firestore';
import { Reto, retoConverter } from '../model/Reto'

const db = getFirestore();
const RETOS_PATH = "retos"

export async function getRetos() {
  let retosList = [];
  let query = collection(db, RETOS_PATH);
  let result = await getDocs(query);
  retosList = result.docs.map(doc => new Reto(doc.id,doc.data().title, doc.data().description) );
  return retosList;
}

export async function getRetoById(id) {
  const retoQuery = doc(db, RETOS_PATH, id).withConverter(retoConverter)
  const retoSnapshot = await getDoc(retoQuery);
  const reto = retoSnapshot.data()
  reto.id = retoSnapshot.id
  return reto;
 }

export async function addReto(reto) { 
  const retoRef = await addDoc(collection(db, RETOS_PATH), {
    title: reto.title,
    description: reto.description,
  });
  return retoRef.id
 }

export async function updateReto(reto) { 
  await setDoc(doc(db, RETOS_PATH, reto.id), {
    title: reto.title,
    description: reto.description,
  });
}

export async function deleteRetoById(id) {
  await deleteDoc(doc(db, RETOS_PATH, id));
 }
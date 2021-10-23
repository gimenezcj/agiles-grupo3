import app from '../data_source/firebase-config'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const db = getFirestore(app);

export async function getRetos() {
  const retos = collection(db, 'retos');
  const retosSnapshot = await getDocs(retos);
  const retosList = retosSnapshot.docs.map(doc => doc.data());
  return retosList;
}

export async function getReto(id) { }

export async function insertReto(reto) { }

export async function updateReto(reto) { }

export async function deleteReto(reto) { }
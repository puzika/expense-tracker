import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVucQvJ89eBFoxcbUwIlrJ3dkeMrNYqKI",
  authDomain: "mobilka-lab.firebaseapp.com",
  projectId: "mobilka-lab",
  storageBucket: "mobilka-lab.firebasestorage.app",
  messagingSenderId: "940041717901",
  appId: "1:940041717901:web:d3558bd9a056730528fac4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllDocs(collectionName: string) {
  return await getDocs(collection(db, collectionName));
}
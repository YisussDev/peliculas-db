import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7DsD-QxT71mNClLqSNZEfcMtUIkdUvHQ",
    authDomain: "morfeus-72e70.firebaseapp.com",
    projectId: "morfeus-72e70",
    storageBucket: "morfeus-72e70.appspot.com",
    messagingSenderId: "465142946513",
    appId: "1:465142946513:web:bd99dcdb4c2e01821a83f0",
    measurementId: "G-ZSD94K3B56"
};

initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function crearUsuario (email, password) {
  try{
  let credenciales = await createUserWithEmailAndPassword(getAuth(), email, password)
  return credenciales;
} catch (e){
    return false;
  }
}

export async function iniciarSesion (email, password){
    try{
        let credenciales = await signInWithEmailAndPassword(getAuth(), email, password)
        return credenciales.user.accessToken
        } catch(e){
            return false
        }
        
    }

export async function cargaDatosF (){
  
  try{
    let respuesta = await getDocs(collection(db, "usuarios"));
    return respuesta
    }
  catch (e) {
    console.log(e)
  }
}


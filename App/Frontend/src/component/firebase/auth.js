import {auth} from "./firebase";
import { createUserWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password); 
};

export const doSignInWithEmailAndPassword = async (email, password) =>{
  return signInWithEmailAndPassword(auth, email, password); 
};

export const  doSignInWithGoogle = async () =>{    
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
}

// export const doSignOut = async () =>{
//     return auth.signOut(auth);
// }

// export const doPasswordReset =  (email) =>{
//     return sendPasswordResetEmail(auth.currentUser, email);
// }   

// export const doSendEmailVerification =  () =>{
//     return sendEmailVerification(auth.currentUser,{
//         url:`${window.location.origin}/home`
//     });
// }   
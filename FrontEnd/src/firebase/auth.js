import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const createUserEmailAndPass = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserEmailAndPass = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return signOut(auth);
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const token = result._tokenResponse.idToken;
    console.log("Google Sign-In Success:", { user, token });
    return { user, token };
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    throw error;
  }
};
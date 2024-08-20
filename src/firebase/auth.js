import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const createUserEmailAndPass = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserEmailAndPass = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
    return signOut(auth);
};

// Uncomment and implement these if needed
// export const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
// };

// export const sendPasswordResetEmail = async (email) => {
//     return sendPasswordResetEmail(auth, email);
// };

// export const updatePassword = async (password) => {
//     return updatePassword(auth.currentUser, password);
// };

// export const sendEmailVerification = async () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`,
//     });
// };

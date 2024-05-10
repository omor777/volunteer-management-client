import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        localStorage.setItem("userEmail", currentUser?.email);
      } else {
        setLoading(false);
        setUser(currentUser);
        localStorage.removeItem("userEmail");
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    loginUser,
    googleLogin,
    updateUserProfile,
    logoutUser,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

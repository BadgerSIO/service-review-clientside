import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const authinfo = {};
  return <AuthContext.Provider value={authinfo}></AuthContext.Provider>;
};

export default AuthProvider;

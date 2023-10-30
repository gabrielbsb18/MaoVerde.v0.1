import React, { createContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState({});
  const navigation = useNavigation();

  function signIn(email, password, username) {
    if (email !== "" && password !== "" && username !== "") {
      setUser({
        email: email,
        status: "ATIVO",
      });
      setUsername({
        username: username,
      });

      navigation.navigate("Home");
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user,username}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
